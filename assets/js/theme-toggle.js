(function () {
  function getPreferredTheme() {
    var stored = localStorage.getItem("theme");
    if (stored) return stored;
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    // Toggle icon visibility
    var sunIcons = document.querySelectorAll(".theme-icon-sun");
    var moonIcons = document.querySelectorAll(".theme-icon-moon");
    sunIcons.forEach(function (el) { el.style.display = theme === "dark" ? "block" : "none"; });
    moonIcons.forEach(function (el) { el.style.display = theme === "dark" ? "none" : "block"; });
  }

  function toggleTheme() {
    var current = document.documentElement.getAttribute("data-theme") || getPreferredTheme();
    var next = current === "dark" ? "light" : "dark";
    localStorage.setItem("theme", next);
    applyTheme(next);
  }

  // Apply on initial load
  applyTheme(getPreferredTheme());

  // Bind toggle buttons
  function bindToggles() {
    document.querySelectorAll(".theme-toggle").forEach(function (btn) {
      btn.removeEventListener("click", toggleTheme);
      btn.addEventListener("click", toggleTheme);
    });
    applyTheme(getPreferredTheme());
  }

  // Bind on DOM ready
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", bindToggles);
  } else {
    bindToggles();
  }

  // Re-bind after Turbo navigation
  document.addEventListener("turbo:load", bindToggles);
})();
