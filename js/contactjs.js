document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contactForm'); // Target the form by ID
    const emailInput = document.querySelector('input[type="email"]');
    const phoneInput = document.querySelector('input[type="tel"]');

    // Regex patterns for validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email regex
    const phoneRegex = /^\d{11}$/; // 11 digit phone number

    form.addEventListener('submit', function (event) {
        let isValid = true;

        // Validate all fields
        const nameInput = document.getElementById('name');
        const messageInput = document.getElementById('message');

        if (nameInput.value.trim() === '' || emailInput.value.trim() === '' || phoneInput.value.trim() === '' || messageInput.value.trim() === '') {
            isValid = false;
            Swal.fire("Incomplete Form!", "Please fill all the fields.", "error"); // Using SweetAlert
        } else {
            // Validate email
            if (!emailRegex.test(emailInput.value)) {
                isValid = false;
                Swal.fire("Invalid Email!", "Please enter a valid email address.", "error");
            }

            // Validate phone number
            if (!phoneRegex.test(phoneInput.value)) {
                isValid = false;
                Swal.fire("Invalid Phone Number!", "Phone number must be 11 digits long.", "error");
            }
        }

        // If the form is not valid, prevent submission
        if (!isValid) {
            event.preventDefault();
        } else {
            // Store data in local storage
            localStorage.setItem('contactName', nameInput.value);
            localStorage.setItem('contactEmail', emailInput.value);
            localStorage.setItem('contactPhone', phoneInput.value);
            localStorage.setItem('contactMessage', messageInput.value);

            // Store data in session storage
            sessionStorage.setItem('contactName', nameInput.value);
            sessionStorage.setItem('contactEmail', emailInput.value);
            sessionStorage.setItem('contactPhone', phoneInput.value);
            sessionStorage.setItem('contactMessage', messageInput.value);

            // Optionally, you can show a success alert
            Swal.fire("Success!", "Your form has been submitted.", "success").then(() => {
                // Clear the form fields after submission
                form.reset();
            });
        }
    });
});
