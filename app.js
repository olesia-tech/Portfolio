const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', function (event) {
  event.preventDefault();

  const formData = new FormData(contactForm);

  fetch('process-contact-form.php', {
    method: 'POST',
    body: formData
  })
    .then(response => response.text())
    .then(data => {
      // Handle the response from the server
      console.log(data);
      // Display a success message to the user
      alert('Message sent successfully!');
      // Reset the form
      contactForm.reset();
    })
    .catch(error => {
      // Handle any errors that occurred during the request
      console.error('Error:', error);
      // Display an error message to the user
      alert('An error occurred while sending the message. Please try again later.');
    });
});











