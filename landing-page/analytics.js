/* =========================================================
   Chapitre un — Google Analytics 4
   Un seul identifiant à renseigner ci-dessous, chargé sur les
   quatre pages du site. Relaie aussi les événements déjà mesurés
   par script.js (voir track() dans script.js) vers gtag(), sauf
   « page_view » qui est déjà compté automatiquement par GA4.
   ========================================================= */
(() => {
  'use strict';

  const GA_MEASUREMENT_ID = 'G-XXXXXXXXXX'; // à remplacer par l'identifiant réel

  window.gtag = () => {}; // no-op tant que l'identifiant n'est pas renseigné
  if (GA_MEASUREMENT_ID === 'G-XXXXXXXXXX') return;

  window.dataLayer = window.dataLayer || [];
  function gtag() { dataLayer.push(arguments); }
  window.gtag = gtag;

  gtag('js', new Date());
  gtag('config', GA_MEASUREMENT_ID);

  const s = document.createElement('script');
  s.async = true;
  s.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA_MEASUREMENT_ID;
  document.head.appendChild(s);

  addEventListener('track', e => {
    const d = e.detail || {};
    if (!d.event || d.event === 'page_view') return; // déjà mesuré par GA4
    gtag('event', d.event, d);
  });
})();
