
var total = 0;

function agregarPlato(nombre, precio) {

    document.getElementById("lista-compras").innerHTML +=
    "<li>" + nombre + " - " + precio + " Bs.</li>";

    total = total + precio;

    document.getElementById("total").innerHTML = total;

}

function vaciarCarrito() {

    document.getElementById("lista-compras").innerHTML = "";

    total = 0;

    document.getElementById("total").innerHTML = total;

}
