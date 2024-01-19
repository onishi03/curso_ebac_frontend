const alunos = [
    { aluno: 'Rodrigo', nota: 3 },
    { aluno: 'Jiro', nota: 6 },
    { aluno: 'Flora', nota: 9 },
    { aluno: 'Arthur', nota: 10 },
    { aluno: 'Natalia', nota: 7 },
    { aluno: 'Ivete', nota: 0 },
];

function alunosAprovados(arr) {
    const aprovados = arr.filter(obj => obj.nota >= 6);
    return aprovados.map(obj => obj.aluno);
}

console.log(alunosAprovados(alunos))