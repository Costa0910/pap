// Change navbar style on scroll

window.addEventListener("scroll", () => {
  document
    .querySelector("nav")
    .classList.toggle("window-scroll", window.scrollY > 0);
});

// toggle open class / hide - show
const faqs = document.querySelectorAll(".faq");
faqs.forEach((faq) => {
  faq.addEventListener("click", () => {
    faq.classList.toggle("open");

    // change icon
    const icon = faq.querySelector(".faq__icon i");
    if (icon.className === "uil uil-plus") {
      icon.className = "uil uil-minus";
    } else {
      icon.className = "uil uil-plus";
    }
  });
});

// get ids
const menu = document.querySelector(".nav__menu");
const openBtn = document.querySelector("#open-menu-btn");
const closeBtn = document.querySelector("#close-menu-btn");

// show / hide nav menu
function openAndClose(inlineButton, noneButton, state) {
  menu.style.display = state;
  inlineButton.style.display = "inline-block";
  noneButton.style.display = "none";
}

// add event listeners
openBtn.addEventListener("click", () => {
  openAndClose(closeBtn, openBtn, "flex");
});

closeBtn.addEventListener("click", () => {
  openAndClose(openBtn, closeBtn, "none");
});
