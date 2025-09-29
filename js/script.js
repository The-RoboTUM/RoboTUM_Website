document.addEventListener("DOMContentLoaded", function () {
  const burger = document.getElementById("burger");
  const navMenu = document.getElementById("nav-menu");

  burger.addEventListener("click", () => {
    navMenu.classList.toggle("open");
  });
});

// document.getElementById("contactForm").addEventListener("submit", function (e) {
//     e.preventDefault();
//     alert("Thanks for reaching out! We'll get back to you shortly.");
//     this.reset(); // optional: reset the form after submission
//   }); dddd