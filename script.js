//your JS code here. If required.
// Select DOM elements
const btn = document.getElementById('btn');
const input = document.getElementById('ip');
const output = document.getElementById('output');

// Function to create a promise that resolves after a delay
function createPromise(value, delay) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(value);
    }, delay);
  });
}

// Event listener for button click
btn.addEventListener('click', () => {
  // Get the number from the input field
  const inputNumber = Number(input.value);

  if (isNaN(inputNumber)) {
    output.textContent = 'Please enter a valid number';
    return;
  }

  // First promise: resolves after 2 seconds and displays the initial number
  createPromise(inputNumber, 2000)
    .then((number) => {
      output.textContent = `Result: ${number}`;
      return createPromise(number * 2, 1000);  // Multiply by 2 after 1 second
    })
    .then((number) => {
      output.textContent = `Result: ${number}`;
      return createPromise(number - 3, 1000);  // Subtract 3 after 1 second
    })
    .then((number) => {
      output.textContent = `Result: ${number}`;
      return createPromise(number / 2, 1000);  // Divide by 2 after 1 second
    })
    .then((number) => {
      output.textContent = `Result: ${number}`;
      return createPromise(number + 10, 1000);  // Add 10 after 1 second
    })
    .then((number) => {
      output.textContent = `Final Result: ${number}`;  // Final result after all operations
    })
    .catch((error) => {
      output.textContent = 'An error occurred: ' + error.message;
    });
});
