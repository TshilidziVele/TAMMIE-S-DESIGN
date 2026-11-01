// Scroll reveal: sections fade and slide up as they scroll into view.
// The "reveal" class is added here (not in the HTML), so if this script
// ever fails to load, the page content stays fully visible.

(function () {
    // Respect visitors who have turned animations off in their device settings
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!("IntersectionObserver" in window)) return;

    var targets = [];

    // Grids of cards: reveal each card one after another
    document.querySelectorAll(".cards, .services-grid, .contact-cards").forEach(function (grid) {
        Array.prototype.forEach.call(grid.children, function (card, i) {
            card.style.transitionDelay = (i * 100) + "ms";
            targets.push(card);
        });
    });

    // Everything else directly inside a section's container
    document.querySelectorAll("main section .container > *").forEach(function (el) {
        if (el.matches(".cards, .services-grid, .contact-cards")) return;
        targets.push(el);
    });

    var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (!entry.isIntersecting) return;

            var el = entry.target;
            el.classList.add("visible");

            // Clean up once the fade is done so hover effects still work
            el.addEventListener("transitionend", function (e) {
                if (e.propertyName === "opacity") {
                    el.classList.remove("reveal", "visible");
                    el.style.transitionDelay = "";
                }
            });

            observer.unobserve(el);
        });
    }, { threshold: 0.12 });

    targets.forEach(function (el) {
        el.classList.add("reveal");
        observer.observe(el);
    });
})();