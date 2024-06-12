const form = document.getElementById('contact-form');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;

  const data = {
    name,
    email,
    phone
  };

  fetch('https://formsubmit.co/ajax/gilcicleide.vechi@gmail.com', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  .then(response => {
    console.log('Form submitted successfully!');
    form.reset();
  })
  .catch(error => {
    console.error('Error submitting form:', error);
  });
});