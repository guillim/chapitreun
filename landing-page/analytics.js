/* =========================================================
   Chapitre un — Google Analytics 4 + Pixel Meta
   Chargé sur toutes les pages du site. Relaie les événements déjà
   mesurés par script.js (voir track() dans script.js) vers gtag(),
   sauf « page_view » qui est déjà compté automatiquement par GA4,
   et vers le pixel Meta sous leurs noms standard (Lead,
   InitiateCheckout). L'achat (Purchase) est envoyé par merci.html.

   Performance : gtag() et fbq() existent tout de suite et mettent
   les événements en file d'attente ; les deux bibliothèques
   (~300 Ko de JS) ne sont téléchargées qu'à la première interaction
   (toucher, défilement, clic, clavier) ou 8 s après le chargement,
   pour ne pas ralentir l'affichage. Conséquence assumée : un visiteur
   qui repart en moins de 8 s sans rien toucher n'est pas compté.
   Sur merci.html (data-now sur la balise script), tout de suite.
   window.__cuFlush(ms) : promesse résolue quand les bibliothèques
   ont eu le temps d'envoyer la file, à attendre avant de quitter
   la page (redirection vers Stripe).
   ========================================================= */
(() => {
  'use strict';

  const GA_MEASUREMENT_ID = 'G-ZWDVH9Q1F3';
  const META_PIXEL_ID = '1461301452516353'; // jeu de données « data de chapitreun », portefeuille Chapitre Un
  const META_EVENTS = { waitlist_signup: 'Lead', preorder_start: 'InitiateCheckout' };

  /* ── Files d'attente, disponibles immédiatement ────────── */
  window.dataLayer = window.dataLayer || [];
  window.gtag = function () { dataLayer.push(arguments); };
  gtag('js', new Date());
  gtag('config', GA_MEASUREMENT_ID);

  /* file d'attente officielle du pixel Meta (sans le chargement du script) */
  if (!window.fbq) {
    const n = window.fbq = function () {
      n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
    };
    if (!window._fbq) window._fbq = n;
    n.push = n; n.loaded = true; n.version = '2.0'; n.queue = [];
  }
  fbq('init', META_PIXEL_ID);
  fbq('track', 'PageView');

  addEventListener('track', e => {
    const d = e.detail || {};
    if (!d.event) return;
    if (d.event !== 'page_view') gtag('event', d.event, d); // page_view déjà mesuré par GA4
    const name = META_EVENTS[d.event];
    if (name) fbq('track', name, { value: 49, currency: 'EUR' });
  });

  /* ── Chargement différé des deux bibliothèques ─────────── */
  const addScript = src => new Promise(res => {
    const s = document.createElement('script');
    s.async = true; s.src = src; s.onload = s.onerror = res;
    document.head.appendChild(s);
  });
  let loading = null;
  const load = () => loading || (loading = Promise.all([
    addScript('https://www.googletagmanager.com/gtag/js?id=' + GA_MEASUREMENT_ID),
    addScript('https://connect.facebook.net/en_US/fbevents.js')
  ]));

  const me = document.currentScript;
  if (me && me.hasAttribute('data-now')) {
    load();
  } else {
    const opts = { once: true, passive: true, capture: true };
    ['pointerdown', 'keydown', 'touchstart'].forEach(t => addEventListener(t, load, opts));
    addEventListener('scroll', load, { once: true, passive: true }); // la page seule, pas les carrousels
    const later = () => setTimeout(load, 8000);
    document.readyState === 'complete' ? later() : addEventListener('load', later, { once: true });
  }

  window.__cuFlush = (max = 1200) => Promise.race([
    load().then(() => new Promise(r => setTimeout(r, 300))),
    new Promise(r => setTimeout(r, max))
  ]);
})();
