
//mode change//
function toggletheme(){
    const body = document.body;
    const header = document.querySelector('header');
    const links = document.querySelectorAll('ul li a');
    const section = document.querySelectorAll('section');
    const footer = document.querySelector('footer');

    body.classList.toggle('dark-mode');
    header.classList.toggle('dark-mode');
    links.forEach(link => link.classList.toggle('dark-mode'));
    section.forEach(section => section.classList.toggle('dark-mode'));
    footer.classList.toggle('dark-mode');
}


$(document).ready(function() {
    // Toggle search bar
    $('.search').on('click', function() {
        $('.search-bar').addClass('search-bar-active');
    });

    $('.search-cancel').on('click', function() {
        $('.search-bar').removeClass('search-bar-active');     
    });

    // Login and Signup form toggle
    $('.user').on('click', function() {
        $('.form').addClass('login-active');
    });

    $('.sign-up-btn').on('click', function() {
        $('.form').addClass('sign-up-active').removeClass('login-active');
    });

    $('.form-cancel').on('click', function() {
        $('.form').removeClass('login-active sign-up-active'); // Combined removal for simplicity
    });
});

$(document).ready(function() {
    $('#slidedownbtn').on('click',function() {
        $('#myDiv').slideDown(2000); // Slide down over 2 seconds
    });
    $('#slideupbtn').on('click',function() {
        $('#myDiv').slideUp(2000); // Slide up over 2 seconds
    });
});
$(document).ready(function(){
    $('#animateBtn').on('click',function() {
        $('#mybox').animate({
            width:'400px',
            height:'400PX',  

    },3000);//animate over 3 seconds
    });

});

let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.slides-container');
    const totalSlides = slides.length;
    
    if (index >= totalSlides) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = totalSlides - 1;
    } else {
        currentSlide = index;
    }

    const slidesContainer = document.querySelector('.slides');
    slidesContainer.style.transform = `translateX(-${currentSlide * 100}%)`;
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

// Optional: Auto slide every 5 seconds
setInterval(() => {
    nextSlide();
}, 5000);


// Cloth and Dessert Data
//*************************************************************************** */
document.addEventListener('DOMContentLoaded', function () {
    const signupForm = document.getElementById('signupForm');
    
    // Input fields and error spans
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirmpassword');
    const phoneInput = document.getElementById('phone');
    const addressInput = document.getElementById('address');

    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');
    const confirmPasswordError = document.getElementById('confirmpasswordError');
    const phoneError = document.getElementById('phoneError');
    const addressError = document.getElementById('addressError');

    signupForm.addEventListener('submit', function (e) {
        e.preventDefault(); // Prevent form submission
        let isValid = true;

        // Validate Name
        if (nameInput.value.trim() === '') {
            nameError.textContent = 'Name is required.';
            isValid = false;
        } else {
            nameError.textContent = '';
        }

        // Validate Email
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailInput.value.trim() === '') {
            emailError.textContent = 'Email is required.';
            isValid = false;
        } else if (!emailPattern.test(emailInput.value)) {
            emailError.textContent = 'Invalid email format.';
            isValid = false;
        } else {
            emailError.textContent = '';
        }

        // Validate Password
        if (passwordInput.value.trim() === '') {
            passwordError.textContent = 'Password is required.';
            isValid = false;
        } else if (passwordInput.value.length < 6) {
            passwordError.textContent = 'Password must be at least 6 characters long.';
            isValid = false;
        } else {
            passwordError.textContent = '';
        }

        // Validate Confirm Password
        if (confirmPasswordInput.value.trim() === '') {
            confirmPasswordError.textContent = 'Please confirm your password.';
            isValid = false;
        } else if (confirmPasswordInput.value !== passwordInput.value) {
            confirmPasswordError.textContent = 'Passwords do not match.';
            isValid = false;
        } else {
            confirmPasswordError.textContent = '';
        }

        // Validate Phone
        const phonePattern = /^\d{10}$/; // Accepts exactly 10 digits
        if (phoneInput.value.trim() === '') {
            phoneError.textContent = 'Phone number is required.';
            isValid = false;
        } else if (!phonePattern.test(phoneInput.value)) {
            phoneError.textContent = 'Phone number must be 10 digits.';
            isValid = false;
        } else {
            phoneError.textContent = '';
        }

        // Validate Address
        if (addressInput.value.trim() === '') {
            addressError.textContent = 'Address is required.';
            isValid = false;
        } else {
            addressError.textContent = '';
        }

        // If all fields are valid, simulate success
        if (isValid) {
            alert('Signup successful!');
            signupForm.reset(); // Clear the form
        }
    });
});
