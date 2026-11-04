/* =========================================================
   Google Analytics 4 + pixel Meta
   Chargé sur toutes les pages. Relaie les événements de script.js
   (voir track()) vers gtag() et fbq() :
     lead           → GA4 « lead »,           Meta « Lead »
     checkout_start → GA4 « checkout_start »,  Meta « InitiateCheckout »
     purchase       → envoyé par merci.html (retour de Stripe)
   « page_view » n'est pas relayé : GA4 le compte déjà.

   Identifiants vides = rien n'est chargé ni envoyé.

   Performance : gtag() et fbq() existent tout de suite et mettent les
   événements en file ; les bibliothèques (~300 Ko) ne sont téléchargées
   qu'au chargement de la page (load) ou au premier geste s'il vient
   avant. Ne pas attendre plus : un délai de quelques secondes fait
   perdre la moitié des visites venues des pubs.
   Avec data-now sur la balise script (merci.html) : tout de suite.
   window.__flush(ms) : promesse à attendre avant de quitter la page
   (redirection vers Stripe), le temps que la file parte.
   ========================================================= */
(() => {
  'use strict';

  const GA_MEASUREMENT_ID = ''; // 'G-XXXXXXXXXX' (GA4 → Admin → Flux de données)
  const META_PIXEL_ID = '';     // pixel du portefeuille Meta relié au compte pub
  const META_EVENTS = { lead: 'Lead', checkout_start: 'InitiateCheckout' };

  /* ── Files d'attente, disponibles immédiatement (même désactivées) ── */
  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function () { dataLayer.push(arguments); };
  if (!window.fbq) {
    const n = window.fbq = function () {
      n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
    };
    if (!window._fbq) window._fbq = n;
    n.push = n; n.loaded = true; n.version = '2.0'; n.queue = [];
  }

  const libs = [];
  if (GA_MEASUREMENT_ID) {
    gtag('js', new Date());
    gtag('config', GA_MEASUREMENT_ID);
    libs.push('https://www.googletagmanager.com/gtag/js?id=' + GA_MEASUREMENT_ID);
  }
  if (META_PIXEL_ID) {
    fbq('init', META_PIXEL_ID);
    fbq('track', 'PageView');
    libs.push('https://connect.facebook.net/en_US/fbevents.js');
  }

  addEventListener('track', e => {
    const d = e.detail || {};
    if (!d.event) return;
    if (GA_MEASUREMENT_ID && d.event !== 'page_view') gtag('event', d.event, d);
    const name = META_EVENTS[d.event];
    if (META_PIXEL_ID && name) fbq('track', name, d.value ? { value: d.value, currency: d.currency || 'EUR' } : {});
  });

  /* ── Chargement différé des bibliothèques ──────────────── */
  const addScript = src => new Promise(res => {
    const s = document.createElement('script');
    s.async = true; s.src = src; s.onload = s.onerror = res;
    document.head.appendChild(s);
  });
  let loading = null;
  const load = () => loading || (loading = Promise.all(libs.map(addScript)));

  if (libs.length) {
    const me = document.currentScript;
    if (me && me.hasAttribute('data-now')) {
      load();
    } else {
      const opts = { once: true, passive: true, capture: true };
      ['pointerdown', 'keydown', 'touchstart'].forEach(t => addEventListener(t, load, opts));
      addEventListener('scroll', load, { once: true, passive: true });
      document.readyState === 'complete' ? load() : addEventListener('load', load, { once: true });
    }
  }

  window.__flush = (max = 1200) => libs.length ? Promise.race([
    load().then(() => new Promise(r => setTimeout(r, 300))),
    new Promise(r => setTimeout(r, max))
  ]) : Promise.resolve();
})();
