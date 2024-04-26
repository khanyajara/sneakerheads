document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contactForm');
    form.addEventListener('submit', function (event) {
      event.preventDefault(); // Prevent form submission
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const message = document.getElementById('message').value;
      if (!validateEmail(email)) {
        alert('Please enter a valid email address.');
        return;
      }
      // If validation passes, you can handle the form submission here
      // For example, you can send the form data to a server using AJAX
      console.log('Name:', name);
      console.log('Email:', email);
      console.log('Message:', message);
      alert('Form submitted successfully!');
      // Clear the form fields after submission
      form.reset();
    });
  
    function validateEmail(email) {
      // Simple email validation using regular expression
      const re = /\S+@\S+\.\S+/;
      return re.test(email);
    }
  });
  