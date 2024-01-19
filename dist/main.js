"use strict";

var alunos = [{
  aluno: 'Rodrigo',
  nota: 3
}, {
  aluno: 'Jiro',
  nota: 6
}, {
  aluno: 'Flora',
  nota: 9
}, {
  aluno: 'Arthur',
  nota: 10
}, {
  aluno: 'Natalia',
  nota: 7
}, {
  aluno: 'Ivete',
  nota: 0
}];
function alunosAprovados(arr) {
  var aprovados = arr.filter(function (obj) {
    return obj.nota >= 6;
  });
  return aprovados.map(function (obj) {
    return obj.aluno;
  });
}
console.log(alunosAprovados(alunos));