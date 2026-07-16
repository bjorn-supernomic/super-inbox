// glimm sweep bridge — bundled locally by bun into glimm-sweep.js.
// Mounts a GlimmProvider in its own React root and exposes the app seam:
// window.__glimmSweep(onMidpoint) — the dc app calls it on decision → next
// case, and the view swaps when the band covers the screen.
import React from 'react';
import { createRoot } from 'react-dom/client';
import { GlimmProvider, useGlimm } from 'glimm/react';

function Bridge() {
  const { sweep } = useGlimm();
  React.useEffect(() => {
    window.__glimmSweep = (onMidpoint) => sweep(() => { if (onMidpoint) onMidpoint(); });
    return () => { delete window.__glimmSweep; };
  }, [sweep]);
  return null;
}

const mount = document.createElement('div');
mount.id = 'glimm-root';
document.body.appendChild(mount);
createRoot(mount).render(
  React.createElement(
    GlimmProvider,
    // ember: the warm palette closest to the DS signal orange; front-loaded
    // easing so the sweep reads as punctuation, not a loading state.
    { palette: 'ember', sweepMs: 800, outroMs: 450, easing: 'easeOutQuart', brightness: 0.95 },
    React.createElement(Bridge),
  ),
);
