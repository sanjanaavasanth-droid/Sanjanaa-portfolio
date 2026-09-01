/* ==========================================================================
   SANJANA VASANTH — PORTFOLIO
   Vanilla JavaScript: navigation, scroll effects, animations, form validation
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {

  /* ---------- Footer year ---------- */
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------- Navbar scroll effect ---------- */
  const navbar = document.getElementById("navbar");
  const backToTop = document.getElementById("backToTop");

  const onScroll = () => {
    if (window.scrollY > 40) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }

    if (window.scrollY > 480) {
      backToTop.classList.add("visible");
    } else {
      backToTop.classList.remove("visible");
    }
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  /* ---------- Mobile hamburger menu ---------- */
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("navLinks");

  const closeMenu = () => {
    hamburger.classList.remove("open");
    navLinks.classList.remove("open");
    hamburger.setAttribute("aria-expanded", "false");
  };

  hamburger.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    hamburger.classList.toggle("open", isOpen);
    hamburger.setAttribute("aria-expanded", String(isOpen));
  });

  document.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeMenu();
  });

  /* ---------- Smooth scrolling (native CSS handles most; JS fallback for older browsers) ---------- */
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (e) => {
      const targetId = anchor.getAttribute("href");
      if (targetId.length <= 1) return;
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });

  /* ---------- Active navigation on scroll ---------- */
  const sections = document.querySelectorAll("section[id]");
  const navLinkEls = document.querySelectorAll(".nav-link");

  const setActiveLink = () => {
    let currentId = sections[0]?.id;
    const scrollPos = window.scrollY + 140;

    sections.forEach((section) => {
      if (scrollPos >= section.offsetTop) {
        currentId = section.id;
      }
    });

    navLinkEls.forEach((link) => {
      link.classList.toggle("active", link.getAttribute("href") === `#${currentId}`);
    });
  };
  window.addEventListener("scroll", setActiveLink, { passive: true });
  setActiveLink();

  /* ---------- Scroll-triggered animations ---------- */
  const animatedEls = document.querySelectorAll("[data-animate]");

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
    );

    animatedEls.forEach((el, i) => {
      el.style.transitionDelay = `${(i % 6) * 60}ms`;
      observer.observe(el);
    });
  } else {
    animatedEls.forEach((el) => el.classList.add("in-view"));
  }

  /* ---------- Contact form validation ---------- */
  const form = document.getElementById("contactForm");
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const messageInput = document.getElementById("message");
  const nameError = document.getElementById("nameError");
  const emailError = document.getElementById("emailError");
  const messageError = document.getElementById("messageError");
  const formSuccess = document.getElementById("formSuccess");

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const validateField = (input, errorEl, validator, message) => {
    const value = input.value.trim();
    if (!validator(value)) {
      input.classList.add("invalid");
      errorEl.textContent = message;
      return false;
    }
    input.classList.remove("invalid");
    errorEl.textContent = "";
    return true;
  };

  const validators = {
    name: () =>
      validateField(nameInput, nameError, (v) => v.length >= 2, "Please enter your name (2+ characters)."),
    email: () =>
      validateField(emailInput, emailError, (v) => emailPattern.test(v), "Please enter a valid email address."),
    message: () =>
      validateField(messageInput, messageError, (v) => v.length >= 10, "Message should be at least 10 characters."),
  };

  [nameInput, emailInput, messageInput].forEach((input) => {
    input.addEventListener("blur", () => validators[input.name]());
    input.addEventListener("input", () => {
      if (input.classList.contains("invalid")) validators[input.name]();
    });
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    formSuccess.textContent = "";

    const isNameValid = validators.name();
    const isEmailValid = validators.email();
    const isMessageValid = validators.message();

    if (isNameValid && isEmailValid && isMessageValid) {
      formSuccess.textContent = "Thanks! Your message has been noted — Sanjana will get back to you soon.";
      form.reset();
      [nameInput, emailInput, messageInput].forEach((el) => el.classList.remove("invalid"));
    } else {
      formSuccess.textContent = "";
      const firstInvalid = form.querySelector(".invalid");
      if (firstInvalid) firstInvalid.focus();
    }
  });

  /* ---------- Interactive project cards (subtle tilt on mouse move) ---------- */
  document.querySelectorAll(".project-card, .skill-card").forEach((card) => {
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 6;
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * -6;
      card.style.transform = `perspective(600px) rotateX(${y}deg) rotateY(${x}deg) translateY(-4px)`;
    });
    card.addEventListener("mouseleave", () => {
      card.style.transform = "";
    });
  });

});
