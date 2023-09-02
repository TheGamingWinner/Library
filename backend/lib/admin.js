// admin.js (Admin Mode)
const verifyPinButton = document.getElementById('verifyPin');

verifyPinButton.addEventListener('click', () => {
    const enteredPin = document.getElementById('pin').value;
    
    // Check if the entered PIN is correct (e.g., 2005)
    if (enteredPin === '2005') {
        // Redirect to the Admin Dashboard (adminDashboard.html)
        window.location.href = 'adminDashboard.html';
    } else {
        // Redirect back to the Main Page with a popup
        alert('You are not an admin.');
        window.location.href = 'index.html';
    }
});
