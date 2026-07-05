const travelManifest = window.travelManifest || [];
const proofManifest = window.proofManifest || [];

const navToggle = document.querySelector(".nav-toggle");
const siteNav = document.querySelector(".site-nav");
const lightbox = document.querySelector("#lightbox");
const lightboxImage = lightbox.querySelector("img");
const lightboxCaption = lightbox.querySelector("p");
const lightboxClose = lightbox.querySelector(".lightbox-close");
const topLink = document.querySelector('.site-footer a[href="#hero"]');

navToggle.addEventListener("click", () => {
  const isOpen = siteNav.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

document.querySelectorAll(".site-nav a").forEach((link) => {
  link.addEventListener("click", () => {
    siteNav.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
  });
});

if (topLink) {
  topLink.addEventListener("click", (event) => {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

function renderGallery(containerId, items) {
  const container = document.querySelector(containerId);
  if (!container) return;

  container.innerHTML = "";
  items.forEach((item) => {
    const card = document.createElement("button");
    card.className = "gallery-card";
    card.type = "button";
    card.setAttribute("aria-label", `查看${item.title}`);

    const image = document.createElement("img");
    image.src = item.src;
    image.alt = item.alt;
    image.loading = "lazy";
    image.width = item.width;
    image.height = item.height;

    const caption = document.createElement("p");
    caption.textContent = item.title;

    card.append(image, caption);
    card.addEventListener("click", () => openLightbox(item));
    container.append(card);
  });
}

function openLightbox(item) {
  lightboxImage.src = item.src;
  lightboxImage.alt = item.alt;
  lightboxCaption.textContent = item.title;
  lightbox.classList.add("open");
  lightbox.setAttribute("aria-hidden", "false");
  lightboxClose.focus();
}

function closeLightbox() {
  lightbox.classList.remove("open");
  lightbox.setAttribute("aria-hidden", "true");
  lightboxImage.src = "";
}

lightboxClose.addEventListener("click", closeLightbox);
lightbox.addEventListener("click", (event) => {
  if (event.target === lightbox) closeLightbox();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && lightbox.classList.contains("open")) {
    closeLightbox();
  }
});

const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const activeLink = document.querySelector(`.site-nav a[href="#${entry.target.id}"]`);
      document.querySelectorAll(".site-nav a").forEach((link) => link.classList.remove("active"));
      if (activeLink) activeLink.classList.add("active");
    });
  },
  { rootMargin: "-45% 0px -45% 0px", threshold: 0.01 }
);

document.querySelectorAll("main section[id]").forEach((section) => {
  sectionObserver.observe(section);
});

renderGallery("#travel-gallery", travelManifest);
renderGallery("#proof-gallery", proofManifest);
