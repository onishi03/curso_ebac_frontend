const alunos = [
    { aluno: 'Rodrigo', nota: 3 },
    { aluno: 'Natalia', nota: 7 },
    { aluno: 'Arthur', nota: 10 },
    { aluno: 'Flora', nota: 9 },
];

function alunosAprovados(lista_alunos) {
    const aprovados = lista_alunos.filter(aluno => aluno.nota >= 6);
    return aprovados.map(aluno => aluno.aluno);
}

console.log(alunosAprovados(alunos))