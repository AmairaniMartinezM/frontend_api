function borrar(email){
    respuesta = confirm("¿Estas seguro de borrar el contacto?");

    if (respuesta){
        // const URL = "http://localhost:8000/contactos";
        const URL = "https://python-back-3b9ec03f9254.herokuapp.com/contactos"
        var request = new XMLHttpRequest;
        request.open('DELETE',URL +"/" +email,true);
        request.send();
        request.onload = () => {
            const response = request.responseText;
            window.location.href = "https://fro-123-95f87e6af815.herokuapp.com";
        }
    }else{
        console.log("El usuario ha cancelado.");
    }
}
