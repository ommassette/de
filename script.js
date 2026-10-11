/* ══════════════════════════════════════════════════════════════════════
   ZUR GOLDENEN LINDE — script.js
   ══════════════════════════════════════════════════════════════════════ */

/* ══════════════════════════════════════════════════════════════════════
   1. I18N
   ══════════════════════════════════════════════════════════════════════ */
const I18N = {
  de: {
    'brand.name'   : 'Zur Goldenen Linde',
    'nav.home'     : 'Startseite',
    'nav.about'    : 'Über uns',
    'nav.menu'     : 'Speisekarte',
    'nav.book'     : 'Tisch reservieren',
    'nav.contact'  : 'Kontakt',
    'hero.1.a'     : 'Pure', 'hero.1.b': 'Eleganz',
    'hero.2.a'     : 'Pure', 'hero.2.b': 'Handwerk',
    'hero.3.a'     : 'Pure', 'hero.3.b': 'Genuss',
    'hero.tagline' : 'Handwerk, Herz und Herkunft — seit 1897.',
    'hero.cta'     : 'Jetzt reservieren',
    'intro.heading': 'Deutsche Küche, mit Herz und Handwerk zubereitet.',
    'intro.btn'    : 'Zur Speisekarte',
    'story.heading': 'Ein Gasthaus mit Geschichte und mit Zukunft.',
    'story.text'   : 'Seit 1897 kochen wir mit Zutaten aus der Region, nach Rezepten, die von Generation zu Generation weitergegeben wurden. Ehrlich, saisonal und mit der Ruhe, die gutes Essen verdient.',
    'story.q1'     : 'Woher kommen unsere Zutaten?',
    'story.a1'     : 'Wir beziehen Fleisch, Gemüse und Kräuter von Höfen und Märkten im Umkreis von 80 Kilometern. Was nicht aus der Region kommt, wird klar gekennzeichnet.',
    'story.q2'     : 'Kann man bei uns feiern?',
    'story.a2'     : 'Ja. Unser Nebenraum fasst bis zu 40 Gäste für Geburtstage, Firmenfeiern und Familienessen. Sprich uns einfach an.',
    'story.q3'     : 'Gibt es vegetarische Gerichte?',
    'story.a3'     : 'Selbstverständlich. Ein Drittel unserer Karte ist vegetarisch, viele Gerichte lassen sich auf Wunsch vegan zubereiten.',
    'story.q4'     : 'Wie reserviere ich einen Tisch?',
    'story.a4'     : 'Am einfachsten online über unsere Reservierungsseite oder telefonisch während der Öffnungszeiten unter 030 123 456 78.',
    'tst.1.quote'  : 'Man schmeckt, dass hier noch gekocht und nicht nur zubereitet wird. Der Sauerbraten ist der beste, den ich in Berlin gegessen habe.',
    'tst.1.author' : 'Anna Weber',
    'tst.1.role'   : 'Stammgast seit 2008',
    'tst.2.quote'  : 'Ein Gasthaus, das seine Wurzeln kennt und trotzdem nie altmodisch wirkt. Die Saisonkarte ist jedes Mal eine Überraschung.',
    'tst.2.author' : 'Thomas Krüger',
    'tst.2.role'   : 'Food-Journalist, Berlin',
    'tst.3.quote'  : 'Wir haben den Nebenraum für eine Familienfeier gebucht. Der Service war aufmerksam, ohne aufdringlich zu sein, und das Essen hat alle begeistert.',
    'tst.3.author' : 'Lena Hoffmann',
    'tst.3.role'   : 'Geburtstagsfeier, 40 Gäste',
    'tst.4.quote'  : 'Von der Reservierung bis zum Dessert hat einfach alles gestimmt. Unser Team fragt schon nach dem nächsten Termin.',
    'tst.4.author' : 'Markus Schmidt',
    'tst.4.role'   : 'Betriebsfeier, 30 Gäste',
    'cat.1.title'  : 'Vorspeisen',
    'cat.1.text'   : 'Kleine Gerichte, die den Abend einleiten.',
    'cat.2.title'  : 'Hauptgerichte',
    'cat.2.text'   : 'Klassiker aus Fleisch, Fisch und Gemüse.',
    'cat.3.title'  : 'Desserts',
    'cat.3.text'   : 'Süßes aus der eigenen Backstube.',
    'cat.4.title'  : 'Getränke',
    'cat.4.text'   : 'Bier, Wein und Brunnen aus der Region.',
    'cta.title'    : 'Ein Tisch bei uns ist schnell reserviert.',
    'cta.text'     : 'Ob für zwei, für vier oder für eine ganze Feier. Wir halten Ihnen den Platz frei und kümmern uns um den Rest.',
    'cta.btn'      : 'Tisch reservieren',
    'ft.addr.label'    : 'Anschrift',
    'ft.addr.street'   : 'Lindenstraße 42',
    'ft.addr.city'     : '10179 Berlin',
    'ft.addr.country'  : 'Deutschland',
    'ft.pay.label'     : 'Zahlungsarten',
    'ft.para'          : 'Ein Gasthaus im Herzen Berlins. Seit 1897 kochen wir mit Zutaten aus der Region und mit der Ruhe, die gutes Essen verdient.',
    'ft.contact.label' : 'Kontakt',
    'ft.contact.hours' : 'Di bis So, 17:00 bis 23:00',
    'ft.contact.map'   : 'Auf der Karte ansehen',
    'ft.rights'        : 'Alle Rechte vorbehalten.',
    'a11y.open'    : 'Menü öffnen',
    'a11y.close'   : 'Menü schließen',
    'ph.text'      : 'Diese Seite entsteht im nächsten Schritt.',
    'about.hero.title'  : 'Unsere Geschichte',
    'about.std.heading' : 'Unsere Standards',
    'about.std.text'    : 'Gutes Essen beginnt lange vor dem Teller. Wir arbeiten mit Betrieben, die wir persönlich kennen, kochen saisonal und nehmen uns Zeit für die Dinge, die man nicht abkürzen kann.',
    'about.std.b1'      : 'Frische Zutaten',
    'about.std.b2'      : 'Handwerkliche Zubereitung',
    'about.std.b3'      : 'Regionale Herkunft',
    'about.std.b4'      : 'Persönlicher Service',
  },
  en: {
    'brand.name'   : 'Zur Goldenen Linde',
    'nav.home'     : 'Home',
    'nav.about'    : 'About',
    'nav.menu'     : 'Menu',
    'nav.book'     : 'Book a Table',
    'nav.contact'  : 'Contact',
    'hero.1.a'     : 'Pure', 'hero.1.b': 'Elegance',
    'hero.2.a'     : 'Pure', 'hero.2.b': 'Craft',
    'hero.3.a'     : 'Pure', 'hero.3.b': 'Indulgence',
    'hero.tagline' : 'Craft, heart and heritage — since 1897.',
    'hero.cta'     : 'Book Now',
    'intro.heading': 'German cuisine, prepared with heart and craft.',
    'intro.btn'    : 'View the Menu',
    'story.heading': 'An inn with a past and a future.',
    'story.text'   : 'Since 1897 we have cooked with ingredients from the region, following recipes passed down from generation to generation. Honest, seasonal, and with the patience good food deserves.',
    'story.q1'     : 'Where do our ingredients come from?',
    'story.a1'     : 'We source meat, vegetables and herbs from farms and markets within 80 kilometres. Anything that does not come from the region is clearly marked.',
    'story.q2'     : 'Can we host celebrations?',
    'story.a2'     : 'Yes. Our side room seats up to 40 guests for birthdays, company dinners and family gatherings. Just get in touch.',
    'story.q3'     : 'Are there vegetarian dishes?',
    'story.a3'     : 'Of course. A third of our menu is vegetarian, and many dishes can be prepared vegan on request.',
    'story.q4'     : 'How do I book a table?',
    'story.a4'     : 'Easiest online through our reservation page or by phone during opening hours on 030 123 456 78.',
    'tst.1.quote'  : 'You can taste that they still cook here rather than just assemble. The Sauerbraten is the best I have had in Berlin.',
    'tst.1.author' : 'Anna Weber',
    'tst.1.role'   : 'Regular guest since 2008',
    'tst.2.quote'  : 'An inn that knows its roots and never feels old-fashioned. The seasonal menu surprises me every single visit.',
    'tst.2.author' : 'Thomas Krüger',
    'tst.2.role'   : 'Food journalist, Berlin',
    'tst.3.quote'  : 'We booked the side room for a family celebration. The service was attentive without being intrusive, and the food delighted everyone.',
    'tst.3.author' : 'Lena Hoffmann',
    'tst.3.role'   : 'Birthday celebration, 40 guests',
    'tst.4.quote'  : 'From the reservation to the dessert, everything simply worked. Our team is already asking about the next date.',
    'tst.4.author' : 'Markus Schmidt',
    'tst.4.role'   : 'Company dinner, 30 guests',
    'cat.1.title'  : 'Starters',
    'cat.1.text'   : 'Small plates to open the evening.',
    'cat.2.title'  : 'Main Courses',
    'cat.2.text'   : 'Classics of meat, fish and vegetables.',
    'cat.3.title'  : 'Desserts',
    'cat.3.text'   : 'Sweets from our own bakery.',
    'cat.4.title'  : 'Drinks',
    'cat.4.text'   : 'Beer, wine and spring water from the region.',
    'cta.title'    : 'A table with us is reserved in moments.',
    'cta.text'     : 'Whether for two, for four or for a whole celebration. We will hold your table and take care of the rest.',
    'cta.btn'      : 'Book a Table',
    'ft.addr.label'    : 'Address',
    'ft.addr.street'   : 'Lindenstraße 42',
    'ft.addr.city'     : '10179 Berlin',
    'ft.addr.country'  : 'Germany',
    'ft.pay.label'     : 'Payment Methods',
    'ft.para'          : 'An inn in the heart of Berlin. Since 1897 we have cooked with regional ingredients and with the patience good food deserves.',
    'ft.contact.label' : 'Contact',
    'ft.contact.hours' : 'Tue to Sun, 5pm to 11pm',
    'ft.contact.map'   : 'View on map',
    'ft.rights'        : 'All rights reserved.',
    'a11y.open'    : 'Open menu',
    'a11y.close'   : 'Close menu',
    'ph.text'      : 'This page is built in the next step.',
    'about.hero.title'  : 'Our Story',
    'about.std.heading' : 'Our Standards',
    'about.std.text'    : 'Good food begins long before the plate. We work with producers we know personally, cook seasonally and take the time for things that cannot be rushed.',
    'about.std.b1'      : 'Fresh Ingredients',
    'about.std.b2'      : 'Craft Preparation',
    'about.std.b3'      : 'Regional Origin',
    'about.std.b4'      : 'Personal Service',
  }
};

