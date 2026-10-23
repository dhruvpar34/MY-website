const menuToggle = document.querySelector("#menuToggle");
const nav = document.querySelector("#nav");
menuToggle.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(open));
  menuToggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  menuToggle.textContent = open ? "✕" : "☰";
});
nav.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => {
  nav.classList.remove("open"); menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "Open menu"); menuToggle.textContent = "☰";
}));
document.querySelector("#year").textContent = new Date().getFullYear();
// Replace this placeholder with your public email address.
const contactEmail = "your-email@example.com";
const contactForm = document.querySelector("#contactForm");
const formNote = document.querySelector("#formNote");
contactForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = document.querySelector("#name").value.trim();
  const email = document.querySelector("#email").value.trim();
  const message = document.querySelector("#message").value.trim();
  if (!name || !email || !message) { formNote.textContent = "Please fill in all fields."; return; }
  if (contactEmail === "your-email@example.com") {
    formNote.textContent = "Demo mode: edit script.js and replace your-email@example.com with your email to activate this form."; return;
  }
  const subject = encodeURIComponent(`Portfolio message from ${name}`);
  const body = encodeURIComponent(`Name: ${name}\nReply email: ${email}\n\nMessage:\n${message}`);
  window.location.href = `mailto:${contactEmail}?subject=${subject}&body=${body}`;
});
