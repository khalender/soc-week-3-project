console.log("-- load & test replaceSubstring --");
// step through loading & testing

// replace every occurrence of a substring with a new value
function replaceSubstring(str, oldThing, newThing) {
  oldThing = oldThing
    .split("")
    .map(d =>
      (d === "." || d === "|" || d === "+" || d === "*") ? "\\" + d : d )
    .join("");

  let r = new RegExp(oldThing, "g");
  return str.replace(r, newThing);
}

// declare and evaluate test cases for replaceSubstring
const replaceSubstringTests = [
  { name: "Test 1", args: ["aaaa", "a", "b"], expected: "bbbb" },
  {
    name: "Test 2",
    args: ["They type fast!", "type", "talk"],
    expected: "They talk fast!"
  },
  {
    name: "Test 3",
    args: ["They type fast!", "pe fa", ""],
    expected: "They tyst!"
  },
  { name: "Test 4", args: ["bbbb", "1", "2"], expected: "bbbb" },
  { name: "Test 5", args: ["", "x", "y"], expected: "" },
  { name: "Test 6", args: ["..|..|..", "|.", ","], expected: "..,.,." },
  {
    name: "Test 7",
    args: ["Brussels, Belgium", "Brussels, Belgium", "Ghent, Flanders"],
    expected: "Ghent, Flanders"
  }
];
for (let test of replaceSubstringTests) {
  const expected = test.expected;
  const actual = replaceSubstring(...test.args);
  const passing = actual === expected;
  console.assert(passing, test.name);
  test.actual = actual;
}
console.log(replaceSubstringTests);

// declare handler
function replaceSubstringHandler() {
  // step through user actions

  // read & process user input
  let inputs = getUserInputs();
  // execute core logic
  let replacedText = replaceSubstring(
    inputs.userInput,
    inputs.find,
    inputs.replace
  );

  // display result to user
  alert("text is changed to : " + replacedText);
  // log action for developer
  console.log("\n-- replaceSubstring --");
  // user inputs
}
function getUserInputs() {
  let userInput = prompt("enter a text");
  let find = prompt("enter the text to be replaced");
  let replace = prompt("enter the word replace to");

  return { userInput: userInput, find: find, replace: replace };
  // result
}

// attach handler to replaceSubstring button with an event listener
document
  .getElementById("replaceSubstring-button")
  .addEventListener("click", replaceSubstringHandler);

/* looking for a hint?
  too bad!  no hints for this challenge
*/
