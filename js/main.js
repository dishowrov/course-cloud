// Responsive Navbar starts
const responsiveMenu = document.querySelector(".header-nav-mobile-box");

function openResponsiveMenu() {
  responsiveMenu.style.width = "94%";
  responsiveMenu.style.height = "94%";
}

function closeResponsiveMenu() {
  responsiveMenu.style.width = "0%";
  responsiveMenu.style.height = "0%";
}
// Responsive Navbar ends

// ==============================================================================================================

// Reviews Slider starts
$("#review-items-slider").slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  centerMode: true,
  centerPadding: 140,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: false,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});
// Reviews Slider ends

// ==============================================================================================================

// Syllabus Section Accordion starts
var syllAccordionItems = document.querySelectorAll(
  ".syllabus-accordion-item-btn"
);

var syllAccActiveItem = null;

for (var i = 0; i < syllAccordionItems.length; i++) {
  syllAccordionItems[i].addEventListener("click", function () {
    // Close the previous active item.
    if (syllAccActiveItem) {
      syllAccActiveItem.classList.remove("active");
      syllAccActiveItem.nextElementSibling.style.display = "none";

      if (syllAccActiveItem.querySelector(".fa-solid")) {
        syllAccActiveItem
          .querySelector(".fa-solid")
          .classList.remove("fa-angle-up");
        syllAccActiveItem
          .querySelector(".fa-solid")
          .classList.add("fa-angle-down");
      }
    }

    // Set the current item as the active item.
    syllAccActiveItem = this;
    this.classList.add("active");
    this.nextElementSibling.style.display = "block";

    if (this.querySelector(".fa-solid")) {
      this.querySelector(".fa-solid").classList.remove("fa-angle-down");
      this.querySelector(".fa-solid").classList.add("fa-angle-up");
    }
  });
}
// Syllabus Section Accordion ends

// ==============================================================================================================

// FAQ Section Accordion starts
var faqAccordionItems = document.querySelectorAll(".faq-item-btn");

var faqActiveItem = null;

for (var i = 0; i < faqAccordionItems.length; i++) {
  faqAccordionItems[i].addEventListener("click", function () {
    // Close the previous active item.
    if (faqActiveItem) {
      faqActiveItem.classList.remove("active");
      faqActiveItem.nextElementSibling.style.display = "none";

      if (faqActiveItem.querySelector(".fa-solid")) {
        faqActiveItem
          .querySelector(".fa-solid")
          .classList.remove("fa-angle-down");
        faqActiveItem
          .querySelector(".fa-solid")
          .classList.add("fa-angle-right");
      }
    }

    // Set the current item as the active item.
    faqActiveItem = this;
    this.classList.add("active");
    this.nextElementSibling.style.display = "block";

    if (this.querySelector(".fa-solid")) {
      this.querySelector(".fa-solid").classList.remove("fa-angle-right");
      this.querySelector(".fa-solid").classList.add("fa-angle-down");
    }
  });
}
// FAQ Section Accordion ends
