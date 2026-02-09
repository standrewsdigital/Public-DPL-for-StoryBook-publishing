(function () {
      var LG_MIN = 992;
      function isLgUp() {
        return window.matchMedia("(min-width: " + LG_MIN + "px)").matches;
      }

      function closeNav(navEl) {
        navEl.classList.remove("is-open");
        var btn = navEl.querySelector(".navigation-bar-toggle");
        if (btn) btn.setAttribute("aria-expanded", "false");
      }

      function sync(navEl) {
        if (isLgUp()) closeNav(navEl);
      }

      document.querySelectorAll("[data-nav]").forEach(function (navEl) {
        var btn = navEl.querySelector(".navigation-bar-toggle");
        if (!btn) return;

        btn.addEventListener("click", function () {
          if (isLgUp()) return;
          var open = navEl.classList.toggle("is-open");
          btn.setAttribute("aria-expanded", open ? "true" : "false");
        });

        sync(navEl);
      });

      var mq = window.matchMedia("(min-width: " + LG_MIN + "px)");
      mq.addEventListener("change", function () {
        document.querySelectorAll("[data-nav]").forEach(sync);
      });
    })();