let LANG = localStorage.getItem('zgl-lang') || 'de';

function applyLang(l){
  LANG = I18N[l] ? l : 'de';
  document.documentElement.lang = LANG;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    const val = I18N[LANG][key];
    if (val !== undefined) el.textContent = val;
  });

  document.querySelectorAll('.lang__btn').forEach(b => {
    b.classList.toggle('is-active', b.dataset.lang === LANG);
  });

  const burger = document.getElementById('burger');
  burger.setAttribute('aria-label',
    burger.classList.contains('is-open') ? I18N[LANG]['a11y.close'] : I18N[LANG]['a11y.open']);

  localStorage.setItem('zgl-lang', LANG);
}

document.querySelectorAll('.lang__btn').forEach(btn => {
  btn.addEventListener('click', () => applyLang(btn.dataset.lang));
});


/* ══════════════════════════════════════════════════════════════════════
   2. NAV OVERLAY
   ══════════════════════════════════════════════════════════════════════ */
const burger  = document.getElementById('burger');
const overlay = document.getElementById('navOverlay');

function openNav(){
  overlay.classList.add('is-open');
  overlay.setAttribute('aria-hidden', 'false');
  burger.classList.add('is-open');
  burger.setAttribute('aria-expanded', 'true');
  burger.setAttribute('aria-label', I18N[LANG]['a11y.close']);
  document.body.classList.add('nav-open');
  document.body.style.overflow = 'hidden';
  stopCarousel();
}

