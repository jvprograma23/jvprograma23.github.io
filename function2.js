console.log("Hola Profesor")

document.getElementById('boton').onclick = function() {
    console.log("capturamos el evento click")
    document.getElementById("demo2").innerHTML = ("Idioma Italiano: Basico")
}