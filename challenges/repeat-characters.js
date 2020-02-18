console.log('-- load & test repeatCharacters --');
 // step through loading & testing

// reapeat each character in a string, without changing the order
function repeatCharacters(str, repetitions) {
  
if(typeof repetitions !== 'number' || isNaN(repetitions)){
  return "repetitions must be a number";
}
return str.split("").map(x => x.repeat(repetitions)).join("");

}

// declare and evaluate test cases for repeatCharacters
const repeatCharactersTests = [
  { name: 'Test 1', args: ['aaaa', 2], expected: 'aaaaaaaa' },
  { name: 'Test 2', args: ['fast!', 3], expected: 'fffaaasssttt!!!' },
  { name: 'Test 3', args: ['They type fast!', 0], expected: '' },
  { name: 'Test 3', args: ['...', 1], expected: '...' },
  { name: 'Test 5', args: ['bbbb', NaN], expected: 'repetitions must be a number' },
  { name: 'Test 6', args: ['hi there', 'x'], expected: 'repetitions must be a number' },
];
for (let test of repeatCharactersTests) {
  const expected = test.expected;
  const actual = repeatCharacters(...test.args);
  const passing = actual === expected;
  console.assert(passing, test.name);
  test.actual = actual;
};
console.log(repeatCharactersTests);


// declare handler
function repeatCharactersHandler() {
  // step through user actions

  // read & process user input

  let userInput = prompt("enter a text")
  let numberOfRepeats = prompt("enter a number");

  const numRepeatsIsANumber = typeof numRepeats === 'number';
  console.assert(numRepeatsIsANumber, 'cast numRepeats to type "number"');

  // execute core logic
  let res = repeatCharacters(userInput,numberOfRepeats);

  // display result to user
alert("text : " + res);
  // log action for developer
  console.log('\n-- repeatCharacters --');
  // user inputs
  // result
}

// attach handler to repeatCharacters button with an event listener
document.getElementById('repeatCharacters-button').addEventListener('click', repeatCharactersHandler);




/* looking for a hint?
  - try using an early return to avoid entering the loop if repetitions isNaN
  - you can iterate through each character in a string using for ... of
  - it is possible to solve this challenge using a for loop inside a for loop
*/
