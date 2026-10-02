/* =========================================================
   Chapitre un — Google Analytics 4 + Pixel Meta
   Chargé sur toutes les pages du site. Relaie les événements déjà
   mesurés par script.js (voir track() dans script.js) vers gtag(),
   sauf « page_view » qui est déjà compté automatiquement par GA4,
   et vers le pixel Meta sous leurs noms standard (Lead,
   InitiateCheckout). L'achat (Purchase) est envoyé par merci.html.
   ========================================================= */
(() => {
  'use strict';

  const GA_MEASUREMENT_ID = 'G-ZWDVH9Q1F3';

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

(() => {
  'use strict';

  const META_PIXEL_ID = '1107649151757818';
  const META_EVENTS = { waitlist_signup: 'Lead', preorder_start: 'InitiateCheckout' };

  window.fbq = window.fbq || (() => {}); // no-op tant que l'identifiant n'est pas renseigné
  if (!META_PIXEL_ID) return;

  /* code officiel Meta, réindenté */
  !function(f,b,e,v,n,t,s){if(f.fbq&&f.fbq.callMethod)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;
  n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;
  s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script',
  'https://connect.facebook.net/en_US/fbevents.js');

  fbq('init', META_PIXEL_ID);
  fbq('track', 'PageView');

  addEventListener('track', e => {
    const name = META_EVENTS[(e.detail || {}).event];
    if (name) fbq('track', name, { value: 49, currency: 'EUR' });
  });
})();
