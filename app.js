const year = document.getElementById("year");
if (year) year.textContent = String(new Date().getFullYear());

const nav = document.querySelector(".nav");
const toggle = document.querySelector(".nav-toggle");
if (toggle && nav) {
  toggle.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  });
  nav.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}

const toast = document.querySelector(".toast");

function copyText(value) {
  if (navigator.clipboard && window.isSecureContext) {
    return navigator.clipboard.writeText(value);
  }
  const field = document.createElement("textarea");
  field.value = value;
  field.setAttribute("readonly", "");
  field.style.position = "fixed";
  field.style.left = "-9999px";
  document.body.appendChild(field);
  field.select();
  const ok = document.execCommand("copy");
  field.remove();
  if (!ok) throw new Error("copy failed");
}

document.querySelectorAll("[data-copy]").forEach((btn) => {
  btn.addEventListener("click", async () => {
    const value = btn.getAttribute("data-copy") || "";
    try {
      await copyText(value);
      if (toast) toast.textContent = "Copied lunarconsortium";
    } catch {
      if (toast) toast.textContent = "Handle is lunarconsortium";
    }
  });
});
