//your JS code here. If required.
const input = document.getElementById('ip');
const btn = document.getElementById('btn');
const output = document.getElementById('output');

btn.addEventListener("click", () => {
  // Create a promise to resolve the input value after 2 seconds
  new Promise((resolve) => {
    setTimeout(() => {
      const value = parseFloat(input.value); // Get the number from the input
      if (isNaN(value)) {
        output.textContent = "Please enter a valid number!";
        throw new Error("Invalid input");
      }
      output.textContent = Result: ${value};
      resolve(value);
    }, 2000);
  })
    .then((number) => {
      // Second promise: Resolve after 2 seconds with the same number
      return new Promise((resolve) => {
        setTimeout(() => {
          output.textContent = Result: ${number};
          resolve(number);
        }, 2000);
      });
    })
    .then((number) => {
      // Third promise: Multiply the number by 2
      return new Promise((resolve) => {
        setTimeout(() => {
          const result = number * 2;
          output.textContent = Result: ${result};
          resolve(result);
        }, 1000);
      });
    })
    .then((number) => {
      // Fourth promise: Subtract 3 from the number
      return new Promise((resolve) => {
        setTimeout(() => {
          const result = number - 3;
          output.textContent = Result: ${result};
          resolve(result);
        }, 1000);
      });
    })
    .then((number) => {
      // Fifth promise: Divide the number by 2
      return new Promise((resolve) => {
        setTimeout(() => {
          const result = number / 2;
          output.textContent = Result: ${result};
          resolve(result);
        }, 1000);
      });
    })
    .then((number) => {
      // Sixth promise: Add 10 to the number
      return new Promise((resolve) => {
        setTimeout(() => {
          const result = number + 10;
          output.textContent = Result: ${result};
          resolve(result);
        }, 1000);
      });
    })
    .then((finalResult) => {
      // Final step: Update the output with the final result
      output.textContent = Final Result: ${finalResult};
    })
    .catch((error) => {
      // Handle errors gracefully
      output.textContent = Error: ${error.message};
    });
});