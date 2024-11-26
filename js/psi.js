async function enviar() {
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const crp = document.getElementById('crp').value;
    const responseDiv = document.getElementById('response');
  
    responseDiv.textContent = 'Loading...';
    try {
      const response = await fetch('https://integrador2-production.up.railway.app/api/usuarios', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          nome, email,senha: "senha123", crp, tipoUsuario: "psicologo"
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
        window.location.href = '/home.html';
      }, 1000);
    } catch (error) {
      responseDiv.textContent = 'Error: ' + error.message;
    }
  }

  async function enviar2() {
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const crp = document.getElementById('crp').value;
    const responseDiv = document.getElementById('response');
  
    responseDiv.textContent = 'Loading...';
    try {
      const response = await fetch('https://integrador2-production.up.railway.app/api/usuarios', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          nome, email,senha: "senha123", crp, tipoUsuario: "psicologo"
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
        window.location.href = '/Logado.html';
      }, 1000);
    } catch (error) {
      responseDiv.textContent = 'Error: ' + error.message;
    }
  }