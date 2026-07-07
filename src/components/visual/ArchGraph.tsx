import { useEffect, useRef } from 'react';

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  hub: boolean;
}

/**
 * Ambient architecture-graph: drifting nodes connected by proximity edges,
 * a few emphasized "hubs" in the accent. On-subject for a system-architecture
 * and neural-network practice. Reads theme colors live; static under
 * prefers-reduced-motion.
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
    let nodes: Node[] = [];

    const buildNodes = () => {
      const density = Math.round((w * h) / 22000);
      const count = Math.max(14, Math.min(42, density));
      nodes = Array.from({ length: count }, (_, i) => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.16,
        vy: (Math.random() - 0.5) * 0.16,
        hub: i % 7 === 0,
      }));
    };

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      w = rect.width;
      h = rect.height;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.max(1, Math.floor(w * dpr));
      canvas.height = Math.max(1, Math.floor(h * dpr));
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      buildNodes();
    };

    // Pointer parallax (skipped when reduced motion).
    const pointer = { x: 0, y: 0 };
    const target = { x: 0, y: 0 };
    const onPointer = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      target.x = ((e.clientX - rect.left) / rect.width - 0.5) * 18;
      target.y = ((e.clientY - rect.top) / rect.height - 0.5) * 18;
    };

    const LINK = 128;
    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      pointer.x += (target.x - pointer.x) * 0.05;
      pointer.y += (target.y - pointer.y) * 0.05;

      for (const n of nodes) {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0 || n.x > w) n.vx *= -1;
        if (n.y < 0 || n.y > h) n.vy *= -1;
      }

      // Edges
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i];
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.hypot(dx, dy);
          if (dist < LINK) {
            const alpha = (1 - dist / LINK) * 0.55;
            const linked = a.hub || b.hub;
            ctx.strokeStyle = linked ? colors.accent : colors.line;
            ctx.globalAlpha = linked ? alpha * 0.8 : alpha;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.x + pointer.x, a.y + pointer.y);
            ctx.lineTo(b.x + pointer.x, b.y + pointer.y);
            ctx.stroke();
          }
        }
      }

      // Nodes (small squares — drafting motif)
      ctx.globalAlpha = 1;
      for (const n of nodes) {
        const s = n.hub ? 5 : 2.5;
        ctx.fillStyle = n.hub ? colors.accent : colors.node;
        ctx.globalAlpha = n.hub ? 1 : 0.6;
        ctx.fillRect(n.x + pointer.x - s / 2, n.y + pointer.y - s / 2, s, s);
        if (n.hub) {
          ctx.globalAlpha = 0.5;
          ctx.strokeStyle = colors.accent;
          ctx.lineWidth = 1;
          ctx.strokeRect(n.x + pointer.x - 6, n.y + pointer.y - 6, 12, 12);
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
      raf = requestAnimationFrame(loop);
    }

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      mo.disconnect();
      mqDark.removeEventListener('change', readColors);
      window.removeEventListener('pointermove', onPointer);
    };
  }, []);

  return <canvas ref={canvasRef} className={className} aria-hidden="true" />;
}
