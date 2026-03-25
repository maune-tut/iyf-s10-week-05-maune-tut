# Week 5: DOM Manipulation 

## Author
- **Name:** Nyamal Maune 
- **GitHub:** [@maune-tut](https://github.com/maune-tut/iyf-s10-week-05-maune-tut)
- **Date:** March 25, 2026

## Project Description
A dynamic To-Do List application built for the IYF Weekend Academy. This project focuses on using JavaScript to interact with HTML elements, allowing users to manage tasks in real-time without refreshing the page.

## Technologies Used
- HTML5
- CSS3
- JavaScript
- Git & GitHub

## Features
- **Add Tasks:** Users can type a task into the input field and add it to the list.
- **Toggle Completion:** Clicking a task text toggles a "completed" state with a line-through style.
- **Remove Tasks:** Each task has a dedicated "Remove" button to delete it from the DOM.
- **Input Validation:** Prevents adding empty tasks with an alert.

## How to Run
1. Clone this repository: `git clone https://github.com/maune-tut/iyf-s10-week-05-maune-tut.git`
2. Open `index.html` in your browser.

## Lessons Learned
I learned how to use `document.getElementById` to select elements and how to use `addEventListener` to trigger functions. I also practiced creating new elements dynamically using `document.createElement` and appending them to the parent list.

## Challenges Faced
A major challenge was preventing the "Toggle" function from firing when the "Remove" button was clicked. I solved this by using `e.stopPropagation()` in the delete button's event handler to stop the click event from bubbling up to the list item.

## Screenshots
!![To-Do List Matcha Strawberry Preview](matcha-strawberry-preview.jpg)