# Guest Book (Express + Vite)

# REFLECTION

For what looked like a straightforward assignment, I again went dow some rabbit holes.

The database connection to the supabase DB went ok.

But pulling and displaying the reviews info was harder than it should have been.
e.g.
One missing '}' near the top of my CSS broke my layout and I (again) wasted wayyy to much time chasing it down.

I had issues with unwanted columns overlaps & padding, went round in cirlces on the layout and duplicated blocks of CSS more than once.

I think I rebuilt the the CSS file more than 3 times from scratch!
In the end, time constaints made me settle on something very basic. with more time I would have made this a lot more prettier.

# OVERVIEW of SITE

🏨 Hotel Angus Reviews

A simple web application that allows guests to leave reviews for Hotel Angus. The app displays reviews in styled cards with star ratings, lets visitors submit new reviews, and (optionally) delete entries from the database.

The frontend is built with HTML, CSS, and JavaScript, and it connects to a backend API for storing and retrieving reviews.

✨ Features

Sticky Header:
The title Hotel Angus Reviews is always visible when scrolling.

Two-Column Layout:
Left column: Sticky review form (name, review text, star rating).
Right column: List of review cards pulled from the backend.

Review Cards:
Each review is displayed in its own bordered card.
Shows reviewer’s name, star rating, and review text.

Form Validation:
Requires name, review text, and a star rating between 1–5.
Prevents empty submissions.

Background Image Support
page customizable background image.

# 🛠️ Tech Stack

Frontend: HTML, CSS Vanilla JavaScript

Backend: Node.js + Express.js & Vite

Database: Supabase
