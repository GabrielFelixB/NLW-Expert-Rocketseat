const questions = [
    {
        question: "Qual é a forma correta de declarar uma variável em JavaScript?",
        options: [
            "var",
            "let",
            "const"
        ],
        correctAnswer: 1
    },
    {
        question: "Qual é o método para adicionar um elemento ao final de um array em JavaScript?",
        options: [
            "push()",
            "append()",
            "addToEnd()"
        ],
        correctAnswer: 0
    },
    {
        question: "Qual é a função usada para converter uma string em um número em JavaScript?",
        options: [
            "parse()",
            "int()",
            "parseInt()"
        ],
        correctAnswer: 2
    },
    {
        question: "Como você define uma função anônima em JavaScript?",
        options: [
            "function myFunction() {}",
            "() => {}",
            "anonymous() {}"
        ],
        correctAnswer: 1
    },
    {
        question: "Qual método é usado para remover o último elemento de um array em JavaScript?",
        options: [
            "remove()",
            "pop()",
            "deleteLast()"
        ],
        correctAnswer: 1
    },
    {
        question: "Qual é o operador de igualdade estrita em JavaScript?",
        options: [
            "==",
            "===",
            "="
        ],
        correctAnswer: 1
    },
    {
        question: "Qual é o resultado de 3 + '3' em JavaScript?",
        options: [
            "6",
            "33",
            "TypeError"
        ],
        correctAnswer: 1
    },
    {
        question: "Qual método é usado para concatenar dois arrays em JavaScript?",
        options: [
            "concat()",
            "combine()",
            "join()"
        ],
        correctAnswer: 0
    },
    {
        question: "Qual é a palavra-chave usada para declarar uma classe em JavaScript?",
        options: [
            "class",
            "struct",
            "type"
        ],
        correctAnswer: 0
    },
    {
        question: "Qual método é usado para encontrar o índice de um elemento em um array em JavaScript?",
        options: [
            "findIndex()",
            "indexOf()",
            "search()"
        ],
        correctAnswer: 1
    }
];


const quiz = document.querySelector('#quiz')

const template = document.querySelector('template')

const correct = new Set()
const totalDePerguntas = questions.length
const mostrarTotal = document.querySelector('#acertos span')


for (const item of questions) {

    const quizItem = template.content.cloneNode(true)

    quizItem.querySelector('h3').textContent = item.question


    for (const option of item.options) {

        const dt = quizItem.querySelector('dl dt').cloneNode(true)

        dt.querySelector('span').textContent = option
        dt.querySelector('input').value = item.options.indexOf(option)
        dt.querySelector('input').setAttribute('name', 'pergunta-' + questions.indexOf(item))


        dt.querySelector("input").onchange = (event) => {
            const estaCorreta = event.target.value == item.correctAnswer
            correct.delete(item)
            if (estaCorreta) {
                correct.add(item)
            }

            mostrarTotal.textContent = `${correct.size} de ${totalDePerguntas}`

        }



        quizItem.querySelector('dl').appendChild(dt)
    }

    quizItem.querySelector("dl dt").remove()

    quiz.appendChild(quizItem)
}