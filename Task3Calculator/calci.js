document.addEventListener('DOMContentLoaded', function() {
    let currentInput = '';
    let operator = '';
    let firstNumber = null;
    const toDoOperartion = document.getElementById('toDoOperartion');
  
    // Helper function to update the input display
    function updateDisplay() {
      toDoOperartion.value = currentInput;
    }
  
    // Helper function to handle number button clicks
    function handleNumberClick(number) {
      currentInput += number;
      updateDisplay();
    }
  
    // Helper function to handle operator button clicks
    function handleOperatorClick(op) {
      if (firstNumber === null) {
        firstNumber = parseFloat(currentInput);
        currentInput = '';
        operator = op;
      }
    }
  
    // Clear the input
    document.getElementById('C').addEventListener('click', function() {
      currentInput = '';
      firstNumber = null;
      operator = '';
      updateDisplay();
    });
  
    // Handle percentage button
    document.getElementById('percentage').addEventListener('click', function() {
      currentInput = (parseFloat(currentInput) / 100).toString();
      updateDisplay();
    });
  
    // Handle backspace button
    document.getElementById('backspace').addEventListener('click', function() {
      currentInput = currentInput.slice(0, -1);
      updateDisplay();
    });
  
    // Handle operator buttons
    document.getElementById('divide').addEventListener('click', () => handleOperatorClick('/'));
    document.getElementById('x').addEventListener('click', () => handleOperatorClick('*'));
    document.getElementById('minus').addEventListener('click', () => handleOperatorClick('-'));
    document.getElementById('add').addEventListener('click', () => handleOperatorClick('+'));
  
    // Handle number buttons
    for (let i = 0; i <= 9; i++) {
      document.getElementById(i.toString()).addEventListener('click', () => handleNumberClick(i.toString()));
    }
  
    // Handle decimal point button
    document.getElementById('decimal').addEventListener('click', function() {
      if (!currentInput.includes('.')) {
        currentInput += '.';
        updateDisplay();
      }
    });
  
    // Handle equal button
    document.getElementById('equal').addEventListener('click', function() {
      if (operator && currentInput) {
        const secondNumber = parseFloat(currentInput);
        let result;
        switch (operator) {
          case '+':
            result = firstNumber + secondNumber;
            break;
          case '-':
            result = firstNumber - secondNumber;
            break;
          case '*':
            result = firstNumber * secondNumber;
            break;
          case '/':
            result = firstNumber / secondNumber;
            break;
        }
        toDoOperartion.value = result;
        currentInput = result.toString();
        operator = '';
        firstNumber = null;
      }
    });
  });
  