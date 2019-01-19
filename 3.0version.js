
var todoList = {
	todos: ["item 1", "item 2", "item 3"],
	displayTodos: function(){
		console.log("My Todos:", this.todos);
	},
	addTodo: function(todo) {
		this.todos.push(todo);
		this.displayTodos();
	}
};

// function addTodo(todo) {
// 	todos.push(todo);
// 	displayTodos();
// }

// var andrew = {
// 	name: "Andrew",
// 	sayName: function(){
// 		console.log(this.name);
// 	}
// };
// andrew.sayName();


// var myComputer = {
// 	operatingSystem: "mac",
// 	screenSize: "15 inches",
// 	purchaseYear: 2011
// };
// myComputer.operatingSystem;
