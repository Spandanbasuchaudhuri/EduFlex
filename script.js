let loginForm = document.querySelector('.login-form');
let form = loginForm.querySelector('form'); // Assuming there's a form within loginForm

form.addEventListener('submit', async (event) => {
  event.preventDefault(); // Prevent default form submission

  // Extract form data (replace with your logic)
  const formData = new FormData(form);
  const username = formData.get('username');
  const password = formData.get('password');

  // Prepare data object for sending
  const dataToSend = {
    username: username,
    password: password,
  };

  try {
    const response = await fetch('/your-django-endpoint/', {
      method: 'POST', // Adjust method (GET, POST, etc.) as needed
      headers: {
        'Content-Type': 'application/json', // Send data as JSON
      },
      body: JSON.stringify(dataToSend),
    });

    if (response.ok) {
      const responseData = await response.json();
      // Handle successful response (show message, redirect, etc.)
      console.log('Success:', responseData);
      // Implement logic based on response data (e.g., login success/failure)
    } else {
      console.error('Error:', response.statusText);
      // Handle error response (show error message)
    }
  } catch (error) {
    console.error('Error:', error);
    // Handle general errors
  }
});
