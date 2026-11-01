(function () {
    var images = document.querySelectorAll("main img");
    if (!images.length) return;
    var overlay = document.createElement("div");
    overlay.className = "lightbox";
    overlay.setAttribute("role", "dialog");
    overlay.setAttribute("aria-modal", "true");
    overlay.setAttribute("aria-label", "Enlarged image");

    var bigImage = document.createElement("img");
    bigImage.className = "lightbox-img";

    var caption = document.createElement("p");
    caption.className = "lightbox-caption";

    var closeBtn = document.createElement("button");
    closeBtn.className = "lightbox-close";
    closeBtn.setAttribute("aria-label", "Close image");
    closeBtn.innerHTML = "&times;";

    overlay.appendChild(closeBtn);
    overlay.appendChild(bigImage);
    overlay.appendChild(caption);
    document.body.appendChild(overlay);

    function openLightbox(img) {
        bigImage.src = img.src;
        bigImage.alt = img.alt;
        caption.textContent = img.alt;
        overlay.classList.add("open");
        document.body.style.overflow = "hidden";
        closeBtn.focus();
    }

    function closeLightbox() {
        overlay.classList.remove("open");
        document.body.style.overflow = "";
    }

    images.forEach(function (img) {
        img.classList.add("lightbox-trigger");
        img.setAttribute("tabindex", "0");
        img.addEventListener("click", function () { openLightbox(img); });
        img.addEventListener("keydown", function (e) {
            if (e.key === "Enter") openLightbox(img);
        });
    });

    overlay.addEventListener("click", closeLightbox);
    document.addEventListener("keydown", function (e) {
        if (e.key === "Escape") closeLightbox();
    });
})();
