const nombre = document.getElementById("name");
const apellido = document.getElementById("lastname");
const email = document.getElementById("mail");
const formulario = document.getElementById("form");
const alerta = document.getElementById("warnings");

let regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

formulario.addEventListener("submit", e => {
    e.preventDefault();
    let warnings = "";
    let entrar = false;

    alerta.innerHTML = "";

    if (nombre.value.length < 3 || apellido.value.length < 3) {
        warnings += `El nombre o el apellido son muy cortos. Intenta de nuevo. `;
        entrar = true;
    }

    if (!regexEmail.test(email.value)) {
        warnings += `El mail no es válido. Intenta de nuevo.`;
        entrar = true;
    }

    if (entrar) {
        alerta.innerHTML = warnings;
    } else {
        alerta.innerHTML = "Gracias por subscribirte";
    }
});