function descuentoAplicado(categoria){
    return categoria == "Estudiante" ? 0.2 :
           categoria == "Trainee" ? 0.5 :
                                    0.75 ;
}
function tickets() {
    var categoria = document.getElementById("Categoria").value;
    var cantidad = document.getElementById("Cantidad").value;
    var descuento = descuentoAplicado(categoria);
    var costototal = 200*cantidad*descuento;
    document.getElementById("totalCompra").innerHTML = "Total a pagar: $" + costototal;
}

