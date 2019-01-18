var todos = ["item 1", "item 2", "item 3"];

function displayTodos(){
	console.log("My Todos: ", todos);
}

function addTodo(todo){
	todos.push(todo);
	displayTodos();
}


function changeTodo(position, newValue) {
	todos[position] = newValue;
	displayTodos();
}

function deleteTodo(position) {
	todos.splice(position, 1);
	displayTodos();
}

addTodo("some stuff");
displayTodos();
changeTodo(0, "changed");
deleteTodo(0);

