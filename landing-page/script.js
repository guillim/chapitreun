/* =========================================================
   Landing page — comportement
   Aucune dépendance. Sans JS, la page reste lisible.
   Événements : track() les pousse dans dataLayer et les diffuse
   (événement « track »), analytics.js les relaie vers GA4 et Meta.
   ========================================================= */
(() => {
  'use strict';

  /* ── À remplir ─────────────────────────────────────────── */
  const CONFIG = {
    ENDPOINT: '',            // Formspree : 'https://formspree.io/f/xxxxxxx' (vide = démonstration, rien n'est envoyé)
    STRIPE_CHECKOUT_URL: '', // Stripe Payment Link : 'https://buy.stripe.com/…' (vide = pas de bouton paiement)
    PRICE: 0,                // montant en euros, envoyé avec checkout_start (et dans merci.html pour purchase)
    HEADLINE_B: ''           // test A/B du titre : HTML du titre B (vide = pas de test)
  };

  window.__ready = true;          // vu par le filet de sécurité du <head>

  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const $  = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
  const params = new URLSearchParams(location.search);
  const state = { variant: 'a' };

  const track = (event, props = {}) => {
    const payload = { event, variant: state.variant, ...props };
    (window.dataLayer = window.dataLayer || []).push(payload);
    dispatchEvent(new CustomEvent('track', { detail: payload }));
    if (params.has('debug')) console.log('[track]', payload);
  };

  /* ── Test A/B du titre (?t=a ou ?t=b pour forcer) ──────── */
  if (CONFIG.HEADLINE_B) {
    const KEY = 'ab_variant';
    let v = params.get('t');
    if (v !== 'a' && v !== 'b') {
      try { v = localStorage.getItem(KEY); } catch (_) { v = null; }
      if (v !== 'a' && v !== 'b') v = Math.random() < 0.5 ? 'a' : 'b';
    }
    try { localStorage.setItem(KEY, v); } catch (_) {}
    state.variant = v;
    if (v === 'b') { const h = $('[data-headline]'); if (h) h.innerHTML = CONFIG.HEADLINE_B; }
  }

  track('page_view', {
    source: params.get('utm_source') || document.referrer || 'direct',
    campaign: params.get('utm_campaign') || null
  });

  /* ── Apparitions au défilement ─────────────────────────── */
  const reveals = $$('[data-reveal]');
  if ('IntersectionObserver' in window && !reduce) {
    const io = new IntersectionObserver((entries, obs) => {
      entries.forEach(e => {
        if (!e.isIntersecting) return;
        e.target.classList.add('is-in');
        obs.unobserve(e.target);
      });
    }, { rootMargin: '0px 0px -10% 0px', threshold: 0.1 });
    reveals.forEach(el => io.observe(el));
    // observateur inerte (robot, navigateur intégré) -> on montre tout
    setTimeout(() => {
      if (!$('[data-reveal].is-in')) { io.disconnect(); reveals.forEach(el => el.classList.add('is-in')); }
    }, 2500);
  } else {
    reveals.forEach(el => el.classList.add('is-in'));
  }

  /* ── Sections vues ─────────────────────────────────────── */
  if ('IntersectionObserver' in window) {
    const seen = new Set();
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        const id = e.target.id;
        if (!e.isIntersecting || !id || seen.has(id)) return;
        seen.add(id);
        track('section_view', { section: id });
      });
    }, { threshold: 0.4 });
    $$('section[id]').forEach(s => io.observe(s));
  }

  /* ── Nav ───────────────────────────────────────────────── */
  const nav = $('.nav');
  if (nav) addEventListener('scroll', () => nav.classList.toggle('is-stuck', scrollY > 24), { passive: true });

  /* ── Réservation : clics vers l'agenda (attribut data-book) ── */
  $$('[data-book]').forEach(el =>
    el.addEventListener('click', () => track('booking_click', { id: el.dataset.book })));

  /* ── Barre collante : visible après l'accueil, cachée sur la réservation ── */
  (function sticky() {
    const bar = $('[data-sticky]'), hero = $('.hero'), book = $('#reserver');
    if (!bar || !hero || !book || !('IntersectionObserver' in window)) return;
    let heroOut = false, bookIn = false;
    const sync = () => bar.classList.toggle('is-on', heroOut && !bookIn);
    new IntersectionObserver(e => { heroOut = !e[0].isIntersecting; sync(); }, { threshold: 0.05 }).observe(hero);
    new IntersectionObserver(e => { bookIn = e[0].isIntersecting; sync(); }, { threshold: 0.1 }).observe(book);
  })();

  /* ── Clics suivis (attribut data-track) ────────────────── */
  $$('[data-track]').forEach(el =>
    el.addEventListener('click', () => track('cta_click', { id: el.dataset.track })));

  /* ── Formulaire : Formspree, puis Stripe si demandé ────── */
  (function form() {
    const form = $('#form');
    if (!form) return;
    const email = $('#email'), message = $('#message'), consent = $('#consent');
    const done = $('[data-done]'), doneMsg = $('[data-done-msg]');
    const payBtn = $('[data-intent="checkout"]', form);
    if (payBtn && CONFIG.STRIPE_CHECKOUT_URL) payBtn.hidden = false;

    const setErr = (n, on) => { const el = $(`[data-err="${n}"]`); if (el) el.classList.toggle('is-on', on); };
    const validate = () => {
      const badEmail = !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email.value.trim());
      const badConsent = !consent.checked;
      setErr('email', badEmail); email.classList.toggle('is-invalid', badEmail);
      setErr('consent', badConsent);
      (badEmail ? email : badConsent ? consent : null)?.focus();
      return !(badEmail || badConsent);
    };
    [email, consent].forEach(el => el.addEventListener('input', () => {
      el.classList.remove('is-invalid'); setErr(el.id, false);
    }));

    const finish = () => {
      doneMsg.innerHTML = `Nous vous répondons à <strong></strong> très vite.`;
      doneMsg.querySelector('strong').textContent = email.value.trim();
      if (!CONFIG.ENDPOINT) {
        const n = document.createElement('p');
        n.className = 'note';
        n.textContent = 'Démonstration : aucune donnée envoyée (CONFIG.ENDPOINT vide).';
        doneMsg.after(n);
      }
      form.hidden = true;
      done.hidden = false;
      done.scrollIntoView({ block: 'center', behavior: reduce ? 'auto' : 'smooth' });
    };

    // un seul envoi à la fois : un double clic pendant l'attente avant Stripe
    // compterait plusieurs checkout_start ; libéré au retour arrière depuis Stripe
    let busy = false;
    addEventListener('pageshow', () => { busy = false; });

    form.addEventListener('submit', async e => {
      e.preventDefault();
      const intent = (e.submitter && e.submitter.dataset.intent) || 'lead';
      if (busy) return;
      if (!validate()) { track('form_error', { intent }); return; }
      busy = true;
      const checkout = intent === 'checkout' && CONFIG.STRIPE_CHECKOUT_URL;
      const data = {
        email: email.value.trim(),
        message: message ? message.value.trim() : '',
        intent,
        variant: state.variant,
        source: params.get('utm_source') || document.referrer || 'direct'
      };
      track(checkout ? 'checkout_start' : 'lead',
            checkout && CONFIG.PRICE ? { value: CONFIG.PRICE, currency: 'EUR' } : {});

      const sent = CONFIG.ENDPOINT
        ? fetch(CONFIG.ENDPOINT, { method: 'POST',
            headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
            body: JSON.stringify(data) }).catch(() => track('form_network_error', { intent }))
        : null;
      // GA4 et Meta sont chargés en différé : leur laisser le temps d'envoyer
      // l'événement avant de quitter la page pour Stripe
      const flushed = checkout && window.__flush ? window.__flush() : null;
      await Promise.all([sent, flushed]);
      if (checkout) {
        const u = new URL(CONFIG.STRIPE_CHECKOUT_URL);
        u.searchParams.set('prefilled_email', data.email);
        location.assign(u.toString());
        return;
      }
      busy = false;
      finish();
    });
  })();

})();
