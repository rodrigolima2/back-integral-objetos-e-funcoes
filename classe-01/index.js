const prova = {
    aluno: "João",
    materia: "Português",
    valor: 10,
    questoes: [
        {
            resposta: "a",
            correta: "b"
        },
        {
            resposta: "c",
            correta: "c"
        },
        {
            resposta: "e",
            correta: "b"
        },
        {
            resposta: "b",
            correta: "b"
        },
        {
            resposta: "c",
            correta: "c"
        }
    ]
};

let acertos = 0, nota = 0;

function corrigirProva(prova) {
    for (item of prova.questoes) {
        if (item.resposta === item.correta) {
            acertos++;
        }
    }

    nota = acertos * 2;
}

corrigirProva(prova);


console.log(`O aluno(a) ${prova.aluno} acertou ${acertos} questões e obteve nota ${nota}`);