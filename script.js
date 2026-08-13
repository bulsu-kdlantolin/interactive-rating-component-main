const ratingForm = document.querySelector("#rating-form") || document.querySelector("#main-container");
const ratingButtons = document.querySelectorAll(".rating-buttons button");
const thankYouContainer = document.querySelector("#thank-you-container");
const ratingDisplay = document.querySelector("#rating");

let selectedRating = null;

ratingButtons.forEach((button) => {
    button.addEventListener("click", () => {
        ratingButtons.forEach((btn) => btn.classList.remove("active"));
        
        button.classList.add("active");
        
        selectedRating = button.dataset.rating || button.textContent;
    });
});

ratingForm.addEventListener("submit", (e) => {
    e.preventDefault();

    if (selectedRating) {
        ratingDisplay.textContent = selectedRating;
        thankYouContainer.classList.remove("hidden");
        ratingForm.classList.add("hidden");
    }
});