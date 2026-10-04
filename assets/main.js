// Studio links live here. When the Studio moves to studio.oliviayong.com, change STUDIO only.
const STUDIO = "/studio/";
const LINKS = {
  studio: STUDIO,
  book30: "https://calendly.com/oyong-work/30min",
  coaching: STUDIO + "coaching.html",
  packages: STUDIO + "coaching.html#packages",
  shop: STUDIO + "shop.html",
  firstYear: "https://forms.gle/zMGZJQcMr5tQE6yZ8",
  stories: STUDIO + "stories.html",
  instagram: "https://www.instagram.com/hey.coach.liv/",
  tiktok: "https://www.tiktok.com/@hey.coach.liv",
  email: "mailto:oyong.partner@gmail.com"
};

document.querySelectorAll("[data-link]").forEach((el) => {
  const url = LINKS[el.dataset.link];
  if (!url) return;
  el.href = url;
  if (url.startsWith("http")) {
    el.target = "_blank";
    el.rel = "noopener";
  }
});

const toggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".site-nav");
if (toggle && nav) {
  toggle.addEventListener("click", () => {
    const open = nav.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", open);
    toggle.textContent = open ? "Close" : "Menu";
  });
  nav.querySelectorAll("a[href^='#']").forEach((a) => a.addEventListener("click", () => {
    nav.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", false);
    toggle.textContent = "Menu";
  }));
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add("is-visible");
    observer.unobserve(entry.target);
  });
}, { threshold: 0.12 });
document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

document.querySelectorAll("[data-year]").forEach((el) => { el.textContent = new Date().getFullYear(); });
