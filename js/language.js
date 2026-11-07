/* ==========================================================
   X STORE — language system (English / العربية)
   Saves choice in localStorage, switches dir + lang automatically.
   Usage in HTML:  data-i18n="key"            -> replaces text
                   data-i18n-attr="aria-label:key;placeholder:key" -> attributes
   ========================================================== */
(function () {
  "use strict";
  var STORAGE_KEY = "xstore-lang";

  var DICT = {
    en: {
      "meta.home.title": "X STORE | Official Gaming Store by HORUSX ENTERTAINMENT",
      "meta.home.desc": "X STORE is the official gaming distribution platform operated by HORUSX ENTERTAINMENT. Escape: out of game, a horror game, is coming on 10 November 2026.",
      "meta.game.title": "Escape: out of game | X STORE",
      "meta.game.desc": "Escape: out of game. Horror, rated 12+. Coming soon on X STORE, releasing 10 November 2026.",
      "meta.404.title": "Page not found | X STORE",

      "skip": "Skip to main content",
      "nav.home": "Home",
      "nav.game": "Featured Game",
      "nav.upcoming": "Upcoming",
      "nav.about": "About",
      "nav.support": "Support",
      "nav.menu": "Open menu",
      "nav.search": "Search the store",
      "nav.lang.label": "Switch language to Arabic",
      "nav.lang.btn": "العربية",
      "brand.company": "HORUSX ENTERTAINMENT",

      "hero.eyebrow": "Official gaming platform",
      "hero.title1": "Enter the next",
      "hero.title2": "horror experience",
      "hero.lead": "X STORE is the official gaming distribution platform operated by HORUSX ENTERTAINMENT. Our first title is on its way.",
      "hero.cta1": "View the game",
      "hero.cta2": "See release countdown",
      "hero.badge": "Escape: out of game — coming 10 November 2026",

      "featured.eyebrow": "Featured game",
      "featured.title": "Now on X STORE",
      "featured.sub": "Our official title, launching soon.",
      "game.title": "Escape: out of game",
      "game.titleAr": "الهروب: من اللعبة",
      "game.age": "Age rating",
      "game.ageVal": "12+",
      "game.genre": "Genre",
      "game.genreVal": "Horror",
      "game.status": "Release status",
      "game.statusVal": "Coming Soon",
      "game.date": "Release date",
      "game.dateVal": "10 November 2026",
      "game.desc": "Description",
      "game.descVal": "Coming Soon",
      "game.details": "View details",
      "game.cover.alt": "Official cover of Escape: out of game, dripping dark red lettering inside a blood-red circle",

      "up.eyebrow": "Upcoming release",
      "up.title": "Release countdown",
      "up.sub": "Escape: out of game arrives on 10 November 2026.",
      "cd.days": "Days",
      "cd.hours": "Hours",
      "cd.minutes": "Minutes",
      "cd.seconds": "Seconds",
      "cd.label": "Time remaining until release",
      "cd.released.title": "The release date has arrived",
      "cd.released.text": "Escape: out of game has reached its official release date. Contact support for the latest information from HORUSX ENTERTAINMENT.",

      "about.eyebrow": "About",
      "about.title": "About X STORE",
      "about.p1": "X STORE is the official gaming distribution platform operated by HORUSX ENTERTAINMENT.",
      "about.p2": "It is the home of the studio's titles, built to give players one clear and trusted place to find official game information, release dates and support.",
      "about.logo.alt": "HORUSX logo with the Eye of Horus and a glowing golden X",

      "support.eyebrow": "Customer support",
      "support.title": "Support Center",
      "support.sub": "Questions about X STORE or our game? Our team is happy to help.",
      "support.card.title": "Contact us",
      "support.card.text": "Write to the official HORUSX ENTERTAINMENT support team by email and we will get back to you.",
      "support.email.label": "Official support email",
      "support.btn": "Contact Support",
      "support.mail.subject": "X STORE Support Request",
      "faq.title": "Frequently asked questions",
      "faq.q1": "What is X STORE?",
      "faq.a1": "X STORE is the official gaming distribution platform operated by HORUSX ENTERTAINMENT.",
      "faq.q2": "Which game is available?",
      "faq.a2": "Escape: out of game, a horror game rated 12+. It is currently marked Coming Soon.",
      "faq.q3": "When is the release date?",
      "faq.a3": "The official release date is 10 November 2026. The live countdown on this site shows the remaining time.",
      "faq.q4": "Why is the Download button disabled?",
      "faq.a4": "The Download button stays disabled until the official release date.",
      "faq.q5": "How can I contact support?",
      "faq.a5": "Email horusx.official@gmail.com or use the Contact Support button on this page.",

      "footer.text": "The official gaming distribution platform operated by HORUSX ENTERTAINMENT.",
      "footer.links": "Quick links",
      "footer.contact": "Contact",
      "footer.rights": "All rights reserved.",

      "search.title": "Search the store",
      "search.placeholder": "Search for a game…",
      "search.hint": "Try: escape, horror, out of game",
      "search.submit": "Search",
      "search.close": "Close search",
      "search.none": "No game matches your search.",
      "search.found": "Open game page",

      "game.back": "Back to store",
      "game.page.eyebrow": "Game details",
      "game.cover.caption": "Official cover",
      "game.download": "Download",
      "game.download.note": "The Download button stays disabled until the official release date, 10 November 2026.",
      "game.download.after": "Official download details have not been announced yet. Please contact support for updates.",
      "game.release.heading": "Live release countdown",

      "toast.lang": "Language changed to English",
      "toast.mail": "Opening your email app…",

      "e404.title": "Page not found",
      "e404.text": "The page you are looking for does not exist or has been moved.",
      "e404.btn": "Back to home",

      "load.text": "Loading"
    },

    ar: {
      "meta.home.title": "إكس ستور | المتجر الرسمي للألعاب من HORUSX ENTERTAINMENT",
      "meta.home.desc": "إكس ستور هو منصة توزيع الألعاب الرسمية التي تديرها HORUSX ENTERTAINMENT. لعبة الرعب «الهروب: من اللعبة» قادمة في 10 نوفمبر 2026.",
      "meta.game.title": "الهروب: من اللعبة | إكس ستور",
      "meta.game.desc": "الهروب: من اللعبة. رعب، تصنيف عمري +12. قريبًا على إكس ستور، موعد الإصدار 10 نوفمبر 2026.",
      "meta.404.title": "الصفحة غير موجودة | إكس ستور",

      "skip": "تخطَّ إلى المحتوى الرئيسي",
      "nav.home": "الرئيسية",
      "nav.game": "اللعبة المميزة",
      "nav.upcoming": "الإصدار القادم",
      "nav.about": "من نحن",
      "nav.support": "الدعم",
      "nav.menu": "فتح القائمة",
      "nav.search": "البحث في المتجر",
      "nav.lang.label": "تغيير اللغة إلى الإنجليزية",
      "nav.lang.btn": "English",
      "brand.company": "HORUSX ENTERTAINMENT",

      "hero.eyebrow": "المنصة الرسمية للألعاب",
      "hero.title1": "ادخل إلى تجربة",
      "hero.title2": "الرعب القادمة",
      "hero.lead": "إكس ستور هو منصة توزيع الألعاب الرسمية التي تديرها HORUSX ENTERTAINMENT. أولى ألعابنا في الطريق إليكم.",
      "hero.cta1": "تعرّف على اللعبة",
      "hero.cta2": "العد التنازلي للإصدار",
      "hero.badge": "الهروب: من اللعبة — قريبًا في 10 نوفمبر 2026",

      "featured.eyebrow": "اللعبة المميزة",
      "featured.title": "الآن على إكس ستور",
      "featured.sub": "لعبتنا الرسمية، تصدر قريبًا.",
      "game.title": "الهروب: من اللعبة",
      "game.titleAr": "Escape: out of game",
      "game.age": "التصنيف العمري",
      "game.ageVal": "+12",
      "game.genre": "النوع",
      "game.genreVal": "رعب",
      "game.status": "حالة الإصدار",
      "game.statusVal": "قريبًا",
      "game.date": "موعد الإصدار",
      "game.dateVal": "10 نوفمبر 2026",
      "game.desc": "الوصف",
      "game.descVal": "قريبًا",
      "game.details": "عرض التفاصيل",
      "game.cover.alt": "الغلاف الرسمي للعبة الهروب: من اللعبة، حروف حمراء داكنة تقطر داخل دائرة بلون الدم",

      "up.eyebrow": "الإصدار القادم",
      "up.title": "العد التنازلي للإصدار",
      "up.sub": "تصل «الهروب: من اللعبة» في 10 نوفمبر 2026.",
      "cd.days": "يوم",
      "cd.hours": "ساعة",
      "cd.minutes": "دقيقة",
      "cd.seconds": "ثانية",
      "cd.label": "الوقت المتبقي حتى الإصدار",
      "cd.released.title": "حلّ موعد الإصدار",
      "cd.released.text": "وصلت «الهروب: من اللعبة» إلى موعد إصدارها الرسمي. تواصل مع الدعم لمعرفة آخر المستجدات من HORUSX ENTERTAINMENT.",

      "about.eyebrow": "من نحن",
      "about.title": "عن إكس ستور",
      "about.p1": "إكس ستور هو منصة توزيع الألعاب الرسمية التي تديرها HORUSX ENTERTAINMENT.",
      "about.p2": "هو الوجهة الرسمية لألعاب الاستوديو، صُمّم ليمنح اللاعبين مكانًا واحدًا واضحًا وموثوقًا لمعرفة معلومات الألعاب ومواعيد الإصدار والحصول على الدعم.",
      "about.logo.alt": "شعار HORUSX بعين حورس وحرف X ذهبي متوهج",

      "support.eyebrow": "خدمة العملاء",
      "support.title": "مركز الدعم",
      "support.sub": "لديك سؤال عن إكس ستور أو عن اللعبة؟ فريقنا جاهز لمساعدتك.",
      "support.card.title": "تواصل معنا",
      "support.card.text": "راسل فريق الدعم الرسمي في HORUSX ENTERTAINMENT عبر البريد الإلكتروني وسنرد عليك.",
      "support.email.label": "البريد الرسمي للدعم",
      "support.btn": "تواصل مع الدعم",
      "support.mail.subject": "طلب دعم - إكس ستور",
      "faq.title": "الأسئلة الشائعة",
      "faq.q1": "ما هو إكس ستور؟",
      "faq.a1": "إكس ستور هو منصة توزيع الألعاب الرسمية التي تديرها HORUSX ENTERTAINMENT.",
      "faq.q2": "ما اللعبة المتاحة؟",
      "faq.a2": "«الهروب: من اللعبة»، لعبة رعب بتصنيف عمري +12، وحالتها الحالية: قريبًا.",
      "faq.q3": "ما موعد الإصدار؟",
      "faq.a3": "موعد الإصدار الرسمي هو 10 نوفمبر 2026، ويعرض العد التنازلي المباشر في الموقع الوقت المتبقي.",
      "faq.q4": "لماذا زر التحميل غير مفعّل؟",
      "faq.a4": "يبقى زر التحميل غير مفعّل حتى موعد الإصدار الرسمي.",
      "faq.q5": "كيف أتواصل مع الدعم؟",
      "faq.a5": "راسلنا على horusx.official@gmail.com أو استخدم زر «تواصل مع الدعم» في هذه الصفحة.",

      "footer.text": "منصة توزيع الألعاب الرسمية التي تديرها HORUSX ENTERTAINMENT.",
      "footer.links": "روابط سريعة",
      "footer.contact": "التواصل",
      "footer.rights": "جميع الحقوق محفوظة.",

      "search.title": "البحث في المتجر",
      "search.placeholder": "ابحث عن لعبة…",
      "search.hint": "جرّب: الهروب، رعب، من اللعبة",
      "search.submit": "بحث",
      "search.close": "إغلاق البحث",
      "search.none": "لا توجد لعبة تطابق بحثك.",
      "search.found": "افتح صفحة اللعبة",

      "game.back": "العودة إلى المتجر",
      "game.page.eyebrow": "تفاصيل اللعبة",
      "game.cover.caption": "الغلاف الرسمي",
      "game.download": "تحميل",
      "game.download.note": "يبقى زر التحميل غير مفعّل حتى موعد الإصدار الرسمي في 10 نوفمبر 2026.",
      "game.download.after": "لم يتم الإعلان عن تفاصيل التحميل الرسمية بعد. يرجى التواصل مع الدعم لمعرفة المستجدات.",
      "game.release.heading": "العد التنازلي المباشر للإصدار",

      "toast.lang": "تم تغيير اللغة إلى العربية",
      "toast.mail": "جارٍ فتح تطبيق البريد…",

      "e404.title": "الصفحة غير موجودة",
      "e404.text": "الصفحة التي تبحث عنها غير موجودة أو تم نقلها.",
      "e404.btn": "العودة إلى الرئيسية",

      "load.text": "جارٍ التحميل"
    }
  };

  function getSaved() {
    try { var v = localStorage.getItem(STORAGE_KEY); if (v === "en" || v === "ar") return v; } catch (e) {}
    return "en";
  }
  function save(l) { try { localStorage.setItem(STORAGE_KEY, l); } catch (e) {} }

  var current = getSaved();

  function t(key) {
    return (DICT[current] && DICT[current][key]) || DICT.en[key] || key;
  }

  function apply() {
    var html = document.documentElement;
    html.lang = current;
    html.dir = current === "ar" ? "rtl" : "ltr";

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      el.textContent = t(el.getAttribute("data-i18n"));
    });
    document.querySelectorAll("[data-i18n-attr]").forEach(function (el) {
      el.getAttribute("data-i18n-attr").split(";").forEach(function (pair) {
        var p = pair.split(":");
        if (p.length === 2) el.setAttribute(p[0].trim(), t(p[1].trim()));
      });
    });

    var page = document.body.getAttribute("data-page");
    if (page) {
      document.title = t("meta." + page + ".title");
      var md = document.querySelector('meta[name="description"]');
      if (md && DICT.en["meta." + page + ".desc"]) md.setAttribute("content", t("meta." + page + ".desc"));
      var ogt = document.querySelector('meta[property="og:title"]');
      if (ogt) ogt.setAttribute("content", t("meta." + page + ".title"));
      var ogd = document.querySelector('meta[property="og:description"]');
      if (ogd && DICT.en["meta." + page + ".desc"]) ogd.setAttribute("content", t("meta." + page + ".desc"));
    }

    // mailto links get a translated subject
    document.querySelectorAll("[data-mailto]").forEach(function (a) {
      a.setAttribute("href", "mailto:horusx.official@gmail.com?subject=" + encodeURIComponent(t("support.mail.subject")));
    });

    document.dispatchEvent(new CustomEvent("languagechange", { detail: { lang: current } }));
  }

  function set(lang, announce) {
    if (lang !== "en" && lang !== "ar") return;
    current = lang;
    save(lang);
    apply();
    if (announce && window.XUI) window.XUI.toast(t("toast.lang"));
  }

  window.XLang = {
    t: t,
    get: function () { return current; },
    set: set,
    toggle: function () { set(current === "en" ? "ar" : "en", true); },
    apply: apply
  };

  // Set direction immediately (before first paint) to avoid layout flash.
  document.documentElement.lang = current;
  document.documentElement.dir = current === "ar" ? "rtl" : "ltr";

  document.addEventListener("DOMContentLoaded", function () {
    apply();
    document.querySelectorAll("[data-lang-toggle]").forEach(function (b) {
      b.addEventListener("click", function () { window.XLang.toggle(); });
    });
  });
})();
