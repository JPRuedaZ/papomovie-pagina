module.exports = {
    entry: './scripts/index.js', //el punto de entrada
    output: { //Esta un objeto que tiene dos propiedades, y es donde se va a guardar, despues de hacer el recorrido.
        path: __dirname + '/public',// carpeta que crea el webpack
        filename: 'bundle.js' //el nombre del archivo
    },
}