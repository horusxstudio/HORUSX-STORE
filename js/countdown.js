/* ==========================================================
   X STORE — release countdown
   Release: 10 November 2026, 00:00 Cairo time (UTC+02:00).
   Works for every element with  data-countdown  on the page.
   ========================================================== */
(function () {
  "use strict";

  // Official release moment (Egypt is UTC+02:00 in November).
  var RELEASE = new Date("2026-11-10T00:00:00+02:00").getTime();

  // When the official download link is announced, put it here (e.g. "https://...").
  // While empty, the Download button (after release) shows an honest notice instead.
  window.XSTORE_DOWNLOAD_URL = "";

  function pad(n) { return n < 10 ? "0" + n : String(n); }

  function tick() {
    var now = Date.now();
    var diff = RELEASE - now;
    var released = diff <= 0;
    document.body.classList.toggle("is-released", released);

    document.querySelectorAll("[data-countdown]").forEach(function (box) {
      var rel = box.querySelector(".release-msg");
      if (rel) rel.classList.toggle("show", released);
      if (released) return;

      var s = Math.floor(diff / 1000);
      var d = Math.floor(s / 86400);
      var h = Math.floor((s % 86400) / 3600);
      var m = Math.floor((s % 3600) / 60);
      var sec = s % 60;
      var vals = { days: d < 100 ? pad(d) : String(d), hours: pad(h), minutes: pad(m), seconds: pad(sec) };
      Object.keys(vals).forEach(function (k) {
        var el = box.querySelector('[data-unit="' + k + '"]');
        if (el) el.textContent = vals[k];
      });
    });

    // Download button: disabled until the official release date.
    document.querySelectorAll("[data-download]").forEach(function (btn) {
      btn.disabled = !released;
      btn.setAttribute("aria-disabled", String(!released));
    });
    document.querySelectorAll("[data-download-note]").forEach(function (n) {
      n.setAttribute("data-i18n", released ? "game.download.after" : "game.download.note");
      if (window.XLang) n.textContent = window.XLang.t(released ? "game.download.after" : "game.download.note");
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll("[data-download]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        if (btn.disabled) return;
        if (window.XSTORE_DOWNLOAD_URL) {
          window.open(window.XSTORE_DOWNLOAD_URL, "_blank", "noopener");
        } else if (window.XUI) {
          window.XUI.toast(window.XLang.t("game.download.after"), 5000);
        }
      });
    });
    tick();
    setInterval(tick, 1000);
  });
  document.addEventListener("languagechange", tick);
})();
