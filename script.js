(function () {
  "use strict";

  // Loading screen: hide when page is ready, with minimum display time
  var loader = document.getElementById("loader");
  var loaderMinTime = 800;
  var loaderStart = Date.now();
  function hideLoader() {
    if (!loader) return;
    var elapsed = Date.now() - loaderStart;
    var delay = Math.max(0, loaderMinTime - elapsed);
    setTimeout(function () {
      loader.classList.add("hidden");
      setTimeout(function () {
        if (loader.parentNode) loader.parentNode.removeChild(loader);
      }, 500);
    }, delay);
  }
  if (document.readyState === "complete") {
    hideLoader();
  } else {
    window.addEventListener("load", hideLoader);
  }

  // Footer year
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Mobile nav toggle + hamburger animation
  var toggle = document.querySelector(".nav-toggle");
  var links = document.querySelector(".nav-links");
  if (toggle && links) {
    toggle.addEventListener("click", function () {
      var isOpen = links.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", isOpen);
      toggle.classList.toggle("is-active", isOpen);
    });
    document.querySelectorAll(".nav-links a").forEach(function (a) {
      a.addEventListener("click", function () {
        links.classList.remove("is-open");
        toggle.classList.remove("is-active");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // Logo: scroll to very top, set #hero in URL, close mobile menu
  var logo = document.getElementById("nav-logo");
  if (logo) {
    logo.addEventListener("click", function (e) {
      e.preventDefault();
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      var cleanPath = window.location.pathname + window.location.search;
      window.history.replaceState(null, "", cleanPath + "#hero");
      if (links) links.classList.remove("is-open");
      if (toggle) {
        toggle.classList.remove("is-active");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  // Header shadow on scroll
  var header = document.querySelector(".header");
  if (header) {
    function updateHeader() {
      header.classList.toggle("scrolled", window.scrollY > 20);
    }
    window.addEventListener("scroll", updateHeader, { passive: true });
    updateHeader();
  }

  // Scroll-triggered reveal animations
  var revealEls = document.querySelectorAll(".reveal, .reveal-children");
  if (revealEls.length && "IntersectionObserver" in window) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { rootMargin: "0px 0px -40px 0px", threshold: 0.1 }
    );
    revealEls.forEach(function (el) {
      observer.observe(el);
    });
  }
})();
