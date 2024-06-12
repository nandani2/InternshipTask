document.addEventListener('DOMContentLoaded', () => {
    const logoutButton = document.getElementById('logoutButton');

    // Function to check if user is logged in
    function checkLoginStatus() {
        const isLoggedIn = sessionStorage.getItem('isLoggedIn');
        if (!isLoggedIn) {
            window.location.href = 'signin.html'; // Redirect to sign-in page if not logged in
        }
    }

    // Check login status on page load
    checkLoginStatus();

    // Handle logout
    logoutButton.addEventListener('click', () => {
        sessionStorage.removeItem('isLoggedIn'); // Clear login status
        window.location.href = 'signin.html'; // Redirect to sign-in page
    });
});
