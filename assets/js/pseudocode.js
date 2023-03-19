// DOM Manipulation \\

// If you haven't already, please copy down
// both branches from the DOM Study Site's repo.
// Here is a link: https://github.com/404pandas/dom-manipulation

// It's very important you copy down the unsolved branch
// and the solved branch to compare if you get stuck.
// By the end of this activity, you will have created a
// duplicate version of the tree shown on the unsolved branch's
// live site.

// To view the unsolved site, click the following link:
// https://FUTURE-DEVELOPMEMT

// To view the solved site, click the following link:
// https://404pandas.github.io/dom-manipulation/

// Starting the Project
// The best way to start any Javascript
// file is to create the pseudocode. Write out
// comments for every query selector, variable,
// and function that you know you will need.

// For the query selectors, we'll create one
// for the div that holds the first tree and
// one for the button to run this script
const firstTree = document.getElementById("treeContainer1");
const startButton = document.getElementById("startButton");
let container = document.createElement("div");
let p = document.createElement("p");
let a = document.createElement("a");
let li = document.createElement("li");
let ul = document.createElement("ul");
// Now, we can use any javascript method
// on these elements by using their variable

// The end result of this activity will be similar
// to the tree contained in <div class="tree>" on line 63
// But we will add styling and animation to it!
// This will get you practice with Materialize.css,
// a css framework that can be used on Project 1

// insertAdjacentElement() Method \\
// https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement

// Let's begin by creating the first node.
// Using the MDN link for reference, create a div
// adjacent to the first tree container to hold the
// second tree we will create.

// First, target where you would like to create the div
// using the getElementById() variables we already created.

function createTree() {
  // MDN LINK
  //   Step 1- use the after() method to create
  // the div that will hold our tree. Set it to a variable.
  var treeContainer2 = firstTree.after(container);
  // By assigning this div to a variable, we can target
  // it later anywhere in our function.

  // Step 2- give this new div classes for styling
  // using one of the following two Javascript methods:
  // The classname() Javascript Method
  // https://developer.mozilla.org/en-US/docs/Web/API/Element/className
  treeContainer2.className = "tree treeContainer2";
  // The setAttribute() Javascript Method
  // https://developer.mozilla.org/en-US/docs/Web/API/Element/setAttribute
  // Remember- You need to getAttribute() before you can setAttribute()
  treeContainer2.setClass
    .getAttribute("class")
    .setAttribute("class", "cards flexbox width90");
}
// I have already created  classes in style.css for this activity
//   Apply these classes: tree treeContainer2 cards flexbox width90

// Now, if you inspect the html in the browser
// you will see the div created when you click on
// the Start Javascript button! See the eventListener
//   for this click event at the bottom for functionality!

function createParent() {
  var treeContainer2 = getElementsByClassName(
    "tree treeContainer2 cards flexbox width90"
  );
  let parentNode = treeContainer2.createElement("ul");
  parentNode.className = "parentRow width90";
  console.log(`The current node looks like this:` + parentNode);
}

// Let's now use the appendChild() Method to create
// the children nodes for our tree, using MDN for reference

// appendChild() Method \\
// https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild
// Now we will use appenChild() to create the children node

function appendChildren() {
  // Set the treeContainer2 to a variable for this function
  const parentNode = treeContainer2;
  // Create an array of children for how many you would
  // like to create. We will add more later. We'll say 2.
  var children = ["child1", "child2"];
  //   Now, using a For Loop, let's look through the array to
  // create the children nodes.
  for (var i = 0; i < text.length; i += 1) {
    var li = parentNode.createElement("li");
    var child = li.appendChild(document.createElement("a"));
    var p1 = child.appendChild(document.createElement("p"));
    var p2 = p1.insertAdjacentElement(document.createElement("p"));
    div.className = "finalBlock";
    div.innerHTML = text[i];
    document.body.appendChild(li);
  }
  // Now, if you inspect the html
  // You will see the items appended when
  // you hit the Start Javascript button!

  // setAttribute Method \\
  // Reminder! Arrays start at 0! \\
}

// Let's also create a function that erases the tree
// after a certain amount of time has passed. Since
// the second function runs after the first function,
// let's make that timeout after a longer period of time
function eraseTree() {
  setTimeout(createTree, 30000);
  setTimeout(appendChildren, 60000);
}

// Next, add any event listeners needed for your script
// This is an event listener that will start the functions
// on button click. We'll add any functions we build to this.
startButton.addEventListener("click", init);
startButton.textContent = `Javascript Started!`;
function init() {
  let createTreePromise = createTree();
  let createParentPromise = createParent();
  let appendChildrenPromise = appendChildren();
  let eraseTreePromise = eraseTree();
  createTreePromise.then(successCallback, failureCallback);
  createParentPromise.then(successCallback, failureCallback);
  appendChildrenPromise.then(successCallback, failureCallback);
  eraseTreePromise.then(successCallback, failureCallback);
}

// Create success Callback
function successCallback(result) {
  console.log(`Function finished!`);
}
// Create failure Callback
function failureCallback(error) {
  console.error(`Function failed: ${error}`);
}

// Coding Interview Practice! \\
// How do we check if a string is a Palindrome?

// For reference- Palindromes are words that
// are spelled the same forwards and backwards!

// Example phrase: "Oozy rat in a sanitary zoo"

// STEP 1 \\
// Create a variable with the phrase!
// Then, console.log to see the change!

// STEP 2 \\
// Convert the string into all lowerCase or upperCase letters!
// Then, console.log to see the change!

// STEP 3 \\
// Replace all spaces with an empty string

// Question:

// Now we can utilize each variable from our JS
// magic anywhere in our code! How neat is that?!

// You can see where Javascript comes in handy when you use larger sets of data,
// like a longer Palindrome! Replace the phrase in line 50 with a bigger one.
// Example: This is a VERY large Palindrome that will not make sense when we reverse
// it but it is just for an example
