document.addEventListener("DOMContentLoaded", function() {
    const loginButton = document.getElementById("login-button");
    const loginFields = document.getElementById("login-fields");
    const registerLink = document.getElementById("register-link");

    loginButton.addEventListener("click", function() {
        if (loginFields.style.display === "none") {
            loginFields.style.display = "flex";
        } else {
            loginFields.style.display = "none";
        }
    });

    registerLink.addEventListener("click", function(event) {
        event.preventDefault();
        window.location.href = "pagina_de_cadastro.html"; // Substitua pelo caminho correto da sua página de cadastro
    });
});