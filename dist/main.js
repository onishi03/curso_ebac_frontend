"use strict";

var alunos = [{
  aluno: 'Rodrigo',
  nota: 3
}, {
  aluno: 'Natalia',
  nota: 7
}, {
  aluno: 'Arthur',
  nota: 10
}, {
  aluno: 'Flora',
  nota: 9
}];
function alunosAprovados(lista_alunos) {
  var aprovados = lista_alunos.filter(function (aluno) {
    return aluno.nota >= 6;
  });
  return aprovados.map(function (aluno) {
    return aluno.aluno;
  });
}
console.log(alunosAprovados(alunos));