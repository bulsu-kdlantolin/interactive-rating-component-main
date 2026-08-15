const ratingForm = document.querySelector("#rating-form") || document.querySelector("#main-container");
const thankYouContainer = document.querySelector("#thank-you-container");
const ratingDisplay = document.querySelector("#rating");

ratingForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const selectedRating = ratingForm.querySelector("input[name='rating']:checked");

    if (!selectedRating) {
        return;
    }

    ratingDisplay.textContent = selectedRating.value;
    thankYouContainer.classList.remove("hidden");
    ratingForm.classList.add("hidden");
    thankYouContainer.focus();
});