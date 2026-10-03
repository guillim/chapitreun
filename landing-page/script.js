/* =========================================================
   Chapitre un — landing page test
   Aucune dépendance. Sans JS, la page reste lisible et le
   formulaire utilisable.
   ========================================================= */
(() => {
  'use strict';

  /* ── À brancher avant la mise en ligne ─────────────────── */
  const CONFIG = {
    ENDPOINT: 'https://formspree.io/f/xaenawvb', // POST JSON de l'inscription
    STRIPE_CHECKOUT_URL: 'https://buy.stripe.com/eVqfZi5So9Nx8yrd3F77O03', // lien Stripe Checkout des 49 € (live, branché le 2 octobre 2026)
    HEADLINE_B: 'Le livre de sa première année<br><em>en 5 minutes.</em>',
    FOUNDER_START_DATE:  '2026-09-28', // jour de référence du compteur fondateur
    FOUNDER_START_COUNT: 121,          // nombre affiché ce jour-là, +1 par jour ensuite
    APP_READY: '2027-05'               // premier mois où un livre peut être prêt (app « printemps 2027 »)
  };

  window.__cuReady = true;        // vu par le filet de sécurité du <head>

  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const $  = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
  const sleep = ms => new Promise(r => setTimeout(r, ms));
  const params = new URLSearchParams(location.search);
  const state = { variant: 'a' };

  const track = (event, props = {}) => {
    const payload = { event, variant: state.variant, ...props };
    (window.dataLayer = window.dataLayer || []).push(payload);
    dispatchEvent(new CustomEvent('track', { detail: payload }));
    if (params.has('debug')) console.log('[track]', payload);
  };

  /* ── Test A/B du titre ─────────────────────────────────── */
  (function headlineTest() {
    const KEY = 'cu_variant';
    let v = params.get('t');
    if (v !== 'a' && v !== 'b') {
      try { v = localStorage.getItem(KEY); } catch (_) { v = null; }
      if (v !== 'a' && v !== 'b') v = Math.random() < 0.5 ? 'a' : 'b';
    }
    try { localStorage.setItem(KEY, v); } catch (_) {}
    state.variant = v;
    if (v === 'b') { const h = $('[data-headline]'); if (h) h.innerHTML = CONFIG.HEADLINE_B; }
  })();

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
    // veille : observateur inerte (navigateur intégré, robot) -> on montre tout
    setTimeout(() => {
      if (!document.querySelector('[data-reveal].is-in')) {
        io.disconnect();
        reveals.forEach(el => el.classList.add('is-in'));
      }
    }, 2500);
  } else {
    reveals.forEach(el => el.classList.add('is-in'));
  }

  /* ── Suivi du défilement par section ───────────────────── */
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

  /* ── Compteur « 4 000 photos » ─────────────────────────── */
  $$('[data-count]').forEach(el => {
    const target = parseInt(el.dataset.count, 10);
    const render = n => { el.textContent = n.toLocaleString('fr-FR'); };
    // le chiffre final est déjà dans le HTML : si rien ne se déclenche, on lit « 4 000 »
    if (reduce || !('IntersectionObserver' in window)) { render(target); return; }
    new IntersectionObserver((entries, obs) => {
      if (!entries[0].isIntersecting) return;
      obs.disconnect();
      render(0);
      const t0 = performance.now(), dur = 1500;
      const tick = now => {
        const p = Math.min(1, (now - t0) / dur);
        render(Math.round(target * (1 - Math.pow(1 - p, 3))));
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    }, { threshold: 0.6 }).observe(el);
  });

  /* ── Démonstration iPhone ──────────────────────────────────
     Grand écran : le téléphone est collé, l'écran suit l'étape
     qu'on est en train de lire. Petit écran : boucle minutée.  */
  (function phoneDemo() {
    const phone = $('#demo');
    if (!phone) return;

    const screens = $$('[data-scr]', phone);
    const dots    = $$('.phone__dots i', phone);
    const typed   = $('[data-typed]', phone);
    const pick    = $('[data-pick]', phone);
    const steps   = $$('.step');
    const NAME    = 'Léa';
    let current   = -1;

    const show = i => {
      if (i === current) return;
      current = i;
      screens.forEach((s, k) => s.classList.toggle('is-on', k === i));
      dots.forEach((d, k) => d.classList.toggle('is-on', k === i));
      steps.forEach((s, k) => s.classList.toggle('is-live', k === i));
      if (i === 0) { typed.textContent = ''; typeName(); }
      if (i === 1) { pick.classList.remove('is-picked');
                     setTimeout(() => { if (current === 1) pick.classList.add('is-picked'); }, 900); }
    };

    let typeToken = 0;
    async function typeName() {
      const mine = ++typeToken;
      if (reduce) { typed.textContent = NAME; return; }
      await sleep(500);
      for (const ch of NAME) {
        if (mine !== typeToken) return;
        typed.textContent += ch;
        await sleep(190);
      }
    }

    if (reduce) {                       // pas d'animation : on montre la récompense
      typed.textContent = NAME;
      pick.classList.add('is-picked');
      show(2);
      return;
    }

    /* — mode minuté (petit écran) — */
    let run = 0;
    const alive = t => t === run;
    async function loop(token) {
      while (alive(token)) {
        show(0); await sleep(2600); if (!alive(token)) return;
        show(1); await sleep(3000); if (!alive(token)) return;
        show(2); await sleep(4200); if (!alive(token)) return;
        current = -1;                   // force le rejeu de l'étape 1
      }
    }

    /* — mode lié au défilement (grand écran) — */
    let stepIO = null;
    const startScroll = () => {
      run++;                            // coupe la boucle minutée
      stepIO = new IntersectionObserver(entries => {
        entries.forEach(e => {
          if (e.isIntersecting) show(steps.indexOf(e.target));
        });
      }, { rootMargin: '-45% 0px -45% 0px' });
      steps.forEach(s => stepIO.observe(s));
      show(0);
    };
    const stopScroll = () => { if (stepIO) { stepIO.disconnect(); stepIO = null; } };

    const mq = matchMedia('(min-width: 900px)');
    let visible = false;

    const apply = () => {
      if (mq.matches) { stopScroll(); startScroll(); }
      else { stopScroll(); run++; if (visible) loop(run); }
    };

    show(0);                            // état par défaut : jamais d'écran vide
    if ('IntersectionObserver' in window) {
      new IntersectionObserver(entries => {
        visible = entries[0].isIntersecting;
        if (visible) apply(); else { run++; }
      }, { threshold: 0.2 }).observe(phone);
    }

    mq.addEventListener ? mq.addEventListener('change', apply) : mq.addListener(apply);
  })();

  /* ── Galerie de doubles pages ──────────────────────────── */
  (function gallery() {
    const gal = $('[data-gal]');
    if (!gal) return;
    const track_ = $('[data-gal-track]', gal);
    const cards  = $$('.spread', track_);
    const dotBox = $('[data-gal-dots]', gal);
    const prev   = $('[data-gal-prev]', gal);
    const next   = $('[data-gal-next]', gal);
    if (!cards.length) return;

    cards.forEach((_, i) => {
      const b = document.createElement('button');
      b.type = 'button';
      b.setAttribute('aria-label', `Aller à la double page ${i + 1}`);
      b.addEventListener('click', () => go(i));
      dotBox.append(b);
    });
    const dots = $$('button', dotBox);

    // les cartes s'aimantent par leur centre (scroll-snap-align:center) :
    // viser le bord gauche donnerait une position non aimantée, que le
    // navigateur corrige aussitôt — on vise donc le centre.
    const go = i => {
      const c = cards[Math.max(0, Math.min(cards.length - 1, i))];
      const cr = c.getBoundingClientRect(), tr = track_.getBoundingClientRect();
      const delta = (cr.left + cr.width / 2) - (tr.left + tr.width / 2);
      track_.scrollTo({ left: track_.scrollLeft + delta, behavior: reduce ? 'auto' : 'smooth' });
    };
    const index = () => {
      const box = track_.getBoundingClientRect(), mid = box.left + box.width / 2;
      let best = 0, dist = Infinity;
      cards.forEach((c, i) => {
        const r = c.getBoundingClientRect();
        const d = Math.abs(r.left + r.width / 2 - mid);
        if (d < dist) { dist = d; best = i; }
      });
      return best;
    };
    const sync = () => {
      const i = index();
      dots.forEach((d, k) => d.classList.toggle('is-on', k === i));
      prev.disabled = i === 0;
      next.disabled = i === cards.length - 1;
    };

    prev.addEventListener('click', () => { go(index() - 1); track('gallery_nav', { dir: 'prev' }); });
    next.addEventListener('click', () => { go(index() + 1); track('gallery_nav', { dir: 'next' }); });

    let raf = null;
    track_.addEventListener('scroll', () => {
      if (raf) return;
      raf = requestAnimationFrame(() => { sync(); raf = null; });
    }, { passive: true });
    sync();
  })();

  /* ── Parallaxe douce du livre (souris seulement) ───────── */
  if (matchMedia('(pointer:fine)').matches && !reduce) {
    $$('[data-tilt]').forEach(host => {
      const book = $('.book', host);
      if (!book) return;
      let raf = null, tx = 0, ty = 0;
      host.addEventListener('pointermove', e => {
        const r = host.getBoundingClientRect();
        tx = ((e.clientX - r.left) / r.width - 0.5) * 7;
        ty = ((e.clientY - r.top) / r.height - 0.5) * -4;
        if (!raf) raf = requestAnimationFrame(() => {
          book.style.transform = `rotateX(${6 + ty}deg) rotateY(${tx}deg) rotateZ(-.6deg)`;
          raf = null;
        });
      });
      host.addEventListener('pointerleave', () => { book.style.removeProperty('transform'); });
    });
  }

  /* ── Halo chaud qui suit la souris sur le formulaire ───── */
  if (matchMedia('(pointer:fine)').matches && !reduce) {
    const sec = $('.sec--signup');
    if (sec) {
      let raf = null, x = 0, y = 0;
      sec.addEventListener('pointermove', e => {
        const r = sec.getBoundingClientRect();
        x = e.clientX - r.left; y = e.clientY - r.top;
        if (!raf) raf = requestAnimationFrame(() => {
          sec.style.setProperty('--mx', x + 'px');
          sec.style.setProperty('--my', y + 'px');
          raf = null;
        });
      });
    }
  }

  /* ── Nav et barre collante ─────────────────────────────── */
  (function chrome() {
    const nav    = $('.nav');
    const sticky = $('[data-sticky]');
    const hero   = $('.hero');
    const signup = $('#reserver');
    let heroOut = false, signupIn = false;

    const sync = () => {
      const on = heroOut && !signupIn;
      sticky.classList.toggle('is-on', on);
      sticky.setAttribute('aria-hidden', on ? 'false' : 'true');
    };

    addEventListener('scroll', () => {
      nav.classList.toggle('is-stuck', scrollY > 24);
    }, { passive: true });

    if ('IntersectionObserver' in window) {
      new IntersectionObserver(e => { heroOut  = !e[0].isIntersecting; sync(); },
        { threshold: 0.04 }).observe(hero);
      new IntersectionObserver(e => { signupIn =  e[0].isIntersecting; sync(); },
        { threshold: 0.12 }).observe(signup);
    }
  })();

  /* ── Clics suivis ──────────────────────────────────────── */
  $$('[data-track]').forEach(el => {
    el.addEventListener('click', () => track('cta_click', { id: el.dataset.track }));
  });

  /* ── Tarif fondateur ───────────────────────────────────── */
  (function founder() {
    const box = $('[data-founder]');
    if (!box) return;
    // Compteur simulé : +1 par jour depuis FOUNDER_START_DATE, à remplacer
    // par le vrai total (Stripe / base d'inscrits) dès qu'il existe.
    const total = parseInt(box.dataset.total, 10) || 500;
    const start = Date.UTC(...CONFIG.FOUNDER_START_DATE.split('-').map((n, i) => i === 1 ? n - 1 : +n));
    const days  = Math.floor((Date.now() - start) / 86400000);
    const claimed = Math.min(total, Math.max(0, CONFIG.FOUNDER_START_COUNT + days));
    $('[data-left]', box).textContent = Math.max(0, total - claimed).toLocaleString('fr-FR');
    const bar = $('.founder__bar i', box);
    const fill = () => { bar.style.width = claimed ? Math.max(2, (claimed / total) * 100) + '%' : '0'; };
    if ('IntersectionObserver' in window && !reduce) {
      new IntersectionObserver((e, o) => { if (e[0].isIntersecting) { fill(); o.disconnect(); } },
        { threshold: 0.5 }).observe(box);
    } else fill();
  })();

  /* ── Formulaire ────────────────────────────────────────── */
  (function form() {
    const form  = $('#form');
    if (!form) return;
    const email = $('#email'), month = $('#month'), consent = $('#consent');
    const done  = $('[data-done]'), doneMsg = $('[data-done-msg]');
    const wl    = $('[data-waitlist]');

    const now = new Date();
    for (let i = 0; i < 24; i++) {
      const d = new Date(now.getFullYear(), now.getMonth() - i, 1);
      const o = document.createElement('option');
      o.value = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}`;
      o.textContent = d.toLocaleDateString('fr-FR', { month: 'long', year: 'numeric' });
      month.append(o);
    }

    /* — la date qui compte : dès que le mois est choisi, on dit quand le
         livre sera prêt, ou franchement que ses 1 an arriveront avant l'app — */
    const when = $('[data-when]');
    const whenDefault = when ? when.textContent : '';
    const fmt = (y, m) => new Date(y, m, 1).toLocaleDateString('fr-FR', { month: 'long', year: 'numeric' });
    month.addEventListener('change', () => {
      if (!when) return;
      if (!month.value) { when.textContent = whenDefault; return; }
      const [y, m] = month.value.split('-').map(Number);          // mois de naissance
      const bday = { y: y + 1, m: m - 1 };                         // ses 1 an (mois 0-11)
      const ready = new Date(bday.y, bday.m - 1, 1);               // ~3 semaines avant : fin du mois précédent
      const [ay, am] = CONFIG.APP_READY.split('-').map(Number);
      const tooEarly = ready < new Date(ay, am - 1, 1);
      when.textContent = tooEarly
        ? `Ses 1 an : ${fmt(bday.y, bday.m)}, avant la sortie de l'app. Son livre se fera dès qu'elle est prête, avec les photos déjà prises.`
        : `Ses 1 an : ${fmt(bday.y, bday.m)}. Son livre sera prêt fin ${fmt(ready.getFullYear(), ready.getMonth())}.`;
    });

    const setErr = (n, on) => { const el = $(`[data-err="${n}"]`); if (el) el.classList.toggle('is-on', on); };
    const mark = (el, bad) => el.classList.toggle('is-invalid', bad);

    const validate = () => {
      const badEmail   = !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email.value.trim());
      const badMonth   = !month.value;
      const badConsent = !consent.checked;
      setErr('email', badEmail);   mark(email, badEmail);
      setErr('month', badMonth);   mark(month, badMonth);
      setErr('consent', badConsent);
      const first = badEmail ? email : badMonth ? month : badConsent ? consent : null;
      if (first) first.focus();
      return !(badEmail || badMonth || badConsent);
    };
    [email, month, consent].forEach(el =>
      el.addEventListener('input', () => { mark(el, false); setErr(el.id, false); }));

    const finish = intent => {
      doneMsg.innerHTML = intent === 'preorder'
        ? `Votre livre est réservé au tarif fondateur. Nous vous écrivons à
           <strong>${email.value.trim()}</strong> dès que l'app peut fabriquer
           le livre de votre bébé — et bien avant son anniversaire.`
        : `Nous vous écrivons à <strong>${email.value.trim()}</strong> dès que
           l'app est prête, sans rien vous faire payer aujourd'hui.`;
      if (!CONFIG.ENDPOINT) {
        const n = document.createElement('p');
        n.className = 'note';
        n.textContent = 'Démonstration : aucune donnée envoyée, aucun paiement encaissé.';
        doneMsg.after(n);
      }
      form.hidden = true;
      $('.founder').hidden = true;
      $('.trust').hidden = true;
      done.hidden = false;
      done.scrollIntoView({ block: 'center', behavior: reduce ? 'auto' : 'smooth' });
    };

    // un seul envoi à la fois : un double clic pendant l'attente avant Stripe
    // compterait plusieurs preorder_start ; libéré au retour arrière depuis Stripe
    let busy = false;
    addEventListener('pageshow', () => { busy = false; });

    const submit = async intent => {
      if (busy) return;
      if (!validate()) { track('form_error', { intent }); return; }
      busy = true;
      const data = {
        email: email.value.trim(),
        birth_month: month.value,
        intent,
        variant: state.variant,
        source: params.get('utm_source') || document.referrer || 'direct'
      };
      track(intent === 'preorder' ? 'preorder_start' : 'waitlist_signup',
            { birth_month: data.birth_month });

      const sent = CONFIG.ENDPOINT
        ? fetch(CONFIG.ENDPOINT, { method: 'POST',
            headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
            body: JSON.stringify(data) }).catch(() => track('form_network_error', { intent }))
        : null;
      // GA4 et Meta sont chargés en différé (analytics.js) : leur laisser le temps
      // d'envoyer l'événement avant de quitter la page pour Stripe
      const flushed = intent === 'preorder' && window.__cuFlush ? window.__cuFlush() : null;
      await Promise.all([sent, flushed]);
      if (intent === 'preorder' && CONFIG.STRIPE_CHECKOUT_URL) {
        const u = new URL(CONFIG.STRIPE_CHECKOUT_URL);
        u.searchParams.set('prefilled_email', data.email);
        location.assign(u.toString());
        return;
      }
      busy = false;
      finish(intent);
    };

    form.addEventListener('submit', e => { e.preventDefault(); submit('preorder'); });
    wl.addEventListener('click', () => submit('waitlist'));
  })();

})();
