// this needs sorting, not displaying in the right order?
const reviewDisplaySection = document.getElementById("app");

// ===========================================
// connection strings
// for local testing use localhost, for deployed version use render link
// comment out the one you aren't using

const conLocal = "http://localhost:8080/reviews";
const conRender = "https://guestbook-test-rb6n.onrender.com/reviews";

//  set this variable to the connection you want to use - REMEMBER to change it when you deploying!!!!!!!!!!

const conCurrent = conRender;
// const conCurrent = conLocal;

//  ===========================================

// create a function to fetch data
// fetch() function is asynchronous
async function fetchReviews() {
  // REMEBER - fetch() by default sends a GET request
  const response = await fetch(conCurrent);
  const reviews = await response.json();
  createReviews(reviews);
}

function createReviews(reviewsArray) {
  reviewsArray.forEach((review) => {
    const div = document.createElement("div");

    console.log(review);
    const nameElement = document.createElement("p");
    const reviewElement = document.createElement("p");
    const starratingElement = document.createElement("p");

    // set the p element we made to have text from the review object
    const nameElementElement = nameElement;
    const reviewElementElement = reviewElement;
    const starratingElementElement = starratingElement;

    nameElementElement.innerText = review.name;
    reviewElementElement.innerText = review.review;
    // wrapping text and a variable in a string with so it reads x/5
    starratingElementElement.innerText = `Rating: ${review.starrating} / 5`;

    div.setAttribute("class", "reviews-container");
    div.append(nameElement, reviewElement, starratingElement);
    reviewDisplaySection.append(div);
  });
}

// call the function so it runs
fetchReviews();

//  ===========================================
const form = document.getElementById("form");

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  const data = new FormData(form);
  const userReview = Object.fromEntries(data);
  console.log(userReview);

  // Now I need to send a POST request to my server
  const response = await fetch(conCurrent, {
    // const response = await fetch(`http://localhost:8080/reviews`, {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(userReview),
  });
});

// ===========================================

// Populate content
// nameElementElement.innerText = review.name;
// reviewElementElement.innerText = review.review;
// starratingElementElement.innerText = `Rating: ${review.starrating} / 5`;
