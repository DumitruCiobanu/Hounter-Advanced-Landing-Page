// Cookie Banner functionality
const closeButton = document.querySelector(".cookie-banner__btn-close-cookie");
const cookieBanner = document.querySelector(".cookie-container");

const hideCookieBanner = () => {
  cookieBanner.style.display = "none";
};

closeButton.addEventListener("click", hideCookieBanner);

// Hero section slider
document.addEventListener("DOMContentLoaded", () => {
  const statsContainer = document.querySelector(".stats");
  const statsItems = document.querySelectorAll(".stats__item");
  const itemWidth = statsItems[1].offsetWidth + 16; // Adjust this value if needed
  const paginationDots = document.querySelectorAll(".pagination .hero-dot");
  let currentSlide = 0;

  const centerItem = (index) => {
    statsContainer.style.transition = "transform 0.4s ease";
    statsContainer.style.transform = `translateX(${-(index * itemWidth)}px)`;
    currentSlide = index;
    updatePagination(index);
  };

  const handleKey = (event) => {
    const next =
      currentSlide +
      (event.key === "ArrowLeft" ? -1 : event.key === "ArrowRight" ? 1 : 0);
    if (next >= 0 && next < statsItems.length) centerItem(next);
  };

  const handleClick = (event) =>
    centerItem([...statsItems].indexOf(event.currentTarget));

  const updatePagination = (index) => {
    paginationDots.forEach((dot, i) => {
      if (i === index) {
        dot.classList.add("active");
        dot.style.fill = "rgb(98, 102, 135)";
      } else {
        dot.classList.remove("active");
        dot.style.fill = ""; // Reset other dot colors
      }
    });
  };

  document.addEventListener("keydown", handleKey);
  centerItem(currentSlide);
  statsItems.forEach((item) => item.addEventListener("click", handleClick));

  paginationDots.forEach((dot, index) => {
    dot.addEventListener("click", () => centerItem(index));
  });
});

// Featured House section slider

const slider = document.querySelector(".houses-slider");
const cards = document.querySelectorAll(".house-card");
const prevBtn = document.querySelector(".slider-btns__left");
const nextBtn = document.querySelector(".slider-btns__right");
let currentCardIndex = 0;

function updateSlider() {
  const cardWidth = cards[currentCardIndex].offsetLeft;
  slider.style.transform = `translateX(-${cardWidth}px)`;
}

function showPrevCard() {
  currentCardIndex--;
  if (currentCardIndex < 0) {
    currentCardIndex = cards.length - 1;
  }
  updateSlider();
}

function showNextCard() {
  currentCardIndex++;
  if (currentCardIndex === cards.length) {
    currentCardIndex = 0;
  }
  updateSlider();
}

prevBtn.addEventListener("click", showPrevCard);
nextBtn.addEventListener("click", showNextCard);

document.addEventListener("keydown", (event) => {
  if (event.code === "ArrowLeft") {
    showPrevCard();
  } else if (event.code === "ArrowRight") {
    showNextCard();
  }
});

/////////////////////////////////////////////////////////////////////

// Testimonials slider logic

//CARD CLICKS, PAGINATION CLICKS, ARROW KEYS PRESSES, AND PAGINATION ACTIVE STATES
document.addEventListener("DOMContentLoaded", () => {
  const slider = document.querySelector(".reviews-slider");
  const cards = document.querySelectorAll(".review-card");
  const cardWidth = cards[0].offsetWidth + 32;
  const paginationDots = document.querySelectorAll(".pagination .dot");
  let currentSlide = Math.floor(cards.length / 2);

  const centerCard = (index) => {
    slider.style.transition = "transform 0.6s ease";
    slider.style.transform = `translateX(${
      -(index * cardWidth) + (slider.offsetWidth / 2 - cardWidth / 2)
    }px)`;
    currentSlide = index;
    updatePagination(index);
  };

  const handleKey = (event) => {
    const next =
      currentSlide +
      (event.key === "ArrowLeft" ? -1 : event.key === "ArrowRight" ? 1 : 0);
    if (next >= 0 && next < cards.length) centerCard(next);
  };

  const handleClick = (event) =>
    centerCard([...cards].indexOf(event.currentTarget));

  const updatePagination = (index) => {
    paginationDots.forEach((dot, i) => {
      if (i === index) {
        dot.classList.add("active");
        dot.style.fill = "rgb(98, 102, 135)";
      } else {
        dot.classList.remove("active");
        dot.style.fill = ""; // Reset other dot colors
      }
    });
  };

  document.addEventListener("keydown", handleKey);
  centerCard(currentSlide);
  cards.forEach((card) => card.addEventListener("click", handleClick));

  paginationDots.forEach((dot, index) => {
    dot.addEventListener("click", () => centerCard(index));
  });
});

/////////////////////////////////////////////////////////////////

