document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('forgotPasswordForm');
    const emailInput = document.getElementById('email');
    const emailError = document.getElementById('emailError');
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

        if (!valid) {
            alert(errorMessage);
        } else {
            alert('Password reset link sent to your email!');
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
