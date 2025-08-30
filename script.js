const screen = document.getElementById('screen');
let currentInput = '0';

// Handle button clicks
document.querySelectorAll('.calc-button, .calc-button-triple, .double').forEach(button => {
    button.addEventListener('click', () => {
        const value = button.dataset.value;
        const action = button.dataset.action;

        if (action === 'clear') {
            currentInput = '0';
        } 
        else if (action === 'backspace') {
            currentInput = currentInput.slice(0, -1) || '0';
        } 
        else if (action === 'calculate') {
            try {
                currentInput = eval(currentInput).toString();
            } catch {
                currentInput = 'Error';
            }
        } 
        else {
            if (currentInput === '0') {
                currentInput = value;
            } else {
                currentInput += value;
            }
        }
        updateScreen();
    });
});

// Keyboard support
document.addEventListener('keydown', (e) => {
    if (!isNaN(e.key) || ['+', '-', '*', '/'].includes(e.key)) {
        if (currentInput === '0') {
            currentInput = e.key;
        } else {
            currentInput += e.key;
        }
    } 
    else if (e.key === 'Enter') {
        try {
            currentInput = eval(currentInput).toString();
        } catch {
            currentInput = 'Error';
        }
    } 
    else if (e.key === 'Backspace') {
        currentInput = currentInput.slice(0, -1) || '0';
    } 
    else if (e.key.toLowerCase() === 'c') {
        currentInput = '0';
    }
    updateScreen();
});

function updateScreen() {
    screen.textContent = currentInput;
}
