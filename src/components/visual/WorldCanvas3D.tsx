import { useEffect, useRef } from 'react';

interface Point3D {
  x: number;
  y: number;
  z: number;
}

interface NodeState {
  // Base coordinates in local space (-1 to 1)
  base: Point3D;
  // Exploded architecture coordinates
  arch: Point3D;
  // Neural web coordinates
  neural: Point3D;
  // Consolidated system coordinates
  system: Point3D;
  tier: 0 | 1 | 2; // Domain, Application, Infrastructure
  hub: boolean;
  pulsePhase: number;
}

/**
 * Continuous 3D Spatial Canvas:
 * Renders an uninterrupted, full-screen 3D world across the entire scroll journey.
 * Morphs seamlessly through 5 distinct geometric and spatial phases:
 * Phase 1: Blueprint Polyhedron
 * Phase 2: Exploded 3-Tier Clean Architecture Planes
 * Phase 3: Volumetric Neural Web with pulsing synapses
 * Phase 4: Consolidated System Core Ring
 * Phase 5: Digital Terminal Compass Reticle
 */
export function WorldCanvas3D() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const root = document.documentElement;

    let colors = {
      line: '#888',
      node: '#aaa',
      accent: '#ea6c44',
      glow: 'rgba(234, 108, 68, 0.15)',
    };

    const readColors = () => {
      const cs = getComputedStyle(root);
      colors = {
        line: cs.getPropertyValue('--c-border').trim() || '#888',
        node: cs.getPropertyValue('--c-dim').trim() || '#aaa',
        accent: cs.getPropertyValue('--c-accent').trim() || '#ea6c44',
        glow: cs.getPropertyValue('--c-accent-soft').trim() || 'rgba(234, 108, 68, 0.15)',
      };
    };
    readColors();

    let w = 0;
    let h = 0;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);

    // Global scroll progress (0.0 to 1.0)
    let scrollProgress = 0;
    let targetScrollProgress = 0;

    // Mouse parallax
    let mouseX = 0;
    let mouseY = 0;
    let targetMouseX = 0;
    let targetMouseY = 0;

    const onScroll = () => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (maxScroll > 0) {
        targetScrollProgress = Math.min(1, Math.max(0, window.scrollY / maxScroll));
      }
    };

    const onPointer = (e: PointerEvent) => {
      targetMouseX = (e.clientX / window.innerWidth - 0.5) * 2;
      targetMouseY = (e.clientY / window.innerHeight - 0.5) * 2;
    };

    // Initialize nodes
    const NODE_COUNT = 48;
    const nodes: NodeState[] = [];

    for (let i = 0; i < NODE_COUNT; i++) {
      const tier = (i % 3) as 0 | 1 | 2;
      const angle = (i / NODE_COUNT) * Math.PI * 2;
      const phi = Math.acos(-1 + (2 * i) / NODE_COUNT);
      const theta = Math.sqrt(NODE_COUNT * Math.PI) * phi;

      // Phase 1: Spherical Polyhedron
      const p1: Point3D = {
        x: Math.cos(theta) * Math.sin(phi),
        y: Math.sin(theta) * Math.sin(phi),
        z: Math.cos(phi),
      };

      // Phase 2: Exploded Architecture (3 distinct horizontal isometric planes)
      const planeY = (tier - 1) * 0.7;
      const rad2 = 0.35 + (i % 8) * 0.08;
      const p2: Point3D = {
        x: Math.cos(angle) * rad2,
        y: planeY,
        z: Math.sin(angle) * rad2,
      };

      // Phase 3: Volumetric Neural Web (cluster cloud)
      const p3: Point3D = {
        x: (Math.sin(i * 1.7) * 0.9),
        y: (Math.cos(i * 2.3) * 0.9),
        z: (Math.sin(i * 3.1) * 0.9),
      };

      // Phase 4: Consolidated Ring of 6 server nodes
      const ringGroup = i % 6;
      const ringAngle = (ringGroup / 6) * Math.PI * 2;
      const p4: Point3D = {
        x: Math.cos(ringAngle) * 0.9 + (Math.random() - 0.5) * 0.15,
        y: (tier - 1) * 0.3,
        z: Math.sin(ringAngle) * 0.9 + (Math.random() - 0.5) * 0.15,
      };

      nodes.push({
        base: p1,
        arch: p2,
        neural: p3,
        system: p4,
        tier,
        hub: i % 5 === 0,
        pulsePhase: Math.random() * Math.PI * 2,
      });
    }

    const resize = () => {
      w = window.innerWidth;
      h = window.innerHeight;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      onScroll();
    };

    // Linear interpolation helper
    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    // 3D Matrix Projection
    const project = (pt: Point3D, rotX: number, rotY: number, camDist: number, scale: number) => {
      // Rotation around Y (yaw)
      const cosY = Math.cos(rotY);
      const sinY = Math.sin(rotY);
      const x1 = pt.x * cosY - pt.z * sinY;
      const z1 = pt.z * cosY + pt.x * sinY;

      // Rotation around X (pitch)
      const cosX = Math.cos(rotX);
      const sinX = Math.sin(rotX);
      const y2 = pt.y * cosX - z1 * sinX;
      const z2 = z1 * cosX + pt.y * sinX;

      // Perspective divide
      const fov = camDist / (camDist + z2);
      return {
        px: w * 0.5 + x1 * scale * fov,
        py: h * 0.5 + y2 * scale * fov,
        depth: z2,
        fov,
      };
    };

    let animationFrame = 0;
    let time = 0;

    const render = () => {
      time += 0.015;

      // Smooth scroll and mouse easing
      scrollProgress += (targetScrollProgress - scrollProgress) * 0.08;
      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;

      ctx.clearRect(0, 0, w, h);

      // Camera orchestration based on scroll progress (0.0 to 1.0)
      let camPitch = 0.4 + mouseY * 0.25;
      let camYaw = time * 0.2 + mouseX * 0.35;
      let camDist = 3.4;
      const baseScale = Math.min(w, h) * 0.38;

      if (scrollProgress < 0.25) {
        // Scene 1: Initial Blueprint Polyhedron
        camPitch = 0.35 + scrollProgress * 0.5 + mouseY * 0.2;
        camYaw = time * 0.25 + scrollProgress * Math.PI + mouseX * 0.3;
        camDist = 3.4;
      } else if (scrollProgress < 0.55) {
        // Scene 2: Exploded Architecture Planes
        const t = (scrollProgress - 0.25) / 0.3;
        camPitch = lerp(0.5, 0.85, t) + mouseY * 0.15;
        camYaw = lerp(0.8, 1.8, t) + mouseX * 0.2;
        camDist = lerp(3.4, 2.6, t);
      } else if (scrollProgress < 0.8) {
        // Scene 3: Volumetric Neural Web
        const t = (scrollProgress - 0.55) / 0.25;
        camPitch = lerp(0.85, -0.3, t) + mouseY * 0.2;
        camYaw = lerp(1.8, 3.4, t) + mouseX * 0.35;
        camDist = lerp(2.6, 2.3, t);
      } else {
        // Scene 4 & 5: Consolidated Systems & Terminal Reticle
        const t = (scrollProgress - 0.8) / 0.2;
        camPitch = lerp(-0.3, 0.1, t) + mouseY * 0.1;
        camYaw = lerp(3.4, 4.5, t) + mouseX * 0.2;
        camDist = lerp(2.3, 3.8, t);
      }

      // Compute current interpolated node positions
      const currentPoints: { pt: Point3D; hub: boolean; tier: number }[] = [];

      for (const n of nodes) {
        let curX = n.base.x;
        let curY = n.base.y;
        let curZ = n.base.z;

        if (scrollProgress < 0.3) {
          // Morph between Polyhedron and Exploded Architecture
          const t = Math.max(0, (scrollProgress - 0.05) / 0.25);
          curX = lerp(n.base.x, n.arch.x, t);
          curY = lerp(n.base.y, n.arch.y, t);
          curZ = lerp(n.base.z, n.arch.z, t);
        } else if (scrollProgress < 0.65) {
          // Morph between Exploded Architecture and Neural Web
          const t = (scrollProgress - 0.3) / 0.35;
          curX = lerp(n.arch.x, n.neural.x, t);
          curY = lerp(n.arch.y, n.neural.y, t);
          curZ = lerp(n.arch.z, n.neural.z, t);
        } else {
          // Morph between Neural Web and Consolidated Systems
          const t = Math.min(1, (scrollProgress - 0.65) / 0.3);
          curX = lerp(n.neural.x, n.system.x, t);
          curY = lerp(n.neural.y, n.system.y, t);
          curZ = lerp(n.neural.z, n.system.z, t);
        }

        currentPoints.push({
          pt: { x: curX, y: curY, z: curZ },
          hub: n.hub,
          tier: n.tier,
        });
      }

      // Project points to 2D
      const projected = currentPoints.map((item) => ({
        ...item,
        proj: project(item.pt, camPitch, camYaw, camDist, baseScale),
      }));

      // Render architectural plane bounds during Phase 2
      if (scrollProgress > 0.15 && scrollProgress < 0.65) {
        const planeAlpha = Math.sin(((scrollProgress - 0.15) / 0.5) * Math.PI) * 0.25;
        const tiersY = [-0.7, 0.0, 0.7];
        tiersY.forEach((py) => {
          const corner1 = project({ x: -1.2, y: py, z: -1.2 }, camPitch, camYaw, camDist, baseScale);
          const corner2 = project({ x: 1.2, y: py, z: -1.2 }, camPitch, camYaw, camDist, baseScale);
          const corner3 = project({ x: 1.2, y: py, z: 1.2 }, camPitch, camYaw, camDist, baseScale);
          const corner4 = project({ x: -1.2, y: py, z: 1.2 }, camPitch, camYaw, camDist, baseScale);

          ctx.strokeStyle = colors.accent;
          ctx.globalAlpha = planeAlpha;
          ctx.lineWidth = 0.8;
          ctx.setLineDash([4, 6]);
          ctx.beginPath();
          ctx.moveTo(corner1.px, corner1.py);
          ctx.lineTo(corner2.px, corner2.py);
          ctx.lineTo(corner3.px, corner3.py);
          ctx.lineTo(corner4.px, corner4.py);
          ctx.closePath();
          ctx.stroke();
          ctx.setLineDash([]);
        });
      }

      // Draw dynamic connective 3D lines
      const LINK_DIST = lerp(0.55, 0.75, scrollProgress);
      for (let i = 0; i < projected.length; i++) {
        for (let j = i + 1; j < projected.length; j++) {
          const a = projected[i];
          const b = projected[j];
          const dx = a.pt.x - b.pt.x;
          const dy = a.pt.y - b.pt.y;
          const dz = a.pt.z - b.pt.z;
          const dist = Math.hypot(dx, dy, dz);

          if (dist < LINK_DIST) {
            const proximity = 1 - dist / LINK_DIST;
            const avgDepth = (a.proj.depth + b.proj.depth) * 0.5;
            const depthFade = Math.max(0.08, Math.min(0.85, 1 - avgDepth * 0.4));
            const isHighlight = a.hub || b.hub;

            ctx.strokeStyle = isHighlight ? colors.accent : colors.line;
            ctx.globalAlpha = (isHighlight ? 0.45 : 0.2) * proximity * depthFade;
            ctx.lineWidth = isHighlight ? 1.2 : 0.7;

            ctx.beginPath();
            ctx.moveTo(a.proj.px, a.proj.py);
            ctx.lineTo(b.proj.px, b.proj.py);
            ctx.stroke();
          }
        }
      }

      // Depth z-sorting (Painter's algorithm)
      projected.sort((a, b) => b.proj.depth - a.proj.depth);

      // Draw volumetric nodes
      for (const item of projected) {
        const { proj, hub } = item;
        const depthAlpha = Math.max(0.15, Math.min(1, 1 - proj.depth * 0.35));
        const size = (hub ? 7 : 3.5) * proj.fov;

        ctx.fillStyle = hub ? colors.accent : colors.node;
        ctx.globalAlpha = depthAlpha * (hub ? 0.95 : 0.6);

        // Drafting square node
        ctx.fillRect(proj.px - size * 0.5, proj.py - size * 0.5, size, size);

        if (hub) {
          ctx.strokeStyle = colors.accent;
          ctx.lineWidth = 1;
          ctx.globalAlpha = depthAlpha * 0.5;
          const ring = size * 2.2;
          ctx.strokeRect(proj.px - ring * 0.5, proj.py - ring * 0.5, ring, ring);
        }
      }

      ctx.globalAlpha = 1;
      if (!reduce) {
        animationFrame = requestAnimationFrame(render);
      }
    };

    resize();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('pointermove', onPointer, { passive: true });
    window.addEventListener('resize', resize);

    const mo = new MutationObserver(readColors);
    mo.observe(root, { attributes: true, attributeFilter: ['data-theme'] });
    const mqDark = window.matchMedia('(prefers-color-scheme: dark)');
    mqDark.addEventListener('change', readColors);

    if (reduce) {
      render();
    } else {
      animationFrame = requestAnimationFrame(render);
    }

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('pointermove', onPointer);
      window.removeEventListener('resize', resize);
      mo.disconnect();
      mqDark.removeEventListener('change', readColors);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-0 h-full w-full opacity-60 transition-opacity duration-1000"
      aria-hidden="true"
    />
  );
}
