function registrar() {

    const nombre = document.getElementById("nombre").value;
    const usuario = document.getElementById("usuario").value;
    const password = document.getElementById("password").value;

    if(nombre === "" || usuario === "" || password === ""){
        alert("Completa todos los campos");
        return;
    }

    localStorage.setItem("nombre", nombre);
    localStorage.setItem("usuario", usuario);

    window.location.href = "index.html";
}
