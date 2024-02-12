class CarritoCompra {
    constructor() {
        this.carrito = [];
    }

    agregarProducto (producto){
        this.carrito.push(producto)
    }
    
    calcularTotal () {
       let total = this.carrito.reduce((acc,cur) => acc + cur.precio,0);
       return total;
    }

    aplicarDescuento(porcentaje) {
        let total = this.calcularTotal();
        let descuento = total * (porcentaje/100)
        return total - descuento;
    }
}

module.exports = CarritoCompra;