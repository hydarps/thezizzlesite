// define list of words to randomly choose from
const words = ['izzle', 'dat', 'zoinks', 'golly', 'gosh', 'dandy', 'love', 'rock', 'thefuck', 'jizzle', 'the', 'moderfoken'];

// get HTML elements
const inputField = document.getElementById("input-field");
const processButton = document.getElementById("process-button");
const outputResult = document.getElementById("output-result");

// function to update output with processed input
function updateOutput() {
  const user_input = inputField.value;
  let output = "";
  for (let char of user_input) {
    if (char.toLowerCase() in "aeiou") {
      output += char + words[Math.floor(Math.random() * words.length)];
    } else {
      output += char;
    }
  }
  outputResult.innerText = output;
}

