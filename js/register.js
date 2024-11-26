async function registerBtn() {
  const nome = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const senha = document.getElementById('pass').value;
  const responseDiv = document.getElementById('response');

  responseDiv.textContent = 'Loading...';
  console.log(JSON.stringify({
    nome, email, senha, idade: 20, tipoUsuario: "paciente"
  }))
  try {
    const response = await fetch('https://integrador2-production.up.railway.app/api/usuarios', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        nome, email, senha, idade: 20, tipoUsuario: "paciente"
      })
    });

    console.log("Ola")

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