function cambiarImagen(nuevaImagen) {
    document.getElementById('principalImg').src = nuevaImagen;
}

let contadorCarrito = 0;

function agregarAlCarrito() {
    let contador = parseInt(document.querySelector('.cart-count').textContent);
    contador++;
    document.querySelector('.cart-count').textContent = contador;
}

// productoAdmin

// crear producto

