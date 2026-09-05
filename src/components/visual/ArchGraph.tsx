import { useEffect, useRef } from 'react';

interface Node3D {
  x: number; // local -1 .. 1
  y: number; // local -1 .. 1
  z: number; // local -1 .. 1
  tier: 0 | 1 | 2; // 0 = Domain, 1 = Application, 2 = Infrastructure
  hub: boolean;
  vx: number;
  vy: number;
  vz: number;
}

/**
 * Interactive 3D Isometric Architecture Cluster:
 * Renders an orthographic/perspective 3D projection of a multi-tiered
 * distributed system and neural architecture. Features pitch/yaw rotation
 * driven by pointer position, depth z-sorting, volumetric node scaling,
 * and distinct semantic architecture planes.
 * Strictly respects prefers-reduced-motion with an isometric static state.
 */
export function ArchGraph({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const root = document.documentElement;

    let colors = { line: '#888', node: '#aaa', accent: '#e4623a' };
    const readColors = () => {
      const cs = getComputedStyle(root);
      colors = {
        line: cs.getPropertyValue('--c-border').trim() || '#888',
        node: cs.getPropertyValue('--c-dim').trim() || '#aaa',
        accent: cs.getPropertyValue('--c-accent').trim() || '#e4623a',
      };
    };
    readColors();

    let w = 0;
    let h = 0;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);

    // Dynamic 3D rotation angles (pitch, yaw)
    let rotX = 0.42; // default isometric pitch
    let rotY = -0.55; // default isometric yaw
    let targetRotX = rotX;
    let targetRotY = rotY;

    // 3D Nodes array across 3 semantic tiers
    let nodes: Node3D[] = [];

    const buildCluster = () => {
      nodes = [];
      const nodeCount = 36;
      for (let i = 0; i < nodeCount; i++) {
        const tier: 0 | 1 | 2 = (i % 3) as 0 | 1 | 2;
        // Tier vertical offsets: Domain (top = -0.55), App (center = 0), Infra (base = +0.55)
        const tierY = (tier - 1) * 0.55;
        const radius = 0.25 + Math.random() * 0.65;
        const angle = Math.random() * Math.PI * 2;

        nodes.push({
          x: Math.cos(angle) * radius + (Math.random() - 0.5) * 0.15,
          y: tierY + (Math.random() - 0.5) * 0.18,
          z: Math.sin(angle) * radius + (Math.random() - 0.5) * 0.15,
          tier,
          hub: i % 6 === 0,
          vx: (Math.random() - 0.5) * 0.0018,
          vy: (Math.random() - 0.5) * 0.0012,
          vz: (Math.random() - 0.5) * 0.0018,
        });
      }
    };

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      w = rect.width;
      h = rect.height;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.max(1, Math.floor(w * dpr));
      canvas.height = Math.max(1, Math.floor(h * dpr));
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      buildCluster();
    };

    const onPointer = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      const normX = (e.clientX - rect.left) / rect.width - 0.5;
      const normY = (e.clientY - rect.top) / rect.height - 0.5;
      targetRotY = -0.55 + normX * 0.65;
      targetRotX = 0.42 - normY * 0.45;
    };

    const onPointerLeave = () => {
      targetRotX = 0.42;
      targetRotY = -0.55;
    };

    // Isometric 3D Projection helper
    const project = (x: number, y: number, z: number, scale: number) => {
      // Rotation around Y
      const cosY = Math.cos(rotY);
      const sinY = Math.sin(rotY);
      const x1 = x * cosY - z * sinY;
      const z1 = z * cosY + x * sinY;

      // Rotation around X
      const cosX = Math.cos(rotX);
      const sinX = Math.sin(rotX);
      const y2 = y * cosX - z1 * sinX;
      const z2 = z1 * cosX + y * sinX;

      // Weak perspective projection for architectural feel
      const distance = 3.2;
      const fov = distance / (distance + z2);

      return {
        px: w * 0.5 + x1 * scale * fov,
        py: h * 0.5 + y2 * scale * fov,
        depth: z2,
        fov,
      };
    };

    const LINK_DISTANCE = 0.42;

    const draw = () => {
      ctx.clearRect(0, 0, w, h);

      // Smooth inertia rotation
      rotX += (targetRotX - rotX) * 0.06;
      rotY += (targetRotY - rotY) * 0.06;

      const scale = Math.min(w, h) * 0.48;

      // Draw subtle isometric reference planes
      const tiers: { y: number; label: string }[] = [
        { y: -0.55, label: 'DOMAIN' },
        { y: 0.0, label: 'APPLICATION' },
        { y: 0.55, label: 'INFRASTRUCTURE' },
      ];

      tiers.forEach((t) => {
        const p1 = project(-0.85, t.y, -0.85, scale);
        const p2 = project(0.85, t.y, -0.85, scale);
        const p3 = project(0.85, t.y, 0.85, scale);
        const p4 = project(-0.85, t.y, 0.85, scale);

        ctx.strokeStyle = colors.line;
        ctx.lineWidth = 0.75;
        ctx.globalAlpha = 0.22;
        ctx.setLineDash([4, 4]);
        ctx.beginPath();
        ctx.moveTo(p1.px, p1.py);
        ctx.lineTo(p2.px, p2.py);
        ctx.lineTo(p3.px, p3.py);
        ctx.lineTo(p4.px, p4.py);
        ctx.closePath();
        ctx.stroke();
        ctx.setLineDash([]);

        // Plane label
        ctx.fillStyle = colors.node;
        ctx.font = '9px monospace';
        ctx.globalAlpha = 0.45;
        ctx.fillText(t.label, p1.px + 4, p1.py - 4);
      });

      // Update positions
      if (!reduce) {
        for (const n of nodes) {
          n.x += n.vx;
          n.y += n.vy;
          n.z += n.vz;
          if (Math.abs(n.x) > 0.85) n.vx *= -1;
          if (Math.abs(n.z) > 0.85) n.vz *= -1;
          const tierY = (n.tier - 1) * 0.55;
          if (Math.abs(n.y - tierY) > 0.18) n.vy *= -1;
        }
      }

      // Precalculate projections & sort by depth (Painter's algorithm)
      const projected = nodes.map((n) => ({
        node: n,
        proj: project(n.x, n.y, n.z, scale),
      }));

      // Draw volumetric edges
      for (let i = 0; i < projected.length; i++) {
        for (let j = i + 1; j < projected.length; j++) {
          const a = projected[i];
          const b = projected[j];
          const dx = a.node.x - b.node.x;
          const dy = a.node.y - b.node.y;
          const dz = a.node.z - b.node.z;
          const dist3d = Math.hypot(dx, dy, dz);

          if (dist3d < LINK_DISTANCE) {
            const proximity = 1 - dist3d / LINK_DISTANCE;
            const avgDepth = (a.proj.depth + b.proj.depth) * 0.5;
            const depthFactor = Math.max(0.15, Math.min(1, 1 - avgDepth * 0.5));
            const isHubEdge = a.node.hub || b.node.hub;

            ctx.strokeStyle = isHubEdge ? colors.accent : colors.line;
            ctx.globalAlpha = isHubEdge ? proximity * 0.75 * depthFactor : proximity * 0.35 * depthFactor;
            ctx.lineWidth = isHubEdge ? 1.2 : 0.8;

            ctx.beginPath();
            ctx.moveTo(a.proj.px, a.proj.py);
            ctx.lineTo(b.proj.px, b.proj.py);
            ctx.stroke();
          }
        }
      }

      // Sort nodes back-to-front
      projected.sort((a, b) => b.proj.depth - a.proj.depth);

      // Draw 3D nodes
      for (const item of projected) {
        const { node, proj } = item;
        const depthAlpha = Math.max(0.2, Math.min(1, 1 - proj.depth * 0.45));
        const nodeSize = (node.hub ? 7 : 3.5) * proj.fov;

        ctx.fillStyle = node.hub ? colors.accent : colors.node;
        ctx.globalAlpha = depthAlpha * (node.hub ? 1 : 0.75);

        // Volumetric drafting square
        ctx.fillRect(proj.px - nodeSize / 2, proj.py - nodeSize / 2, nodeSize, nodeSize);

        if (node.hub) {
          ctx.strokeStyle = colors.accent;
          ctx.lineWidth = 1;
          ctx.globalAlpha = depthAlpha * 0.6;
          const boxSize = nodeSize * 2.2;
          ctx.strokeRect(proj.px - boxSize / 2, proj.py - boxSize / 2, boxSize, boxSize);

          // Subtle crosshair tick
          ctx.beginPath();
          ctx.moveTo(proj.px - boxSize, proj.py);
          ctx.lineTo(proj.px + boxSize, proj.py);
          ctx.moveTo(proj.px, proj.py - boxSize);
          ctx.lineTo(proj.px, proj.py + boxSize);
          ctx.globalAlpha = depthAlpha * 0.3;
          ctx.stroke();
        }
      }

      ctx.globalAlpha = 1;
    };

    let raf = 0;
    const loop = () => {
      draw();
      raf = requestAnimationFrame(loop);
    };

    resize();

    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    const mo = new MutationObserver(readColors);
    mo.observe(root, { attributes: true, attributeFilter: ['data-theme'] });
    const mqDark = window.matchMedia('(prefers-color-scheme: dark)');
    mqDark.addEventListener('change', readColors);

    if (reduce) {
      draw();
    } else {
      window.addEventListener('pointermove', onPointer);
      window.addEventListener('pointerleave', onPointerLeave);
      raf = requestAnimationFrame(loop);
    }

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      mo.disconnect();
      mqDark.removeEventListener('change', readColors);
      window.removeEventListener('pointermove', onPointer);
      window.removeEventListener('pointerleave', onPointerLeave);
    };
  }, []);

  return <canvas ref={canvasRef} className={className} aria-hidden="true" />;
}
