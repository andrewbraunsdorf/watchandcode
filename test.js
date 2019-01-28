//used functions in the console of chrome

function logThis() {
  console.log(this);
}


logThis.bind();
logThis.apply({name: "andrew"});
logThis.call({name: "andrew"});

var explicitlySetLogThis = logThis.bind({name: "andrew"});

logThisWithArguments("hi", "Andrew");
logThisWithArguments.apply({name: "Andrew"}, ["hi", "Andrew"]);;

logThisWithArguments.call({name: "Andrew"}, "hi", "Andrew");




var explicitlySetLogThis = logThis.bind({name: 'Andrew'});

explicitlySetLogThis(); // {name: 'Gordon'}

// Note that a function returned from .bind (like `boundOnce` below),
// cannot be bound to a different `this` value ever again.
// In other words, functions can only be bound once.
var boundOnce = logThis.bind({name: 'The first time is forever'});

// These attempts to change `this` are futile.
boundOnce.bind({name: 'why even try?'})();
boundOnce.apply({name: 'why even try?'});
boundOnce.call({name: 'why even try?'});

// function Person(name) {
// 	//this = {}
//   this.name = name;
//   //return this
// }

// new Person("andrew2");
// var andrew = new Person('andrew');
// console.log(andrew); // {name: 'andrew'}

// var myObject = {
//   myMethod: function() {
//    console.log(this);
//   }
// };

// myObject.myMethod(); // myObject




// function logThis() {
//   console.log(this);
// }
// logThis(); // window



// function multiplyTwoNumbers(a, b){
// 	return a * b;
// }
// var theProductOf2And10 = multiplyTwoNumbers(2,10)
// console.log(theProductOf2And10);

// var tutorialsElement = $0;
// tutorialsElement.addEventListener("", function() {
// 	console.log(event);
// 	console.log("The tutorials element was clicked!");
// });


// var students = ["jonathan", "jenny", "elliot"];
// function logName(name) {
// 	console.log(name)
// }
// for (var i=0; i< students.length; i++) {
// 	logName(students[i]);
// }
// students.forEach(logName);
// students.forEach(function logName(name) {
// 	console.log(name);
// });

// function forEach(myArray, myFunction) {
// 	for (var i=0; i < myArray.length; i++) {
// 		myFunction(myArray[i]);
// 	}
// }
// forEach(students, function(student) {
// 	console.log(student);
// });


// function logTenNumbers() {
// for (var i=0; i < 10; i++) {
// 	console.log(i);
// }
// };
// setTimeout(function() {
// 	console.log("Wake up Andrew!");
// }, 2000);

// var myHouse1 = {color: "blue"};
// var myHouse2 = {color: "blue"};
// myHouse2.color = "red";

//myHouse1.color would equal blue.
//myHouse2.color would equal red.

// var myHouse1 = {color: "blue"};
// var myHouse2 = myHouse1;
// myHouse2.color = "red";

// //myHouse1.color would equal red.
// //myHouse2.color would equal red.

// var myHouse = {color: "blue"};
// var color = myHouse.color;
// color = "red";
// //myhouse.color would equal blue.


//my house will be blue but stored in Memory address 1.  myHouse.color will go to myHouse and the memory address and then change the color.

// var myPrimitive = 10;
// var myObject = {name: "gordon"};
// // memory address is stored in myObject

// // i = 0				// initialization
// // say "hey" if i <3		// condition
// // Increase i by 1		// final-expression

// // 0 "hey"
// // 1 "hey"
// // 2 "hey"
// // 3

// //(i = i +1) = i++

// // for (initialization, condition, final-expression){
// // 	console.log("hey");
// // }

// var testArray =["item 1", "item 2", "item 3", "extra item"];
// for (var i = 0; i < testArray.length; i++){
// 	console.log(testArray[i]);
// }

