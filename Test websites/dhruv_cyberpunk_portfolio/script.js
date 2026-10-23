// Mobile navigation
const menuToggle = document.querySelector("#menuToggle");
const nav = document.querySelector("#nav");

menuToggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
  menuToggle.textContent = isOpen ? "✕" : "☰";
});

// Close the mobile menu after a navigation link is selected.
nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation");
    menuToggle.textContent = "☰";
  });
});

// Keep the copyright year up to date.
document.querySelector("#year").textContent = new Date().getFullYear();

// This form prepares an email in the visitor's default email app.
// Replace this address with your own public contact email.
const contactForm = document.querySelector("#contactForm");
const formNote = document.querySelector("#formNote");
const contactEmail = "your-email@example.com"; // TODO: replace this with your email

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.querySelector("#visitorName").value.trim();
  const email = document.querySelector("#visitorEmail").value.trim();
  const message = document.querySelector("#visitorMessage").value.trim();

  if (!name || !email || !message) {
    formNote.textContent = "Please complete all fields before continuing.";
    return;
  }

  const subject = encodeURIComponent(`Portfolio message from ${name}`);
  const body = encodeURIComponent(
    `Name: ${name}\nReply email: ${email}\n\nMessage:\n${message}`
  );

  if (contactEmail === "your-email@example.com") {
    formNote.textContent = "Demo mode: open script.js and replace your-email@example.com with your email address to activate this form.";
    return;
  }

  window.location.href = `mailto:${contactEmail}?subject=${subject}&body=${body}`;
});
