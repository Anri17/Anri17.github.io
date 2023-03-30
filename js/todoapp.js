"use strict"

let tasks = [];

const todo_list = document.querySelector("#todo-list");
const todo_form = document.querySelector("#todo-form");
const todo_form_input_title = document.querySelector("#todo-form-input-title");
const todo_form_input_submit = document.querySelector("#todo-form-input-submit");

todo_form.addEventListener("submit", e =>
{
	// Create Task
	e.preventDefault();
	let task = {
		"title": todo_form_input_title.value,
		"checked": false,
		"date": new Date()
	};
	tasks.push(task);

	// create HTML
	let list_item = document.createElement("li");
	let list_checkbox = document.createElement("input");
	let list_label = document.createElement("label");
	list_checkbox.type = "checkbox";
	list_checkbox.checked = task.checked;

	list_checkbox.addEventListener("onclick", () =>
	{
		task.checked = list_checkbox.checked;
		tasks_save(tasks);
	});

	list_label.innerHTML = task.title;
	list_label.append(list_checkbox);

	list_item.append(list_label);
	todo_list.append(list_item);
	// TODO: Reference the other project
	
	tasks_save(tasks);

});

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
	// probably not working
	let list = JSON.parse(localStorage.getItem("TODOTASTKS"));
	if (list != null) return list;
	else return [];
}

function tasks_save(tasks)
{
	// probably not working
	localStorage.setItem("TODOTASKS", JSON.stringify(tasks));
}
