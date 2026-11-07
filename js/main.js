/* ==========================================================
   X STORE — UI behaviour: preloader, header, mobile menu,
   search (single game), toast, reveal animations.
   ========================================================== */
(function () {
  "use strict";

  var toastTimer;
  var UI = {
    toast: function (msg, ms) {
      var el = document.getElementById("toast");
      if (!el) return;
      el.textContent = msg;
      el.classList.add("show");
      clearTimeout(toastTimer);
      toastTimer = setTimeout(function () { el.classList.remove("show"); }, ms || 2600);
    }
  };
  window.XUI = UI;

  // Keywords for the one and only game (English + Arabic).
  var KEYWORDS = ["escape", "out of game", "out", "game", "horror", "12", "12+", "coming soon", "x store",
    "الهروب", "من اللعبة", "اللعبة", "رعب", "قريبا", "قريبًا", "لعبة"];

  function norm(s) {
    return String(s).toLowerCase().trim()
      .replace(/[ً-ٰٟ]/g, "")
      .replace(/[أإآ]/g, "ا").replace(/ى/g, "ي").replace(/ة/g, "ه")
      .replace(/\s+/g, " ");
  }

  document.addEventListener("DOMContentLoaded", function () {
    var header = document.querySelector(".site-header");
    var burger = document.getElementById("burger");
    var nav = document.getElementById("nav");

    /* Preloader */
    var pre = document.getElementById("preloader");
    function hidePre() { if (pre) pre.classList.add("done"); }
    window.addEventListener("load", function () { setTimeout(hidePre, 250); });
    setTimeout(hidePre, 2500); // safety net

    /* Header shadow on scroll */
    function onScroll() { if (header) header.classList.toggle("scrolled", window.scrollY > 20); }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    /* Mobile menu */
    function closeMenu() {
      if (!nav || !burger) return;
      nav.classList.remove("open");
      burger.setAttribute("aria-expanded", "false");
    }
    if (burger && nav) {
      burger.addEventListener("click", function () {
        var open = nav.classList.toggle("open");
        burger.setAttribute("aria-expanded", String(open));
      });
      nav.querySelectorAll("a").forEach(function (a) { a.addEventListener("click", closeMenu); });
      document.addEventListener("keydown", function (e) { if (e.key === "Escape") closeMenu(); });
    }

    /* Active link highlight on home page */
    var links = Array.prototype.slice.call(document.querySelectorAll('.nav a[href^="index.html#"], .nav a[href^="#"]'));
    var sections = links.map(function (a) {
      var id = a.getAttribute("href").split("#")[1];
      return id ? document.getElementById(id) : null;
    });
    if ("IntersectionObserver" in window && sections.some(Boolean)) {
      var spy = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) {
          if (en.isIntersecting) {
            links.forEach(function (a) { a.classList.toggle("active", a.getAttribute("href").split("#")[1] === en.target.id); });
          }
        });
      }, { rootMargin: "-45% 0px -50% 0px" });
      sections.forEach(function (s) { if (s) spy.observe(s); });
    }

    /* Reveal on scroll */
    var rev = document.querySelectorAll(".reveal");
    if ("IntersectionObserver" in window) {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } });
      }, { threshold: 0.12 });
      rev.forEach(function (el) { io.observe(el); });
    } else { rev.forEach(function (el) { el.classList.add("in"); }); }

    /* Image fallback (if a file is missing) */
    document.querySelectorAll(".cover-frame img").forEach(function (img) {
      img.addEventListener("error", function () { img.parentNode.classList.add("img-missing"); });
    });

    /* Year */
    document.querySelectorAll("[data-year]").forEach(function (el) { el.textContent = new Date().getFullYear(); });

    /* Mail button feedback */
    document.querySelectorAll("[data-mailto]").forEach(function (a) {
      a.addEventListener("click", function () { UI.toast(window.XLang.t("toast.mail"), 2200); });
    });

    /* Search */
    var overlay = document.getElementById("searchOverlay");
    var input = document.getElementById("searchInput");
    var result = document.getElementById("searchResult");
    var openers = document.querySelectorAll("[data-search-open]");
    var lastFocus = null;

    function openSearch() {
      if (!overlay) return;
      lastFocus = document.activeElement;
      overlay.classList.add("open");
      closeMenu();
      setTimeout(function () { input && input.focus(); }, 30);
    }
    function closeSearch() {
      if (!overlay) return;
      overlay.classList.remove("open");
      if (lastFocus) lastFocus.focus();
    }
    function runSearch() {
      var q = norm(input.value);
      result.innerHTML = "";
      if (!q) return;
      var hit = KEYWORDS.some(function (k) { var nk = norm(k); return nk.indexOf(q) !== -1 || (q.length > 2 && q.indexOf(nk) !== -1 && nk.length > 2); });
      var L = window.XLang;
      if (hit) {
        var a = document.createElement("a");
        a.className = "search-result";
        a.href = "game.html";
        var img = document.createElement("img");
        img.className = "thumb"; img.src = "images/escape-cover.jpg"; img.alt = L.t("game.cover.alt");
        var box = document.createElement("div");
        var s1 = document.createElement("strong"); s1.textContent = L.t("game.title") + " — " + L.t("game.titleAr");
        var s2 = document.createElement("span"); s2.textContent = L.t("game.genreVal") + " · " + L.t("game.ageVal") + " · " + L.t("game.statusVal") + " — " + L.t("search.found");
        box.appendChild(s1); box.appendChild(s2); a.appendChild(img); a.appendChild(box);
        result.appendChild(a);
      } else {
        var p = document.createElement("p");
        p.className = "search-none"; p.textContent = L.t("search.none");
        result.appendChild(p);
      }
    }
    openers.forEach(function (b) { b.addEventListener("click", openSearch); });
    if (overlay) {
      overlay.addEventListener("click", function (e) { if (e.target === overlay) closeSearch(); });
      document.getElementById("searchClose").addEventListener("click", closeSearch);
      document.addEventListener("keydown", function (e) { if (e.key === "Escape") closeSearch(); });
      document.getElementById("searchForm").addEventListener("submit", function (e) { e.preventDefault(); runSearch(); });
      input.addEventListener("input", runSearch);
      document.addEventListener("languagechange", function () { if (input.value) runSearch(); });
    }
  });
})();