function closeNav(){
  if (!overlay.classList.contains('is-open')) return;
  overlay.classList.remove('is-open');
  overlay.setAttribute('aria-hidden', 'true');
  burger.classList.remove('is-open');
  burger.setAttribute('aria-expanded', 'false');
  burger.setAttribute('aria-label', I18N[LANG]['a11y.open']);
  document.body.classList.remove('nav-open');
  document.body.style.overflow = '';
  startCarousel();
}

burger.addEventListener('click', () => {
  overlay.classList.contains('is-open') ? closeNav() : openNav();
});

document.addEventListener('keydown', e => { if (e.key === 'Escape') closeNav(); });

document.querySelectorAll('.nav-link').forEach(a => {
  a.addEventListener('click', closeNav);
});


/* ══════════════════════════════════════════════════════════════════════
   3. HASH ROUTER
   ══════════════════════════════════════════════════════════════════════ */
const ROUTES = ['home', 'about', 'menu', 'book', 'contact'];

function route(){
  const raw  = location.hash.replace(/^#\/?/, '') || 'home';
  const page = ROUTES.includes(raw) ? raw : 'home';

  document.querySelectorAll('[data-page]').forEach(sec => {
    sec.hidden = sec.dataset.page !== page;
  });

  document.body.classList.toggle('on-home', page === 'home');

  closeNav();
  window.scrollTo({ top: 0, behavior: 'instant' in window ? 'instant' : 'auto' });
}

window.addEventListener('hashchange', route);


/* ══════════════════════════════════════════════════════════════════════
   4. VANISHING HERO CAROUSEL
   ══════════════════════════════════════════════════════════════════════ */
const heroSlides = Array.from(document.querySelectorAll('.hero__slide'));
const HERO_DELAY = 2000;
let   heroIndex  = 0;
let   heroTimer  = null;

function heroGoTo(n){
  if (n === heroIndex) return;

  const cur  = heroSlides[heroIndex];
  const next = heroSlides[n];

  cur.classList.remove('is-active');
  cur.classList.add('is-leaving');
  setTimeout(() => cur.classList.remove('is-leaving'), 560);

  next.classList.add('is-active');
  heroIndex = n;
}

function startCarousel(){
  stopCarousel();
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  heroTimer = setInterval(() => heroGoTo((heroIndex + 1) % heroSlides.length), HERO_DELAY);
}

function stopCarousel(){
  if (heroTimer) { clearInterval(heroTimer); heroTimer = null; }
}

const heroEl = document.querySelector('.hero');
heroEl.addEventListener('mouseenter', stopCarousel);
heroEl.addEventListener('mouseleave', startCarousel);


/* ══════════════════════════════════════════════════════════════════════
   5. STORY ACCORDION  —  one open at a time, smooth open & close
   ══════════════════════════════════════════════════════════════════════ */
document.querySelectorAll('[data-accordion]').forEach(list => {
  const items = list.querySelectorAll('.story__item');

  items.forEach(item => {
    const trigger = item.querySelector('.story__trigger');

    trigger.addEventListener('click', () => {
      const isOpen = item.classList.contains('is-open');

      items.forEach(other => {
        other.classList.remove('is-open');
        other.querySelector('.story__trigger').setAttribute('aria-expanded', 'false');
      });

      if (!isOpen) {
        item.classList.add('is-open');
        trigger.setAttribute('aria-expanded', 'true');
      }
    });
  });
});


/* ══════════════════════════════════════════════════════════════════════
   6. TESTIMONIALS CAROUSEL  —  slide transition, autoplay, swipe
   ══════════════════════════════════════════════════════════════════════ */
document.querySelectorAll('[data-carousel]').forEach(carousel => {
  const track  = carousel.querySelector('.tst__track');
  const tstSlides = carousel.querySelectorAll('.tst__slide');
  const dots   = carousel.querySelectorAll('.tst__dots button');
  const prev   = carousel.querySelector('.tst__arrow--prev');
  const next   = carousel.querySelector('.tst__arrow--next');
  const DELAY  = 5500;
  let tIndex = 0;
  let tTimer = null;

  function goTo(n){
    tIndex = (n + tstSlides.length) % tstSlides.length;
    track.style.transform = `translateX(-${tIndex * 100}%)`;
    tstSlides.forEach((s, i) => s.classList.toggle('is-active', i === tIndex));
    dots.forEach((d, i) => d.classList.toggle('is-active', i === tIndex));
  }

  function nextSlide(){ goTo(tIndex + 1); }
  function prevSlide(){ goTo(tIndex - 1); }

  function start(){
    stop();
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    tTimer = setInterval(nextSlide, DELAY);
  }
  function stop(){ if (tTimer) { clearInterval(tTimer); tTimer = null; } }

  if (next) next.addEventListener('click', () => { nextSlide(); start(); });
  if (prev) prev.addEventListener('click', () => { prevSlide(); start(); });
  dots.forEach(d => d.addEventListener('click', () => { goTo(+d.dataset.goto); start(); }));

  carousel.addEventListener('mouseenter', stop);
  carousel.addEventListener('mouseleave', start);

  let startX = 0, dragging = false;
  carousel.addEventListener('touchstart', e => {
    startX = e.touches[0].clientX; dragging = true; stop();
  }, { passive: true });
  carousel.addEventListener('touchend', e => {
    if (!dragging) return;
    dragging = false;
    const dx = e.changedTouches[0].clientX - startX;
    if (Math.abs(dx) > 50) dx < 0 ? nextSlide() : prevSlide();
    start();
  });

  goTo(0);
  start();
});
/* ══════════════════════════════════════════════════════════════════════
   9. STANDARDS BARS  —  animate width when scrolled into view
   ══════════════════════════════════════════════════════════════════════ */
document.querySelectorAll('[data-bars]').forEach(group => {
  const fills = group.querySelectorAll('.std__fill');

  const io = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;

      fills.forEach((f, i) => {
        setTimeout(() => {
          f.style.width = f.dataset.value + '%';
        }, i * 160);
      });

      io.unobserve(entry.target);
    });
  }, { threshold: 0.35 });

  io.observe(group);
});
/* ══════════════════════════════════════════════════════════════════════
   10. MENU CARDS  —  page-based carousel per section
   ══════════════════════════════════════════════════════════════════════ */
