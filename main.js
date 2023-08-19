const form = document.getElementById('form-confirm');

let formEValido = false;

function numeroValido(valorA, valorB) {
    return valorB > valorA;
}

form.addEventListener('submit', function(e) {
    e.preventDefault();
    let valorA = parseFloat(document.getElementById('campo-a').value);
    let valorB = parseFloat(document.getElementById('campo-b').value);

    const messagesucess = 'Formulario Enviado com Sucesso! <br>Verificando: <b> Valor B é maior que Valor A</b></br>';
    const containerMensagemSucesso = document.querySelector('.success-message');

    formEValido = numeroValido(valorA, valorB);

    if(formEValido) {
        document.querySelector('.error-message').style.display = 'none';
        containerMensagemSucesso.innerHTML = messagesucess;
        containerMensagemSucesso.style.display = 'block';
        document.querySelector('.error-message').style.display = 'none';

        valorA.value = '';
        valorB.value = '';
    } else {
        document.querySelector('.error-message').style.display = 'block';
        containerMensagemSucesso.style.display = 'none';
    }
}) 