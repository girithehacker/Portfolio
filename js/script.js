let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

document.addEventListener("click", (event) => {
  const isClickInsideMenu =
    navbar.contains(event.target) || menuIcon.contains(event.target);

  if (navbar.classList.contains("active") && !isClickInsideMenu) {
    menuIcon.classList.remove("bx-x");
    navbar.classList.remove("active");
  }
});

// Scroll behavior
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 100);

  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((link) => link.classList.remove("active"));
      document
        .querySelector("header nav a[href*=" + id + "]")
        .classList.add("active");
    }
  });

  // close navbar on scroll
  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");
};

// smooth close on link click
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    menuIcon.classList.remove("bx-x");
    navbar.classList.remove("active");
  });
});

// scroll reveal contents
document.addEventListener("DOMContentLoaded", () => {
  ScrollReveal().reveal(".home-content, .heading", {
    origin: "top",
    distance: "50px",
    duration: 1000,
  });
  ScrollReveal().reveal(".home-image, .contact form", {
    origin: "bottom",
    distance: "50px",
    duration: 1000,
  });
  ScrollReveal().reveal(".home-content h1, .about-image", {
    origin: "left",
    distance: "50px",
    duration: 1000,
  });
  ScrollReveal().reveal(
    ".home-content .passion,.home-content p, .about-content",
    {
      origin: "right",
      distance: "50px",
      duration: 1000,
    }
  );

  const typed = new Typed(".multiple-text", {
    strings: [
      "CS Student",
      "Aspiring Pentester",
      "Cybersecurity Enthusiast",
    ],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true,
  });
});

//max 750 px shows 3 projects
const showMoreBtn = document.getElementById("showMoreBtn");
let hiddenBoxes = document.querySelectorAll(".hidden-box");
let currentIndex = 0;
const itemsPerClick = 3;

showMoreBtn.addEventListener("click", () => {
  for (let i = currentIndex; i < currentIndex + itemsPerClick; i++) {
    if (hiddenBoxes[i]) {
      hiddenBoxes[i].style.display = "flex";
    }
  }
  currentIndex += itemsPerClick;

  if (currentIndex >= hiddenBoxes.length) {
    showMoreBtn.style.display = "none";
  }
});

//landscape shows 4 projecta

const showMoreListBtn = document.getElementById("showMoreListBtn");
let hiddenBoxesList = document.querySelectorAll(".projects-list");
let current = 0;
const items = 4;

showMoreListBtn.addEventListener("click", () => {
  for (let i = current; i < current + items; i++) {
    if (hiddenBoxesList[i]) {
      hiddenBoxesList[i].style.display = "flex";
    }
  }
  current += items;

  if (current >= hiddenBoxesList.length) {
    showMoreListBtn.style.display = "none";
  }
});

//contact section

const form = document.querySelector("form");
const statusText = document.getElementById("form-status");

form.addEventListener("submit", function (e) {
  const email = form.querySelector('input[name="email"]').value;
  const name = form.querySelector('input[name="name"]').value;
  const message = form.querySelector('textarea[name="message"]').value;

  // Simple email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!email || !name || !message) {
    e.preventDefault();
    statusText.innerText = "Please fill in all required fields.";
    statusText.style.color = "red";
    statusText.style.display = "block";
    return;
  }

  if (!emailRegex.test(email)) {
    e.preventDefault();
    statusText.innerText = "Please enter a valid email address.";
    statusText.style.color = "red";
    statusText.style.display = "block";
    return;
  }

  // Show success message after a short delay
  setTimeout(() => {
    statusText.innerText = "Message sent successfully!";
    statusText.style.color = "var(--main-color)";
    statusText.style.display = "block";
    form.reset();
  }, 300);
});
