document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('signupForm');
    const usernameInput = document.getElementById('username');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirmPassword');
    const usernameError = document.getElementById('usernameError');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');
    const confirmPasswordError = document.getElementById('confirmPasswordError');
    const cancelButton = document.getElementById('cancelButton');

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        let valid = true;
        let errorMessage = '';

        // Validate username
        const usernameValue = usernameInput.value.trim();
        if (usernameValue === '') {
            usernameError.classList.remove('hidden');
            valid = false;
            errorMessage += 'Please enter a username.\n';
        } else {
            usernameError.classList.add('hidden');
        }

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
            errorMessage += 'Please enter a password.\n';
        } else if (passwordValue.length < 6) {
            passwordError.classList.remove('hidden');
            passwordError.textContent = 'Password must be at least 6 characters long.';
            valid = false;
            errorMessage += 'Password must be at least 6 characters long.\n';
        } else {
            passwordError.classList.add('hidden');
        }

        // Validate confirm password
        const confirmPasswordValue = confirmPasswordInput.value.trim();
        if (confirmPasswordValue !== passwordValue) {
            confirmPasswordError.classList.remove('hidden');
            valid = false;
            errorMessage += 'Passwords do not match.\n';
        } else {
            confirmPasswordError.classList.add('hidden');
        }

        if (!valid) {
            alert(errorMessage);
        } else {
            alert('Form submitted successfully!');
            form.submit();  // Replace with AJAX request if needed
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
