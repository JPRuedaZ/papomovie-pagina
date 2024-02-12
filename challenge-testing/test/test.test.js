const CarritoCompra = require ('./index.js')

describe('Carrito de Compra', () => {
    let carrito;

    beforeEach(() => {
        carrito = new CarritoCompra();
    });

    it('agregarProducto agrega un producto al carrito', () => {
        carrito.agregarProducto({ nombre: 'Producto 1', precio: 10 });
        expect(carrito.carrito.length).toBe(1);
    });

    it('calcularTotal devuelve el total correcto', () => {
        carrito.agregarProducto({ nombre: 'Producto 1', precio: 10 });
        carrito.agregarProducto({ nombre: 'Producto 2', precio: 20 });
        expect(carrito.calcularTotal()).toBe(30);
    });

    it('aplicarDescuento aplica el descuento correctamente', () => {
        carrito.agregarProducto({ nombre: 'Producto 1', precio: 10 });
        carrito.agregarProducto({ nombre: 'Producto 2', precio: 20 });
        expect(carrito.aplicarDescuento(10)).toBe(27); // Descuento del 10%
    });
})