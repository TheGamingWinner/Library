// Select elements
const pinForm = document.getElementById('pinForm');
const pinInput = document.getElementById('pin');

// Correct PIN (You can change this to your actual PIN)
const correctPin = '2005';

// Handle form submission for PIN verification
pinForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const enteredPin = pinInput.value;

    if (enteredPin === correctPin) {
        // Redirect to admin page and show welcome message
        window.location.href = 'admin.html';
        alert('Welcome, Admin!');
    } else {
        // Redirect to main page if PIN is incorrect
        window.location.href = 'index.html';
        alert('Incorrect PIN. You are not an admin.');
    }
    
    console.log('Form submitted!'); 

});
