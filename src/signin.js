document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('loginForm');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');
    const cancelButton = document.getElementById('cancelButton');

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        let valid = true;
        let errorMessage = '';

        // Validate email
        const emailValue = emailInput.value.trim();
        if (!validateEmail(emailValue)) {
            emailError.classList.remove('hidden');
            valid = false;
            errorMessage += 'Please enter a valid email address.\n';
        } else {
            emailError.classList.add('hidden');
        }

        // Validate password
        const passwordValue = passwordInput.value.trim();
        if (passwordValue === '') {
            passwordError.classList.remove('hidden');
            valid = false;
            errorMessage += 'Please enter your password.\n';
        } else {
            passwordError.classList.add('hidden');
        }

        if (valid) {
            // Simulate successful login (in a real application, you'd verify credentials here)
            sessionStorage.setItem('isLoggedIn', 'true');
            window.location.href = 'welcome.html'; // Redirect to welcome page
        } else {
            alert(errorMessage);
        }
    });

    cancelButton.addEventListener('click', () => {
        window.location.href = '/';
    });

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }
});
