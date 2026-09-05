import { useEffect, useRef } from 'react';

interface Point3D {
  x: number;
  y: number;
  z: number;
}

interface NodeState {
  base: Point3D;
  arch: Point3D;
  neural: Point3D;
  system: Point3D;
  tier: 0 | 1 | 2; // Domain, Application, Infrastructure
  hub: boolean;
  pulsePhase: number;
  label?: string;
}

interface Particle3D {
  x: number;
  y: number;
  z: number;
  speed: number;
  phase: number;
}

/**
 * Continuous 3D Spatial Canvas:
 * Renders an uninterrupted, full-screen 3D world across the entire scroll journey.
 * Features high-contrast architectural geometry, traveling pulse signals,
 * ambient spatial dust, and dynamic morphing across 5 chapters.
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
      glow: 'rgba(234, 108, 68, 0.25)',
      dim: '#666',
    };

    const readColors = () => {
      const cs = getComputedStyle(root);
      colors = {
        line: cs.getPropertyValue('--c-border').trim() || '#888',
        node: cs.getPropertyValue('--c-dim').trim() || '#aaa',
        accent: cs.getPropertyValue('--c-accent').trim() || '#ea6c44',
        glow: cs.getPropertyValue('--c-accent-soft').trim() || 'rgba(234, 108, 68, 0.25)',
        dim: cs.getPropertyValue('--c-dim').trim() || '#666',
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

    // Initialize 44 architectural nodes
    const NODE_COUNT = 44;
    const nodes: NodeState[] = [];

    const HUB_LABELS: Record<number, string> = {
      0: 'SYS.CORE',
      6: 'DOMAIN.LOGIC',
      14: 'CLEAN.ARCH',
      22: 'AI.PIPELINE',
      30: 'INFRA.STORE',
    };

    for (let i = 0; i < NODE_COUNT; i++) {
      const tier = (i % 3) as 0 | 1 | 2;
      const angle = (i / NODE_COUNT) * Math.PI * 2;
      const phi = Math.acos(-1 + (2 * i) / NODE_COUNT);
      const theta = Math.sqrt(NODE_COUNT * Math.PI) * phi;

      // Phase 1: Spherical Polyhedron
      const p1: Point3D = {
        x: Math.cos(theta) * Math.sin(phi) * 1.1,
        y: Math.sin(theta) * Math.sin(phi) * 1.1,
        z: Math.cos(phi) * 1.1,
      };

      // Phase 2: Exploded Architecture (3 isometric horizontal planes)
      const planeY = (tier - 1) * 0.75;
      const rad2 = 0.4 + (i % 7) * 0.1;
      const p2: Point3D = {
        x: Math.cos(angle) * rad2,
        y: planeY,
        z: Math.sin(angle) * rad2,
      };

      // Phase 3: Volumetric Neural Web
      const p3: Point3D = {
        x: Math.sin(i * 1.8) * 1.05,
        y: Math.cos(i * 2.4) * 0.95,
        z: Math.sin(i * 3.2) * 1.05,
      };

      // Phase 4 & 5: Consolidated Ring of server nodes
      const ringGroup = i % 8;
      const ringAngle = (ringGroup / 8) * Math.PI * 2;
      const p4: Point3D = {
        x: Math.cos(ringAngle) * 0.95 + ((i % 3) - 1) * 0.1,
        y: (tier - 1) * 0.35,
        z: Math.sin(ringAngle) * 0.95 + ((i % 3) - 1) * 0.1,
      };

      nodes.push({
        base: p1,
        arch: p2,
        neural: p3,
        system: p4,
        tier,
        hub: i in HUB_LABELS,
        pulsePhase: Math.random() * Math.PI * 2,
        label: HUB_LABELS[i],
      });
    }

    // Ambient floating spatial particles
    const PARTICLE_COUNT = 36;
    const particles: Particle3D[] = [];
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      particles.push({
        x: (Math.random() - 0.5) * 3.2,
        y: (Math.random() - 0.5) * 3.2,
        z: (Math.random() - 0.5) * 3.2,
        speed: 0.2 + Math.random() * 0.3,
        phase: Math.random() * Math.PI * 2,
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

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    // 3D Matrix Projection
    const project = (pt: Point3D, rotX: number, rotY: number, camDist: number, scale: number) => {
      const cosY = Math.cos(rotY);
      const sinY = Math.sin(rotY);
      const x1 = pt.x * cosY - pt.z * sinY;
      const z1 = pt.z * cosY + pt.x * sinY;

      const cosX = Math.cos(rotX);
      const sinX = Math.sin(rotX);
      const y2 = pt.y * cosX - z1 * sinX;
      const z2 = z1 * cosX + pt.y * sinX;

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
      time += 0.016;

      // Easing for scroll progress and mouse position
      scrollProgress += (targetScrollProgress - scrollProgress) * 0.09;
      mouseX += (targetMouseX - mouseX) * 0.06;
      mouseY += (targetMouseY - mouseY) * 0.06;

      ctx.clearRect(0, 0, w, h);

      // Camera orchestration based on scroll progress
      let camPitch = 0.35 + mouseY * 0.25;
      let camYaw = time * 0.2 + mouseX * 0.35;
      let camDist = 3.4;
      const baseScale = Math.min(w, h) * 0.4;

      if (scrollProgress < 0.25) {
        // Scene 1: Initial Blueprint Polyhedron
        const t = scrollProgress / 0.25;
        camPitch = lerp(0.3, 0.65, t) + mouseY * 0.2;
        camYaw = time * 0.22 + lerp(0, 1.2, t) + mouseX * 0.3;
        camDist = 3.4;
      } else if (scrollProgress < 0.55) {
        // Scene 2: Exploded Architecture Planes
        const t = (scrollProgress - 0.25) / 0.3;
        camPitch = lerp(0.65, 0.9, t) + mouseY * 0.15;
        camYaw = lerp(1.2, 2.2, t) + mouseX * 0.25;
        camDist = lerp(3.4, 2.7, t);
      } else if (scrollProgress < 0.8) {
        // Scene 3: Volumetric Neural Web
        const t = (scrollProgress - 0.55) / 0.25;
        camPitch = lerp(0.9, -0.25, t) + mouseY * 0.2;
        camYaw = lerp(2.2, 3.8, t) + mouseX * 0.35;
        camDist = lerp(2.7, 2.4, t);
      } else {
        // Scene 4 & 5: Consolidated Systems Ring
        const t = (scrollProgress - 0.8) / 0.2;
        camPitch = lerp(-0.25, 0.15, t) + mouseY * 0.12;
        camYaw = lerp(3.8, 4.8, t) + mouseX * 0.2;
        camDist = lerp(2.4, 3.6, t);
      }

      // Render ambient drifting spatial particles
      for (const p of particles) {
        const driftY = p.y + Math.sin(time * p.speed + p.phase) * 0.15;
        const driftX = p.x + Math.cos(time * p.speed * 0.7 + p.phase) * 0.1;
        const projP = project({ x: driftX, y: driftY, z: p.z }, camPitch, camYaw, camDist, baseScale);
        if (projP.fov > 0) {
          const pAlpha = Math.max(0.08, Math.min(0.5, 0.5 - projP.depth * 0.15));
          ctx.fillStyle = colors.accent;
          ctx.globalAlpha = pAlpha;
          ctx.fillRect(projP.px - 1, projP.py - 1, 2, 2);
        }
      }

      // Compute current interpolated node positions
      const currentPoints: { pt: Point3D; hub: boolean; tier: number; label?: string }[] = [];

      for (const n of nodes) {
        let curX = n.base.x;
        let curY = n.base.y;
        let curZ = n.base.z;

        if (scrollProgress < 0.28) {
          const t = Math.max(0, (scrollProgress - 0.04) / 0.24);
          curX = lerp(n.base.x, n.arch.x, t);
          curY = lerp(n.base.y, n.arch.y, t);
          curZ = lerp(n.base.z, n.arch.z, t);
        } else if (scrollProgress < 0.62) {
          const t = (scrollProgress - 0.28) / 0.34;
          curX = lerp(n.arch.x, n.neural.x, t);
          curY = lerp(n.arch.y, n.neural.y, t);
          curZ = lerp(n.arch.z, n.neural.z, t);
        } else {
          const t = Math.min(1, (scrollProgress - 0.62) / 0.32);
          curX = lerp(n.neural.x, n.system.x, t);
          curY = lerp(n.neural.y, n.system.y, t);
          curZ = lerp(n.neural.z, n.system.z, t);
        }

        currentPoints.push({
          pt: { x: curX, y: curY, z: curZ },
          hub: n.hub,
          tier: n.tier,
          label: n.label,
        });
      }

      // Project points to 2D
      const projected = currentPoints.map((item) => ({
        ...item,
        proj: project(item.pt, camPitch, camYaw, camDist, baseScale),
      }));

      // Render architectural plane bounds during Phase 2 (Manifesto & Architecture)
      if (scrollProgress > 0.12 && scrollProgress < 0.68) {
        const planeAlpha = Math.sin(((scrollProgress - 0.12) / 0.56) * Math.PI) * 0.45;
        const tiersY = [-0.75, 0.0, 0.75];
        tiersY.forEach((py) => {
          const corner1 = project({ x: -1.3, y: py, z: -1.3 }, camPitch, camYaw, camDist, baseScale);
          const corner2 = project({ x: 1.3, y: py, z: -1.3 }, camPitch, camYaw, camDist, baseScale);
          const corner3 = project({ x: 1.3, y: py, z: 1.3 }, camPitch, camYaw, camDist, baseScale);
          const corner4 = project({ x: -1.3, y: py, z: 1.3 }, camPitch, camYaw, camDist, baseScale);

          ctx.strokeStyle = colors.accent;
          ctx.globalAlpha = planeAlpha;
          ctx.lineWidth = 1.0;
          ctx.setLineDash([5, 5]);
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

      // Draw high-contrast connective 3D lines
      const LINK_DIST = lerp(0.6, 0.82, scrollProgress);
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
            const depthFade = Math.max(0.18, Math.min(1.0, 1.1 - avgDepth * 0.35));
            const isHighlight = a.hub || b.hub;

            ctx.strokeStyle = isHighlight ? colors.accent : colors.line;
            ctx.globalAlpha = Math.min(0.9, (isHighlight ? 0.72 : 0.42) * (0.35 + 0.65 * proximity) * depthFade);
            ctx.lineWidth = isHighlight ? 1.6 : 1.0;

            ctx.beginPath();
            ctx.moveTo(a.proj.px, a.proj.py);
            ctx.lineTo(b.proj.px, b.proj.py);
            ctx.stroke();

            // Energy signal pulse packet along highlighted links
            if (isHighlight) {
              const pulseT = ((time * 0.9 + (i + j) * 0.18) % 1);
              const pulsePx = lerp(a.proj.px, b.proj.px, pulseT);
              const pulsePy = lerp(a.proj.py, b.proj.py, pulseT);
              ctx.fillStyle = colors.accent;
              ctx.globalAlpha = 0.85 * proximity * depthFade;
              ctx.fillRect(pulsePx - 2, pulsePy - 2, 4, 4);
            }
          }
        }
      }

      // Depth z-sorting (Painter's algorithm)
      projected.sort((a, b) => b.proj.depth - a.proj.depth);

      // Draw volumetric nodes and technical labels
      for (const item of projected) {
        const { proj, hub, label } = item;
        const depthAlpha = Math.max(0.2, Math.min(1, 1 - proj.depth * 0.3));
        const size = (hub ? 8 : 4.5) * proj.fov;

        // Radial glow under hubs
        if (hub) {
          const glowRadius = size * 3.5;
          const grad = ctx.createRadialGradient(proj.px, proj.py, 0, proj.px, proj.py, glowRadius);
          grad.addColorStop(0, colors.glow);
          grad.addColorStop(1, 'transparent');
          ctx.fillStyle = grad;
          ctx.globalAlpha = depthAlpha * 0.7;
          ctx.beginPath();
          ctx.arc(proj.px, proj.py, glowRadius, 0, Math.PI * 2);
          ctx.fill();
        }

        // Drafting node core
        ctx.fillStyle = hub ? colors.accent : colors.node;
        ctx.globalAlpha = depthAlpha * (hub ? 1.0 : 0.75);
        ctx.fillRect(proj.px - size * 0.5, proj.py - size * 0.5, size, size);

        // Framing reticle for hubs
        if (hub) {
          ctx.strokeStyle = colors.accent;
          ctx.lineWidth = 1.2;
          ctx.globalAlpha = depthAlpha * 0.85;
          const ring = size * 2.2;
          ctx.strokeRect(proj.px - ring * 0.5, proj.py - ring * 0.5, ring, ring);

          // Technical micro-annotation
          if (label && proj.px > 80 && proj.px < w - 80) {
            ctx.fillStyle = colors.accent;
            ctx.font = '9px monospace';
            ctx.globalAlpha = depthAlpha * 0.75;
            ctx.fillText(label, proj.px + ring * 0.6, proj.py + 3);
          }
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
      className="pointer-events-none fixed inset-0 z-0 h-full w-full opacity-85 transition-opacity duration-700"
      aria-hidden="true"
    />
  );
}
