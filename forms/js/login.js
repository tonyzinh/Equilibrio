var admin = [
    { email: "admin", senha: "admin" },
];

function login() {
    var email = document.getElementById('email').value;
    var senha = document.getElementById('senha').value;
    var userFound = admin.find(user => user.email === email && user.senha === senha);

    if (userFound) {
        window.location.href = "Logado.html";
    } else {
        document.getElementById('response').innerHTML = "Email ou senha incorretos.";
    }
}