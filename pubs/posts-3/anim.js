// Animation des reels, pilotée image par image par render.cjs : window.seek(t)
// place chaque élément à l'instant t (secondes). Éléments : [data-t0] (début),
// [data-dur] (durée d'entrée, 0,5 s par défaut), [data-t1] (début de la
// sortie, pour une ligne remplacée par la suivante), [data-anim] = up | right
// | fade ; [data-zoom] = durée du zoom lent de la photo (1 → 1,07).
(() => {
  const ease = x => 1 - Math.pow(1 - x, 3);
  const items = [...document.querySelectorAll('[data-t0]')];
  const zoom = document.querySelector('[data-zoom]');
  window.seek = t => {
    if (zoom) {
      const d = +zoom.dataset.zoom || 7;
      zoom.style.transform = `scale(${(1 + 0.07 * Math.min(1, t / d)).toFixed(4)})`;
    }
    for (const el of items) {
      const t0 = +el.dataset.t0, dur = +el.dataset.dur || 0.5;
      let p = ease(Math.max(0, Math.min(1, (t - t0) / dur)));
      if (el.dataset.t1 !== undefined) {
        const t1 = +el.dataset.t1, out = 0.35;
        p *= 1 - ease(Math.max(0, Math.min(1, (t - t1) / out)));
      }
      el.style.opacity = p.toFixed(3);
      const kind = el.dataset.anim || 'up';
      if (kind === 'up') el.style.transform = `translateY(${((1 - p) * 28).toFixed(2)}px)`;
      else if (kind === 'right') el.style.transform = `translateX(${((1 - p) * 260).toFixed(2)}px) rotate(${(4 + (1 - p) * 8).toFixed(2)}deg)`;
      else el.style.transform = 'none';
    }
  };
  window.seek(0);
})();
