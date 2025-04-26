<script>
    const form = document.getElementById('signupForm');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const phone numberInput = document.getElementById('phone number');
    const passwordInput = document.getElementById('password');
    const confirmpasswordInput = document.getElementById('confirm password');
    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const phone number error = document.getElementById('phonenumber error');
    const passwordError = document.getElementById('passwordError');
    const confirm passwordError = document.getElementById('confirm passwordError');

    form.addEventListener('submit', function (e)
    {
      e.preventDefault();
      let isValid = true;

      // Reset errors
      nameError.textContent = '';
      emailError.textContent = '';
      phonenumberError.textContent = '';
      passwordError.textContent = '';
      confirmpasswordError.textContent = '';

      if (nameInput.value.trim() === '') {
        nameError.textContent = 'Name is required';
        isValid = false;
      }

      if (emailInput.value.trim() === '') 
      {
        emailError.textContent = 'Email is required';
        isValid = false;
      } 
      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value)) {
        emailError.textContent = 'Invalid email format';
        isValid = false;
      }

      if (passwordInput.value.trim() === '')
      {
        passwordError.textContent = 'Password is required';
        isValid = false;
      } 
      else if (passwordInput.value.length < 6) 
      {
        passwordError.textContent = 'Password must be at least 6 characters';
        isValid = false;
       }

      if (isValid) 
      {
        alert('Form submitted successfully!');
        form.reset();
      }
    });
  </script>