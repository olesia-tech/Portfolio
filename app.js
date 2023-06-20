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
      
      console.log(data);
      
      alert('Message sent successfully!');
      
      contactForm.reset();
    })
    .catch(error => {
    
      console.error('Error:', error);
    
      alert('An error occurred while sending the message. Please try again later.');
    });
});