document.querySelectorAll('[data-menu]').forEach(section => {
  const card    = section.querySelector('.mn__card');
  const track   = section.querySelector('.mn__track');
  const pages   = Array.from(section.querySelectorAll('.mn__page'));
  const prev    = section.querySelector('.mn__arrow--prev');
  const next    = section.querySelector('.mn__arrow--next');
  const dotsWrap = section.querySelector('.mn__dots');

  // single-page cards: no controls needed
  if (pages.length <= 1) {
    card.classList.add('is-single');
    return;
  }

  let idx = 0;

  // build dots
  pages.forEach((_, i) => {
    const b = document.createElement('button');
    b.type = 'button';
    b.setAttribute('aria-label', String(i + 1));
    if (i === 0) b.classList.add('is-active');
    b.addEventListener('click', () => goTo(i));
    dotsWrap.appendChild(b);
  });

  const dots = dotsWrap.querySelectorAll('button');

  function goTo(n){
    idx = Math.max(0, Math.min(n, pages.length - 1));
    track.style.transform = `translateX(-${idx * 100}%)`;
    dots.forEach((d, i) => d.classList.toggle('is-active', i === idx));
    prev.disabled = idx === 0;
    next.disabled = idx === pages.length - 1;
  }

  prev.addEventListener('click', () => goTo(idx - 1));
  next.addEventListener('click', () => goTo(idx + 1));

  goTo(0);
});
/* ══════════════════════════════════════════════════════════════════════
   7. FOOTER YEAR
   ══════════════════════════════════════════════════════════════════════ */
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();


/* ══════════════════════════════════════════════════════════════════════
   8. BOOT
   ══════════════════════════════════════════════════════════════════════ */
applyLang(LANG);
route();
startCarousel();