// Article Swapping Logic
const articleSmallElements = document.querySelectorAll(".article-small");
const articleLargeElement = document.querySelector(".article-large");
let previousArticleSmallContent = null;

articleSmallElements.forEach((articleSmall) => {
  articleSmall.addEventListener("click", () => {
    const clickedArticleSmallContent = articleSmall.innerHTML;
    const currentArticleLargeContent = articleLargeElement.innerHTML;

    // Swap content of large and clicked small articles
    articleLargeElement.innerHTML = clickedArticleSmallContent;
    articleSmall.innerHTML = currentArticleLargeContent;

    // Swap font classes for titles
    const articleLargeTitle = articleLargeElement.querySelector(
      ".info__heading__title"
    );
    const articleSmallTitle = articleSmall.querySelector(
      ".info__heading__title"
    );

    articleLargeTitle.classList.remove("font-subtitle");
    articleLargeTitle.classList.add("font-heading-3");
    articleSmallTitle.classList.remove("font-heading-3");
    articleSmallTitle.classList.add("font-subtitle");

    // Store the current small article content for future swaps
    previousArticleSmallContent = clickedArticleSmallContent;
  });
});

// Show More Articles Logic
document.addEventListener("DOMContentLoaded", function () {
  const showMoreButton = document.getElementById("showMoreBtn");
  const hiddenArticles = document.querySelectorAll(".article-small.hidden");

  showMoreButton.addEventListener("click", function () {
    for (let i = 0; i < 3; i++) {
      if (hiddenArticles.length > 0) {
        hiddenArticles[i].style.display = "flex";
        hiddenArticles[i].classList.remove("hidden");
      }
    }

    if (document.querySelectorAll(".article-small.hidden").length === 0) {
      showMoreButton.style.display = "none";
    }
  });
});

/////////////////////////////////////////////////////////////////

// Form dropdown functionality

// Get references to the elements
const dropdownBtn = document.querySelector(".dropdown-btn__icon");
const selectElement = document.getElementById("education");
const dropdown = document.querySelector(".dropdown");

// Function to toggle dropdown display and update button focus style
function toggleDropdown() {
  if (dropdown.style.display === "none" || dropdown.style.display === "") {
    dropdown.style.display = "flex";
    dropdownBtn.style.transform = "rotateX(180deg)"; // Rotate the arrow
  } else {
    dropdown.style.display = "none";
    dropdownBtn.style.transform = ""; // Reset to default arrow style when hiding dropdown
  }
}

// Event listener for the dropdown button
dropdownBtn.addEventListener("click", function (event) {
  event.stopPropagation(); // Prevent click propagation to document

  if (dropdown.style.display === "flex") {
    dropdown.style.display = "none";
    dropdownBtn.style.transform = ""; // Reset to default style when hiding dropdown
  } else {
    toggleDropdown();
  }
});

// Event listener for the select element
selectElement.addEventListener("click", toggleDropdown);

// Event listener to hide dropdown when clicking outside
document.addEventListener("click", function (event) {
  const targetElement = event.target;

  // Check if the clicked element is not within the dropdown
  if (
    !dropdown.contains(targetElement) &&
    targetElement !== dropdownBtn &&
    targetElement !== selectElement
  ) {
    dropdown.style.display = "none";
    dropdownBtn.style.transform = ""; // Reset to default style when hiding dropdown
  }
});

// Get all the p elements inside the dropdown
const dropdownOptions = document.querySelectorAll(".dropdown__options__item");

// Function to handle clicking on the dropdown options
function handleDropdownOptionClick(event) {
  const clickedOption = event.target;
  const optionValue = clickedOption.dataset.value;
  const optionText = clickedOption.textContent;

  // Set the select input's placeholder and value based on the clicked option
  selectElement.placeholder = optionText;
  selectElement.value = optionValue;

  // Change the placeholder color (modify this line with your desired color)
  selectElement.style.color = "rgb(27, 28, 87)";

  // Hide the dropdown
  dropdown.style.display = "none";
  dropdownBtn.style.transform = ""; // Reset to default style when hiding dropdown
}

// Loop through each dropdown option and add a click event listener
dropdownOptions.forEach(function (option) {
  option.addEventListener("click", function (event) {
    // When a dropdown option is clicked, update select input and hide the dropdown
    handleDropdownOptionClick(event);
  });
});

/////////////////////////////////////////////////////////////////

// Form textarea charCount functionality
const textarea = document.getElementById("textarea");
const characterCount = document.getElementById("charCount");

textarea.addEventListener("input", function () {
  const text = textarea.value;
  const maxLength = textarea.getAttribute("maxlength");
  const remaining = maxLength - text.length;
  characterCount.textContent = `${text.length}/${maxLength}`;

  if (remaining === 0) {
    characterCount.style.color = "rgb(239, 68, 68)";
  } else {
    // Reset color to default when characters are within the limit
    characterCount.style.color = "";
  }
});
