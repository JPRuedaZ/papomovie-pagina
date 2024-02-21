
const limpiarFormulario = () => {
    const inputs = document.querySelectorAll('input');

    inputs.forEach(input => {
        input.value = '';
    })

    
}

module.exports = limpiarFormulario;
