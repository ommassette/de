/* ══════════════════════════════════════════════════════════════════════
   ZUR GOLDENEN LINDE — script.js
   ══════════════════════════════════════════════════════════════════════ */

/* ══════════════════════════════════════════════════════════════════════
   1. I18N
   ══════════════════════════════════════════════════════════════════════ */
const I18N = {
  de: {
    /* ── brand & nav ────────────────────────────────────────────────── */
    'brand.name'        : 'Zur Goldenen Linde',
    'nav.home'          : 'Startseite',
    'nav.about'         : 'Über uns',
    'nav.menu'          : 'Speisekarte',
    'nav.book'          : 'Tisch reservieren',
    'nav.contact'       : 'Kontakt',

    /* ── hero ───────────────────────────────────────────────────────── */
    'hero.1.a'          : 'Pure', 'hero.1.b': 'Eleganz',
    'hero.2.a'          : 'Pure', 'hero.2.b': 'Handwerk',
    'hero.3.a'          : 'Pure', 'hero.3.b': 'Genuss',
    'hero.tagline'      : 'Handwerk, Herz und Herkunft — seit 1897.',
    'hero.cta'          : 'Jetzt reservieren',

    /* ── intro ──────────────────────────────────────────────────────── */
    'intro.heading'     : 'Deutsche Küche, mit Herz und Handwerk zubereitet.',
    'intro.btn'         : 'Zur Speisekarte',

    /* ── story ──────────────────────────────────────────────────────── */
    'story.heading'     : 'Ein Gasthaus mit Geschichte und mit Zukunft.',
    'story.text'        : 'Seit 1897 kochen wir mit Zutaten aus der Region, nach Rezepten, die von Generation zu Generation weitergegeben wurden. Ehrlich, saisonal und mit der Ruhe, die gutes Essen verdient.',
    'story.q1'          : 'Woher kommen unsere Zutaten?',
    'story.a1'          : 'Wir beziehen Fleisch, Gemüse und Kräuter von Höfen und Märkten im Umkreis von 80 Kilometern. Was nicht aus der Region kommt, wird klar gekennzeichnet.',
    'story.q2'          : 'Kann man bei uns feiern?',
    'story.a2'          : 'Ja. Unser Nebenraum fasst bis zu 40 Gäste für Geburtstage, Firmenfeiern und Familienessen. Sprich uns einfach an.',
    'story.q3'          : 'Gibt es vegetarische Gerichte?',
    'story.a3'          : 'Selbstverständlich. Ein Drittel unserer Karte ist vegetarisch, viele Gerichte lassen sich auf Wunsch vegan zubereiten.',
    'story.q4'          : 'Wie reserviere ich einen Tisch?',
    'story.a4'          : 'Am einfachsten online über unsere Reservierungsseite oder telefonisch während der Öffnungszeiten unter 030 123 456 78.',

    /* ── testimonials ───────────────────────────────────────────────── */
    'tst.1.quote'       : 'Man schmeckt, dass hier noch gekocht und nicht nur zubereitet wird. Der Sauerbraten ist der beste, den ich in Berlin gegessen habe.',
    'tst.1.author'      : 'Anna Weber',
    'tst.1.role'        : 'Stammgast seit 2008',
    'tst.2.quote'       : 'Ein Gasthaus, das seine Wurzeln kennt und trotzdem nie altmodisch wirkt. Die Saisonkarte ist jedes Mal eine Überraschung.',
    'tst.2.author'      : 'Thomas Krüger',
    'tst.2.role'        : 'Food-Journalist, Berlin',
    'tst.3.quote'       : 'Wir haben den Nebenraum für eine Familienfeier gebucht. Der Service war aufmerksam, ohne aufdringlich zu sein, und das Essen hat alle begeistert.',
    'tst.3.author'      : 'Lena Hoffmann',
    'tst.3.role'        : 'Geburtstagsfeier, 40 Gäste',
    'tst.4.quote'       : 'Von der Reservierung bis zum Dessert hat einfach alles gestimmt. Unser Team fragt schon nach dem nächsten Termin.',
    'tst.4.author'      : 'Markus Schmidt',
    'tst.4.role'        : 'Betriebsfeier, 30 Gäste',

    /* ── categories ─────────────────────────────────────────────────── */
    'cat.1.title'       : 'Vorspeisen',
    'cat.1.text'        : 'Kleine Gerichte, die den Abend einleiten.',
    'cat.2.title'       : 'Hauptgerichte',
    'cat.2.text'        : 'Klassiker aus Fleisch, Fisch und Gemüse.',
    'cat.3.title'       : 'Desserts',
    'cat.3.text'        : 'Süßes aus der eigenen Backstube.',
    'cat.4.title'       : 'Getränke',
    'cat.4.text'        : 'Bier, Wein und Brunnen aus der Region.',

    /* ── CTA banner ─────────────────────────────────────────────────── */
    'cta.title'         : 'Ein Tisch bei uns ist schnell reserviert.',
    'cta.text'          : 'Ob für zwei, für vier oder für eine ganze Feier. Wir halten Ihnen den Platz frei und kümmern uns um den Rest.',
    'cta.btn'           : 'Tisch reservieren',

    /* ── footer ─────────────────────────────────────────────────────── */
    'ft.addr.label'     : 'Anschrift',
    'ft.addr.street'    : 'Lindenstraße 42',
    'ft.addr.city'      : '10179 Berlin',
    'ft.addr.country'   : 'Deutschland',
    'ft.pay.label'      : 'Zahlungsarten',
    'ft.para'           : 'Ein Gasthaus im Herzen Berlins. Seit 1897 kochen wir mit Zutaten aus der Region und mit der Ruhe, die gutes Essen verdient.',
    'ft.contact.label'  : 'Kontakt',
    'ft.contact.hours'  : 'Di bis So, 17:00 bis 23:00',
    'ft.contact.map'    : 'Auf der Karte ansehen',
    'ft.rights'         : 'Alle Rechte vorbehalten.',

    /* ── about ──────────────────────────────────────────────────────── */
    'about.hero.title'  : 'Unsere Geschichte',
    'about.std.heading' : 'Unsere Standards',
    'about.std.text'    : 'Gutes Essen beginnt lange vor dem Teller. Wir arbeiten mit Betrieben, die wir persönlich kennen, kochen saisonal und nehmen uns Zeit für die Dinge, die man nicht abkürzen kann.',
    'about.std.b1'      : 'Frische Zutaten',
    'about.std.b2'      : 'Handwerkliche Zubereitung',
    'about.std.b3'      : 'Regionale Herkunft',
    'about.std.b4'      : 'Persönlicher Service',
    'about.tri.1.text'  : 'Ein Abend bei uns ist mehr als ein Essen. Er ist Zeit für sich, für Freunde und für das, was auf den Tisch kommt.',
    'about.tri.1.btn'   : 'Tisch reservieren',
    'about.tri.2.text'  : 'Vom ersten Gruß an der Tür bis zum letzten Bissen am Teller.',
    'about.tri.3.text'  : 'Was uns seit über hundert Jahren trägt, ist die Nähe zu den Menschen und die Liebe zum Detail.',
    'about.tri.3.btn'   : 'Zur Speisekarte',
    'about.vals.1.title': 'Küche',
    'about.vals.1.text' : 'Saisonal, ehrlich und ohne Umwege. Wir kochen, was die Region hergibt, und lassen die Zutaten für sich sprechen.',
    'about.vals.2.title': 'Philosophie',
    'about.vals.2.text' : 'Gastfreundschaft heißt bei uns, dass niemand sich erklären muss. Man kommt an, setzt sich und ist willkommen.',
    'about.vals.3.title': 'Handwerk',
    'about.vals.3.text' : 'Vom Brotteig über die Soßen bis zum Dessert entsteht bei uns alles in der eigenen Küche. Ohne Abkürzungen.',

    /* ── menu · starters ────────────────────────────────────────────── */
    'menu.s1.title'     : 'Vorspeisen',
    'menu.s1.i1.name'   : 'Brezel mit Butter',         'menu.s1.i1.desc': 'Frisch gebacken, mit Süßrahmbutter.',
    'menu.s1.i2.name'   : 'Handkäs mit Musik',         'menu.s1.i2.desc': 'Mit Zwiebeln, Essig und Öl.',
    'menu.s1.i3.name'   : 'Kartoffelsuppe',            'menu.s1.i3.desc': 'Mit Majoran und geröstetem Brot.',
    'menu.s1.i4.name'   : 'Matjes mit Zwiebeln',       'menu.s1.i4.desc': 'Auf Schwarzbrot mit Apfel und Zwiebel.',
    'menu.s1.i5.name'   : 'Leberwurst-Terrine',        'menu.s1.i5.desc': 'Mit Bratkartoffelbrot und Gurke.',
    'menu.s1.i6.name'   : 'Geräucherter Lachs',        'menu.s1.i6.desc': 'Mit Meerrettich und Zitrone.',
    'menu.s1.i7.name'   : 'Obatzda mit Brezel',        'menu.s1.i7.desc': 'Mit Paprikapulver und Zwiebel.',
    'menu.s1.i8.name'   : 'Gurkensalat mit Dill',      'menu.s1.i8.desc': 'Mit Essig, Öl und frischem Dill.',

    /* ── menu · mains ───────────────────────────────────────────────── */
    'menu.s2.title'     : 'Hauptgerichte',
    'menu.s2.i1.name'   : 'Wiener Schnitzel',          'menu.s2.i1.desc': 'Vom Kalb, mit Zitrone und Kartoffelsalat.',
    'menu.s2.i2.name'   : 'Sauerbraten',               'menu.s2.i2.desc': 'Mit Rotkohl und Klößen.',
    'menu.s2.i3.name'   : 'Bratwurst mit Sauerkraut',  'menu.s2.i3.desc': 'Vom eigenen Metzger, mit Senf.',
    'menu.s2.i4.name'   : 'Rinderrouladen',            'menu.s2.i4.desc': 'Mit Speck, Gurke und Rotweinsoße.',
    'menu.s2.i5.name'   : 'Königsberger Klopse',       'menu.s2.i5.desc': 'Mit Kapernsoße und Salzkartoffeln.',
    'menu.s2.i6.name'   : 'Schweinshaxe',              'menu.s2.i6.desc': 'Mit Dunkelbiersoße und Krautsalat.',
    'menu.s2.i7.name'   : 'Maultaschen',               'menu.s2.i7.desc': 'In klarer Brühe mit Schnittlauch.',
    'menu.s2.i8.name'   : 'Zanderfilet',               'menu.s2.i8.desc': 'Mit Kräuterbutter und Gemüse der Saison.',

    /* ── menu · desserts ────────────────────────────────────────────── */
    'menu.s3.title'     : 'Desserts',
    'menu.s3.i1.name'   : 'Apfelstrudel',              'menu.s3.i1.desc': 'Mit Vanillesoße und Zimt.',
    'menu.s3.i2.name'   : 'Schwarzwälder Kirschtorte', 'menu.s3.i2.desc': 'Mit Sahne und Kirschwasser.',
    'menu.s3.i3.name'   : 'Kaiserschmarrn',            'menu.s3.i3.desc': 'Mit Rosinen und Apfelmus.',
    'menu.s3.i4.name'   : 'Rote Grütze',               'menu.s3.i4.desc': 'Mit Vanillesoße oder Sahne.',
    'menu.s3.i5.name'   : 'Bienenstich',               'menu.s3.i5.desc': 'Mit Mandeln und Vanillecreme.',
    'menu.s3.i6.name'   : 'Kirschmichel',              'menu.s3.i6.desc': 'Mit heißen Kirschen und Sahne.',
    'menu.s3.i7.name'   : 'Grießpudding',              'menu.s3.i7.desc': 'Mit Zimt und brauner Butter.',
    'menu.s3.i8.name'   : 'Quarkbällchen',             'menu.s3.i8.desc': 'Mit Puderzucker, frisch frittiert.',

    /* ── menu · drinks ──────────────────────────────────────────────── */
    'menu.s4.title'     : 'Getränke',
    'menu.s4.i1.name'   : 'Berliner Weiße',            'menu.s4.i1.desc': 'Mit Schuss, grün oder rot.',
    'menu.s4.i2.name'   : 'Riesling trocken',          'menu.s4.i2.desc': '0,2 l, von der Mosel.',
    'menu.s4.i3.name'   : 'Pils vom Fass',             'menu.s4.i3.desc': '0,3 l, aus der Region.',
    'menu.s4.i4.name'   : 'Apfelschorle',              'menu.s4.i4.desc': 'Aus eigenem Presssaft.',
    'menu.s4.i5.name'   : 'Weißbier vom Fass',         'menu.s4.i5.desc': '0,5 l, mit Hefeweizen-Note.',
    'menu.s4.i6.name'   : 'Spätburgunder',             'menu.s4.i6.desc': '0,2 l, trocken, aus Baden.',
    'menu.s4.i7.name'   : 'Spezi',                     'menu.s4.i7.desc': '0,5 l, Cola mit Orangenlimonade.',
    'menu.s4.i8.name'   : 'Kaffee mit Milch',          'menu.s4.i8.desc': 'Frisch gebrüht, mit heißer Milch.',

    /* ── book a table ───────────────────────────────────────────────── */
    'bk.name'           : 'Name',
    'bk.email'          : 'E-Mail',
    'bk.phone'          : 'Telefon',
    'bk.guests'         : 'Personen',
    'bk.date'           : 'Datum',
    'bk.time'           : 'Uhrzeit',
    'bk.note'           : 'Anmerkungen',
    'bk.submit'         : 'Anfrage senden',

    /* ── book · info cards ──────────────────────────────────────────── */
    'binfo.time.label'  : 'Tischdauer',
    'binfo.time.text'   : 'Wir halten Ihren Tisch für zwei Stunden frei. Länger auf Anfrage.',
    'binfo.group.label' : 'Gruppen',
    'binfo.group.text'  : 'Ab 9 Personen reservieren wir im Nebenraum. Bitte mindestens 48 Stunden vorher.',
    'binfo.cancel.label': 'Stornierung',
    'binfo.cancel.text' : 'Kostenfrei bis 24 Stunden vorher. Danach berechnen wir 10 Euro pro Person.',

    /* ── book · private events ──────────────────────────────────────── */
    'bpriv.heading'     : 'Feiern bei uns',
    'bpriv.text'        : 'Ob Geburtstag, Firmenfeier oder Familienessen. Unser Nebenraum fasst bis zu 40 Gäste und lässt sich nach Ihren Wünschen herrichten.',
    'bpriv.l1'          : 'Eigene Speisekarte nach Absprache',
    'bpriv.l2'          : 'Getränkeauswahl aus Keller und Fass',
    'bpriv.l3'          : 'Blumen, Tischdeko und Musik nach Wunsch',
    'bpriv.l4'          : 'Persönliche Ansprechpartnerin während des Abends',
    'bpriv.btn'         : 'Anfrage senden',

    /* ── contact ────────────────────────────────────────────────────── */
    'cf.name'           : 'Name',
    'cf.email'          : 'E-Mail',
    'cf.subject'        : 'Betreff',
    'cf.message'        : 'Nachricht',
    'cf.submit'         : 'Nachricht senden',

    /* ── contact · info cards ───────────────────────────────────────── */
    'cinfo.addr.label'  : 'Anschrift',
    'cinfo.reach.label' : 'Erreichbar',
    'cinfo.hours.label' : 'Öffnungszeiten',
    'cinfo.hours.text'  : 'Dienstag bis Sonntag · 17:00 bis 23:00 Uhr · Montag Ruhetag',

    /* ── contact · how to find us ───────────────────────────────────── */
    'cway.heading'      : 'So finden Sie uns',
    'cway.text'         : 'Mitten in Berlin Mitte, nur wenige Minuten von der U-Bahn und mit dem Auto gut erreichbar.',
    'cway.t1.title'     : 'Mit der Bahn',
    'cway.t1.text'      : 'U2 Heinrich-Heine-Straße, 4 Minuten zu Fuß.',
    'cway.t2.title'     : 'Mit dem Auto',
    'cway.t2.text'      : 'Parkhaus Linden-Center, 200 Meter entfernt.',
    'cway.t3.title'     : 'Mit dem Rad',
    'cway.t3.text'      : 'Überdachte Fahrradständer direkt vor dem Eingang.',

    /* ── accessibility & placeholders ───────────────────────────────── */
    'a11y.open'         : 'Menü öffnen',
    'a11y.close'        : 'Menü schließen',
    'ph.text'           : 'Diese Seite entsteht im nächsten Schritt.'
  },

  en: {
    /* ── brand & nav ────────────────────────────────────────────────── */
    'brand.name'        : 'Zur Goldenen Linde',
    'nav.home'          : 'Home',
    'nav.about'         : 'About',
    'nav.menu'          : 'Menu',
    'nav.book'          : 'Book a Table',
    'nav.contact'       : 'Contact',

    /* ── hero ───────────────────────────────────────────────────────── */
    'hero.1.a'          : 'Pure', 'hero.1.b': 'Elegance',
    'hero.2.a'          : 'Pure', 'hero.2.b': 'Craft',
    'hero.3.a'          : 'Pure', 'hero.3.b': 'Indulgence',
    'hero.tagline'      : 'Craft, heart and heritage — since 1897.',
    'hero.cta'          : 'Book Now',

    /* ── intro ──────────────────────────────────────────────────────── */
    'intro.heading'     : 'German cuisine, prepared with heart and craft.',
    'intro.btn'         : 'View the Menu',

    /* ── story ──────────────────────────────────────────────────────── */
    'story.heading'     : 'An inn with a past and a future.',
    'story.text'        : 'Since 1897 we have cooked with ingredients from the region, following recipes passed down from generation to generation. Honest, seasonal, and with the patience good food deserves.',
    'story.q1'          : 'Where do our ingredients come from?',
    'story.a1'          : 'We source meat, vegetables and herbs from farms and markets within 80 kilometres. Anything that does not come from the region is clearly marked.',
    'story.q2'          : 'Can we host celebrations?',
    'story.a2'          : 'Yes. Our side room seats up to 40 guests for birthdays, company dinners and family gatherings. Just get in touch.',
    'story.q3'          : 'Are there vegetarian dishes?',
    'story.a3'          : 'Of course. A third of our menu is vegetarian, and many dishes can be prepared vegan on request.',
    'story.q4'          : 'How do I book a table?',
    'story.a4'          : 'Easiest online through our reservation page or by phone during opening hours on 030 123 456 78.',

    /* ── testimonials ───────────────────────────────────────────────── */
    'tst.1.quote'       : 'You can taste that they still cook here rather than just assemble. The Sauerbraten is the best I have had in Berlin.',
    'tst.1.author'      : 'Anna Weber',
    'tst.1.role'        : 'Regular guest since 2008',
    'tst.2.quote'       : 'An inn that knows its roots and never feels old-fashioned. The seasonal menu surprises me every single visit.',
    'tst.2.author'      : 'Thomas Krüger',
    'tst.2.role'        : 'Food journalist, Berlin',
    'tst.3.quote'       : 'We booked the side room for a family celebration. The service was attentive without being intrusive, and the food delighted everyone.',
    'tst.3.author'      : 'Lena Hoffmann',
    'tst.3.role'        : 'Birthday celebration, 40 guests',
    'tst.4.quote'       : 'From the reservation to the dessert, everything simply worked. Our team is already asking about the next date.',
    'tst.4.author'      : 'Markus Schmidt',
    'tst.4.role'        : 'Company dinner, 30 guests',

    /* ── categories ─────────────────────────────────────────────────── */
    'cat.1.title'       : 'Starters',
    'cat.1.text'        : 'Small plates to open the evening.',
    'cat.2.title'       : 'Main Courses',
    'cat.2.text'        : 'Classics of meat, fish and vegetables.',
    'cat.3.title'       : 'Desserts',
    'cat.3.text'        : 'Sweets from our own bakery.',
    'cat.4.title'       : 'Drinks',
    'cat.4.text'        : 'Beer, wine and spring water from the region.',

    /* ── CTA banner ─────────────────────────────────────────────────── */
    'cta.title'         : 'A table with us is reserved in moments.',
    'cta.text'          : 'Whether for two, for four or for a whole celebration. We will hold your table and take care of the rest.',
    'cta.btn'           : 'Book a Table',

    /* ── footer ─────────────────────────────────────────────────────── */
    'ft.addr.label'     : 'Address',
    'ft.addr.street'    : 'Lindenstraße 42',
    'ft.addr.city'      : '10179 Berlin',
    'ft.addr.country'   : 'Germany',
    'ft.pay.label'      : 'Payment Methods',
    'ft.para'           : 'An inn in the heart of Berlin. Since 1897 we have cooked with regional ingredients and with the patience good food deserves.',
    'ft.contact.label'  : 'Contact',
    'ft.contact.hours'  : 'Tue to Sun, 5pm to 11pm',
    'ft.contact.map'    : 'View on map',
    'ft.rights'         : 'All rights reserved.',

    /* ── about ──────────────────────────────────────────────────────── */
    'about.hero.title'  : 'Our Story',
    'about.std.heading' : 'Our Standards',
    'about.std.text'    : 'Good food begins long before the plate. We work with producers we know personally, cook seasonally and take the time for things that cannot be rushed.',
    'about.std.b1'      : 'Fresh Ingredients',
    'about.std.b2'      : 'Craft Preparation',
    'about.std.b3'      : 'Regional Origin',
    'about.std.b4'      : 'Personal Service',
    'about.tri.1.text'  : 'An evening with us is more than a meal. It is time for yourself, for friends and for what arrives on the table.',
    'about.tri.1.btn'   : 'Book a Table',
    'about.tri.2.text'  : 'From the first welcome at the door to the last bite on the plate.',
    'about.tri.3.text'  : 'What has carried us for over a hundred years is closeness to people and love for detail.',
    'about.tri.3.btn'   : 'View the Menu',
    'about.vals.1.title': 'Kitchen',
    'about.vals.1.text' : 'Seasonal, honest and without detours. We cook what the region gives us and let the ingredients speak for themselves.',
    'about.vals.2.title': 'Philosophy',
    'about.vals.2.text' : 'Hospitality means that no one has to explain themselves. You arrive, you sit down, and you are welcome.',
    'about.vals.3.title': 'Craft',
    'about.vals.3.text' : 'From the bread dough to the sauces to the dessert, everything is made in our own kitchen. No shortcuts.',

    /* ── menu · starters ────────────────────────────────────────────── */
    'menu.s1.title'     : 'Starters',
    'menu.s1.i1.name'   : 'Pretzel with Butter',       'menu.s1.i1.desc': 'Freshly baked, with sweet cream butter.',
    'menu.s1.i2.name'   : 'Hand Cheese with Music',    'menu.s1.i2.desc': 'With onions, vinegar and oil.',
    'menu.s1.i3.name'   : 'Potato Soup',               'menu.s1.i3.desc': 'With marjoram and toasted bread.',
    'menu.s1.i4.name'   : 'Matjes with Onions',        'menu.s1.i4.desc': 'On rye bread with apple and onion.',
    'menu.s1.i5.name'   : 'Liver Sausage Terrine',     'menu.s1.i5.desc': 'With fried potato bread and pickle.',
    'menu.s1.i6.name'   : 'Smoked Salmon',             'menu.s1.i6.desc': 'With horseradish and lemon.',
    'menu.s1.i7.name'   : 'Obatzda with Pretzel',      'menu.s1.i7.desc': 'With paprika and onion.',
    'menu.s1.i8.name'   : 'Cucumber Salad with Dill',  'menu.s1.i8.desc': 'With vinegar, oil and fresh dill.',

    /* ── menu · mains ───────────────────────────────────────────────── */
    'menu.s2.title'     : 'Main Courses',
    'menu.s2.i1.name'   : 'Wiener Schnitzel',          'menu.s2.i1.desc': 'Veal, with lemon and potato salad.',
    'menu.s2.i2.name'   : 'Sauerbraten',               'menu.s2.i2.desc': 'With red cabbage and dumplings.',
    'menu.s2.i3.name'   : 'Bratwurst with Sauerkraut', 'menu.s2.i3.desc': 'From our own butcher, with mustard.',
    'menu.s2.i4.name'   : 'Beef Rouladen',             'menu.s2.i4.desc': 'With bacon, pickle and red wine sauce.',
    'menu.s2.i5.name'   : 'Königsberger Klopse',       'menu.s2.i5.desc': 'With caper sauce and boiled potatoes.',
    'menu.s2.i6.name'   : 'Pork Knuckle',              'menu.s2.i6.desc': 'With dark beer sauce and cabbage slaw.',
    'menu.s2.i7.name'   : 'Maultaschen',               'menu.s2.i7.desc': 'In clear broth with chives.',
    'menu.s2.i8.name'   : 'Zander Fillet',             'menu.s2.i8.desc': 'With herb butter and seasonal vegetables.',

    /* ── menu · desserts ────────────────────────────────────────────── */
    'menu.s3.title'     : 'Desserts',
    'menu.s3.i1.name'   : 'Apple Strudel',             'menu.s3.i1.desc': 'With vanilla sauce and cinnamon.',
    'menu.s3.i2.name'   : 'Black Forest Cake',         'menu.s3.i2.desc': 'With cream and kirsch.',
    'menu.s3.i3.name'   : 'Kaiserschmarrn',            'menu.s3.i3.desc': 'With raisins and apple compote.',
    'menu.s3.i4.name'   : 'Red Berry Compote',         'menu.s3.i4.desc': 'With vanilla sauce or cream.',
    'menu.s3.i5.name'   : 'Bee Sting Cake',            'menu.s3.i5.desc': 'With almonds and vanilla cream.',
    'menu.s3.i6.name'   : 'Cherry Michel',             'menu.s3.i6.desc': 'With hot cherries and cream.',
    'menu.s3.i7.name'   : 'Semolina Pudding',          'menu.s3.i7.desc': 'With cinnamon and brown butter.',
    'menu.s3.i8.name'   : 'Quark Doughnuts',           'menu.s3.i8.desc': 'With powdered sugar, freshly fried.',

    /* ── menu · drinks ──────────────────────────────────────────────── */
    'menu.s4.title'     : 'Drinks',
    'menu.s4.i1.name'   : 'Berliner Weiße',            'menu.s4.i1.desc': 'With syrup, green or red.',
    'menu.s4.i2.name'   : 'Dry Riesling',              'menu.s4.i2.desc': '0.2 l, from the Mosel.',
    'menu.s4.i3.name'   : 'Pils on Tap',               'menu.s4.i3.desc': '0.3 l, from the region.',
    'menu.s4.i4.name'   : 'Apple Spritzer',            'menu.s4.i4.desc': 'From our own pressed juice.',
    'menu.s4.i5.name'   : 'Wheat Beer on Tap',         'menu.s4.i5.desc': '0.5 l, with a hefeweizen note.',
    'menu.s4.i6.name'   : 'Spätburgunder',             'menu.s4.i6.desc': '0.2 l, dry, from Baden.',
    'menu.s4.i7.name'   : 'Spezi',                     'menu.s4.i7.desc': '0.5 l, cola with orange soda.',
    'menu.s4.i8.name'   : 'Coffee with Milk',          'menu.s4.i8.desc': 'Freshly brewed, with hot milk.',

    /* ── book a table ───────────────────────────────────────────────── */
    'bk.name'           : 'Name',
    'bk.email'          : 'Email',
    'bk.phone'          : 'Phone',
    'bk.guests'         : 'Guests',
    'bk.date'           : 'Date',
    'bk.time'           : 'Time',
    'bk.note'           : 'Notes',
    'bk.submit'         : 'Send Request',

    /* ── book · info cards ──────────────────────────────────────────── */
    'binfo.time.label'  : 'Table Duration',
    'binfo.time.text'   : 'We hold your table for two hours. Longer on request.',
    'binfo.group.label' : 'Groups',
    'binfo.group.text'  : 'For 9 guests or more we reserve the side room. Please book at least 48 hours ahead.',
    'binfo.cancel.label': 'Cancellation',
    'binfo.cancel.text' : 'Free of charge up to 24 hours before. After that we charge 10 euros per person.',

    /* ── book · private events ──────────────────────────────────────── */
    'bpriv.heading'     : 'Celebrate With Us',
    'bpriv.text'        : 'Whether a birthday, a company dinner or a family gathering. Our side room seats up to 40 guests and can be arranged to your wishes.',
    'bpriv.l1'          : 'A bespoke menu arranged with you',
    'bpriv.l2'          : 'Drinks from our cellar and on tap',
    'bpriv.l3'          : 'Flowers, table decor and music as you like',
    'bpriv.l4'          : 'A personal host throughout the evening',
    'bpriv.btn'         : 'Send a Request',

    /* ── contact ────────────────────────────────────────────────────── */
    'cf.name'           : 'Name',
    'cf.email'          : 'Email',
    'cf.subject'        : 'Subject',
    'cf.message'        : 'Message',
    'cf.submit'         : 'Send Message',

    /* ── contact · info cards ───────────────────────────────────────── */
    'cinfo.addr.label'  : 'Address',
    'cinfo.reach.label' : 'Get in Touch',
    'cinfo.hours.label' : 'Opening Hours',
    'cinfo.hours.text'  : 'Tuesday to Sunday · 5:00 pm to 11:00 pm · Closed on Mondays',

    /* ── contact · how to find us ───────────────────────────────────── */
    'cway.heading'      : 'How to Find Us',
    'cway.text'         : 'In the heart of Berlin Mitte, only minutes from the U-Bahn and easy to reach by car.',
    'cway.t1.title'     : 'By Train',
    'cway.t1.text'      : 'U2 Heinrich-Heine-Straße, 4 minutes on foot.',
    'cway.t2.title'     : 'By Car',
    'cway.t2.text'      : 'Linden-Center car park, 200 metres away.',
    'cway.t3.title'     : 'By Bike',
    'cway.t3.text'      : 'Covered bike racks right at the entrance.',

    /* ── accessibility & placeholders ───────────────────────────────── */
    'a11y.open'         : 'Open menu',
    'a11y.close'        : 'Close menu',
    'ph.text'           : 'This page is built in the next step.'
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
const heroSlides  = Array.from(document.querySelectorAll('.hero__slide'));
const HERO_DELAY  = 2000;
let   heroIndex   = 0;
let   heroTimer   = null;

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
  const track     = carousel.querySelector('.tst__track');
  const tstSlides = carousel.querySelectorAll('.tst__slide');
  const dots      = carousel.querySelectorAll('.tst__dots button');
  const prev      = carousel.querySelector('.tst__arrow--prev');
  const next      = carousel.querySelector('.tst__arrow--next');
  const DELAY     = 5500;
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
   7. STANDARDS BARS  —  animate width when scrolled into view
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
   8. MENU CARDS  —  page-based carousel per section
   ══════════════════════════════════════════════════════════════════════ */
document.querySelectorAll('[data-menu]').forEach(section => {
  const card     = section.querySelector('.mn__card');
  const track    = section.querySelector('.mn__track');
  const pages    = Array.from(section.querySelectorAll('.mn__page'));
  const prev     = section.querySelector('.mn__arrow--prev');
  const next     = section.querySelector('.mn__arrow--next');
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
   9. FOOTER YEAR
   ══════════════════════════════════════════════════════════════════════ */
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();


/* ══════════════════════════════════════════════════════════════════════
   10. BOOT
   ══════════════════════════════════════════════════════════════════════ */
applyLang(LANG);
route();
startCarousel();