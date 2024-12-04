async function loginBtn() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('senha').value;
  const responseDiv = document.getElementById('response');

  responseDiv.textContent = 'Loading...';

  try {
    const response = await fetch('https://integrador2-production.up.railway.app/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, senha: password })
    });

    if (!response.ok) {
      throw new Error('Login failed: ' + response.statusText);
    }

    const data = await response.json();
    localStorage.setItem('jwtToken', data.token);
    responseDiv.textContent = 'Login successful! Redirecting...';

    // Redirect to protected page after login
    setTimeout(() => {
      window.location.href = 'Logado.html';
    }, 1000);
  } catch (error) {
    responseDiv.textContent = 'Error: ' + error.message;
  }
}