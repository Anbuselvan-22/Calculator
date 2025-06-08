const display = document.querySelector('.show-res');
const buttons = document.querySelectorAll('button');

let currentInput = '';
let resultDisplayed = false;

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent.trim();

        if (value === 'AC') {
            currentInput = '';
            display.textContent = '0';
            resultDisplayed = false;
        } else if (value === '=') {
            try {
                const replacedInput = currentInput.replace(/÷/g, '/').replace(/X/g, '*');
                const result = eval(replacedInput);
                display.textContent = result;
                currentInput = result.toString();
                resultDisplayed = true;
            } catch {
                display.textContent = 'Error';
                currentInput = '';
            }
        } else {
            if (resultDisplayed && !isNaN(value)) {
                currentInput = value;
                resultDisplayed = false;
            } else {
                currentInput += value;
            }
            display.textContent = currentInput;
        }
    });
});
