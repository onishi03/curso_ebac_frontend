$(document).ready(function() {

$('form').on('submit', function(e) {
    e.preventDefault();

    const novaTarefa = $('#nome-da-tarefa').val();
    const novoItem = $('<li style="display: none"> </li>').text(novaTarefa);

     //Agora adicionar a li na ul
    $(novoItem).appendTo('ul'); 
    //usar animação com jQuery na adição
    $(novoItem).fadeIn();
    //para limpar o input
    $("#nome-da-tarefa").val("");
});

    $('ul').on('click', 'li', function(e) {
        $(e.target).toggleClass('concluido')
    });

    $("#lista").on("click", ".trash", function(e) {
        $(e.target).parents('li').remove();
    })

});
