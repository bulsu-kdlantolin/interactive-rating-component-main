# Frontend Mentor - Interactive rating component solution

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [AI Collaboration](#ai-collaboration)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

### Links

- Solution URL: [https://www.frontendmentor.io/solutions/interactive-rating-component-with-form-submission-and-state-toggle-B2k9](https://www.frontendmentor.io/solutions/interactive-rating-component-with-form-submission-and-state-toggle-B2k9)
- Live Site URL: [https://bulsu-kdlantolin.github.io/interactive-rating-component/](https://bulsu-kdlantolin.github.io/interactive-rating-component/)

## My process

### Built with

- Semantic HTML5 markup (including form controls and ARIA attributes)
- CSS custom properties (Variables)
- Flexbox layout engine
- Mobile-first responsive workflow
- Vanilla JavaScript (Event listeners, DOM manipulation, form submit handling)

### What I learned

In this project, I focused on managing active component states and seamless view switching upon form submission. I structured the rating interface as a semantic `<form>` element to leverage standard form submit behavior while preventing page reloads with `e.preventDefault()`:

```html
<form class="main-container" id="rating-form" novalidate>
  <div class="star-icon-wrapper">
    <img src="./images/icon-star.svg" alt="" aria-hidden="true">
  </div>
  
  <h1>How did we do?</h1>
  <p>Please let us know how we did with your support request...</p>  
  
  <div class="rating-buttons" role="group" aria-label="Rating options from 1 to 5">
    <button type="button" class="rating-btn" data-rating="1">1</button>
    <button type="button" class="rating-btn" data-rating="2">2</button>
    <button type="button" class="rating-btn" data-rating="3">3</button>
    <button type="button" class="rating-btn" data-rating="4">4</button>
    <button type="button" class="rating-btn" data-rating="5">5</button>
  </div>

  <button type="submit" class="submit-button" id="submit-button">Submit</button>
</form>
```
```javascript
const ratingButtons = document.querySelectorAll(".rating-buttons button");
const submitButton = document.querySelector("#submit-button");
const mainContainer = document.querySelector("#rating-form");
const thankYouContainer = document.querySelector("#thank-you-container");
const rating = document.querySelector("#rating");

let isRatingSelected = false;

ratingButtons.forEach((button) => {
  button.addEventListener("click", () => {
    ratingButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");
    rating.textContent = button.dataset.rating || button.textContent;
    isRatingSelected = true;
  });
});

mainContainer.addEventListener("submit", (e) => {
  e.preventDefault();
  if (isRatingSelected) {
    thankYouContainer.classList.remove("hidden");
    mainContainer.classList.add("hidden");
  }
});
```
```css
.rating-buttons button {
  border: none;
  background-color: var(--Grey-900);
  width: 2.625rem;
  height: 2.625rem;
  border-radius: 50%;
  cursor: pointer;
  color: var(--Grey-500);
  font-weight: 700;
  transition: background-color 0.2s ease, color 0.2s ease;
}
```
### Continued development
In future challenges, I plan to explore radio inputs (<input type="radio">) for rating components to make keyboard focus management and screen reader support completely native out of the box.

### AI Collaboration
Tools Used: Gemini

Usage Strategy: Assisted in refining form submit event handling (e.preventDefault()), improving WCAG color contrast ratios for footer links, and auditing HTML markup for accessibility attributes.

## Author
Frontend Mentor - @bulsu-kdlantolin