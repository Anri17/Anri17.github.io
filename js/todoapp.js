"use strict"

let tasks = [];

const todo_form = document.querySelector("#todo-form");
const todo_form_input_title = document.querySelector("#todo-form-input-title");
const todo_form_input_submit = document.querySelector("#todo-form-input-submit");

todo_form.addEventListener("submit", e =>
{
	e.preventDefault();
	console.log("I like trains...");

	let task = {
		"title": todo_form_input_title.value,
		"isChecked": false,
		"date": new Date()
	};
})

window.onload = () =>
{
	tasks = tasks_load();
	// display loaded tasks by creating the html needed for it

	// get the data from the form, created date and if it's checked

	// build list item in HTML with a label and a checkbox
	// set event listener to the list item's checkbrox for being checked off or not
	// save data in an object with title, isChecked and createdDate 
}

function tasks_load()
{
	return JSON.parse(localStorage.getItem("TODOTASTKS"));
}

function tasks_save(tasks)
{
	localStorage.setItem("TODOTASKS", JSON.stringify(tasks));
}