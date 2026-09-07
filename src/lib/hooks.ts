import { useEffect, useState, useCallback } from 'react';

type Theme = 'light' | 'dark';

function systemTheme(): Theme {
  if (typeof window === 'undefined') return 'dark';
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function currentTheme(): Theme {
  const attr = document.documentElement.getAttribute('data-theme');
  if (attr === 'light' || attr === 'dark') return attr;
  return systemTheme();
}

/**
 * Theme hook for backwards compatibility
 */
export function useTheme() {
  const [theme, setThemeState] = useState<Theme>(() =>
    typeof document === 'undefined' ? 'dark' : currentTheme(),
  );

  useEffect(() => {
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    const onChange = () => {
      if (!document.documentElement.getAttribute('data-theme')) {
        setThemeState(systemTheme());
      }
    };
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  const setTheme = (next: Theme) => {
    document.documentElement.setAttribute('data-theme', next);
    if (next === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    try {
      localStorage.setItem('theme', next);
    } catch {
      /* ignore */
    }
    setThemeState(next);
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const toggle = () => setTheme(theme === 'dark' ? 'light' : 'dark');

  return { theme, toggle };
}

/**
 * Tracks which section is currently in view for nav rails
 */
export function useActiveSection(ids: string[]) {
  const [active, setActive] = useState(ids[0] ?? '');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: [0, 0.25, 0.5, 1] },
    );

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [ids]);

  return active;
}

/**
 * Tracks window scroll progress (0 - 100%)
 */
export function useScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const current = (window.scrollY / totalHeight) * 100;
        setProgress(Math.min(100, Math.max(0, current)));
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return progress;
}

/**
 * Tracks active section and page indicator based on scroll position
 */
export function useActiveSectionTracker(
  sections: { id: string; num: string }[],
  offset: number = 200
) {
  const [active, setActive] = useState<{ id: string; num: string }>(
    sections[0] || { id: 'top', num: '01' }
  );

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + offset;
      let current = sections[0] || { id: 'top', num: '01' };

      for (const sec of sections) {
        const el = document.getElementById(sec.id);
        if (el && el.offsetTop <= scrollPos) {
          current = sec;
        }
      }

      setActive((prev) => (prev.id !== current.id ? current : prev));
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections, offset]);

  return active;
}

/**
 * Clipboard copy hook with animated success feedback
 */
export function useClipboardCopy(resetDelay: number = 2200) {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const copy = useCallback(
    async (text: string, key: string = text) => {
      try {
        if (navigator.clipboard) {
          await navigator.clipboard.writeText(text);
          setCopiedKey(key);
          setTimeout(() => {
            setCopiedKey((curr) => (curr === key ? null : curr));
          }, resetDelay);
          return true;
        }
      } catch (err) {
        console.error('Failed to copy to clipboard', err);
      }
      return false;
    },
    [resetDelay]
  );

  return { copiedKey, copy };
}

/**
 * Smoothly scrolls to target section taking fixed 80px header into account
 */
export function scrollToSection(
  e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement> | null,
  id: string
) {
  if (e) e.preventDefault();
  const el = document.getElementById(id);
  if (el) {
    const yOffset = -85;
    const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: 'smooth' });
    if (typeof history !== 'undefined' && history.pushState) {
      history.pushState(null, '', );
    }
  }
}
