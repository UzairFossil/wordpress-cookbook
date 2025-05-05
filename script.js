const fadeContainer = document.querySelectorAll(".fade-container");

const intersectionCallbackSimpleFade = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const childImage = entry.target.querySelector(".fade-child-one");
      const childText = entry.target.querySelector(".fade-child-two");

      childText.classList.add("fade-opacity-increase");
      childImage.classList.add("fade-opacity-increase");
    }
  });
};
const simpleFadeAnimation = new IntersectionObserver(
  intersectionCallbackSimpleFade,
  {
    threshold: window.innerHeight < 500 ? 0.1 : 0.4,
  }
);
fadeContainer.forEach((i) => {
  simpleFadeAnimation.observe(i);
});

const infoCol = document.querySelectorAll(".info-col");
const infoBoxes = document.querySelectorAll(".boxes-parent");

const intersectionCallbackInfoTransform = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const childBoxes = entry.target.querySelector(".boxes-parent");
      const infoText = document.querySelector(".info-text");
      childBoxes.classList.add("transform-zero");
      infoText.classList.add("fade-opacity-increase");
    }
  });
};
const infoTransform = new IntersectionObserver(
  intersectionCallbackInfoTransform,
  {
    threshold: window.innerHeight < 500 ? 0.1 : 0.3,
  }
);
infoCol.forEach((i) => {
  infoTransform.observe(i);
});

const culinarySection = document.querySelectorAll(".culinary-section");

const intersectionCallbackCulinary = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const fork = entry.target.querySelector(".fork");
      const knife = entry.target.querySelector(".knife");
      fork.classList.add("fork-rotate");
      knife.classList.add("knife-rotate");
    }
  });
};
const CulinaryAnim = new IntersectionObserver(intersectionCallbackCulinary, {
  threshold: window.innerHeight < 500 ? 0.1 : 0.5,
});
culinarySection.forEach((i) => {
  CulinaryAnim.observe(i);
});

const newsletterSection = document.querySelectorAll(".newsletter-section");
const mobile = document.querySelector(".footer-mobile-abs");
const secondaryText = document.querySelector(".secondary-text");

const intersectionCallbackNewsletter = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      mobile.classList.add("transform-zero");
      secondaryText.classList.add("fade-opacity-increase");
    }
  });
};
const NewsletterAnim = new IntersectionObserver(
  intersectionCallbackNewsletter,
  {
    threshold: window.innerHeight < 500 ? 0.1 : 0.6,
  }
);
newsletterSection.forEach((i) => {
  NewsletterAnim.observe(i);
});

const menuButton = document.querySelector(".menu-button");
const menuOverlay = document.querySelector(".menu-overlay");
const menu = document.querySelector(".menu");
function menuToggler() {
  // headerMainSection.classList.toggle("white-bg");
  menuOverlay.classList.toggle("menu-overlay-display");
  menu.classList.toggle("menu-display");
  document.body.classList.toggle("scroll-stop");
}

menuButton.addEventListener("click", () => {
  menuToggler();
});

window.addEventListener("click", (e) => {
  if (e.target.classList.contains("menu-overlay-display")) {
    menuToggler();
  }
  if (e.target.classList.contains("menu-display")) {
    // headerMainSection.classList.add("white-bg");
    return;
  }
});

const testimonialBoxes = document.querySelectorAll(".testimonial-box");
const testimonialSection = document.querySelector(".testimonials-cont");

const intersectionCallbackTestimonials = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      testimonialBoxes.forEach((i, index) => {
        setTimeout(() => {
          i.classList.add("fade-in-box");
        }, index * 100);
      });
    }
  });
};
const TestimonialsAnim = new IntersectionObserver(
  intersectionCallbackTestimonials,
  {
    threshold: window.innerWidth < 500 ? 0.3 : 0.6,
  }
);

TestimonialsAnim.observe(testimonialSection);
