// Obtén el botón por su ID
let suma_boton = document.getElementById("miBoton")
let resta_boton = document.getElementById("Resta")
let reinicio_boton = document.getElementById("reinicio")
let contador = 0; 





// suma
suma_boton.addEventListener("click", function() {

    contador = contador + 1
    document.getElementById("resultado").innerHTML = contador
})

// resta
resta_boton.addEventListener("click", function(){

    contador = contador - 1
    document.getElementById("resultado").innerHTML = contador
})

// reinicio
reinicio_boton.addEventListener("click", function(){

    contador = 0
    document.getElementById("resultado").innerHTML = contador
})






