const testData = {
    testName: "Тест про види павуків",
    questions: [
        {
            question: "Який з цих павуків належить до роду Latrodectus?",
            answers: [
                { answer: "Чорна вдова", isCorrect: true },
                { answer: "Тарантул", isCorrect: false },
                { answer: "Павук-стрибун", isCorrect: false },
                { answer: "Аргіопа тигрова", isCorrect: false }
            ]
        },
        {
            question: "Як називається найбільший павук у світі?",
            answers: [
                { answer: "Тарантул", isCorrect: false },
                { answer: "Павук-стрибун", isCorrect: false },
                { answer: "Птахоїд-Голіаф", isCorrect: true },
                { answer: "Аргіопа тигрова", isCorrect: false }
            ]
        },
        {
            question: "Де зазвичай мешкають павуки роду Theraphosa?",
            answers: [
                { answer: "В Австралії", isCorrect: false },
                { answer: "В Африці", isCorrect: false },
                { answer: "В Південній Америці", isCorrect: true },
                { answer: "В Європі", isCorrect: false }
            ]
        },
        {
            question: "Який з цих павуків є найбільш небезпечним для людини?",
            answers: [
                { answer: "Аргіопа тигрова", isCorrect: false },
                { answer: "Чорна вдова", isCorrect: true },
                { answer: "Тарантул", isCorrect: false },
                { answer: "Павук-стрибун", isCorrect: false }
            ]
        },
        {
            question: "Що є основною відмінністю між павуками роду Thomisidae та роду Philodromidae?",
            answers: [
                { answer: "Павуки роду Philodromidae пересуваються боком", isCorrect: false },
                { answer: "У Thomisidae тонші лапки", isCorrect: false },
                { answer: "У Thomisidae дві передні пари ніг помітно довші і товщі задніх, всі лапки позбавлені скопул", isCorrect: true },
                { answer: "Павуки роду Thomisidae плетуть павутину", isCorrect: false }
            ]
        }
    ]
};

const testContainer = document.getElementById('testContainer');
const resultContainer = document.getElementById('resultContainer');

function renderTest() {
    testData.questions.forEach((question, index) => {
        const questionElement = document.createElement('div');
        questionElement.classList.add('question');
        questionElement.innerHTML = `<p>${index + 1}. ${question.question}</p>`;

        const answersContainer = document.createElement('div');
        answersContainer.classList.add('answers');
        question.answers.forEach(answer => {
            const answerLabel = document.createElement('label');
            answerLabel.innerHTML = `<input type="radio" name="q${index}" value="${answer.answer}"> ${answer.answer}`;
            answersContainer.appendChild(answerLabel);
        });

        questionElement.appendChild(answersContainer);
        testContainer.appendChild(questionElement);
    });
}

function submitTest() {
    resultContainer.innerHTML = "";
    const userAnswers = [];
    testData.questions.forEach((question, index) => {
        const selectedAnswer = document.querySelector(`input[name="q${index}"]:checked`);
        if (selectedAnswer) {
            userAnswers.push(selectedAnswer.value);
        } else {
            userAnswers.push(null); // null якщо відповідь не обрана
        }
    });

    let correctAnswersCount = 0;
    userAnswers.forEach((answer, index) => {
        if (answer === null) {
            resultContainer.innerHTML += `<p>Питання ${index + 1}: Виберіть відповідь</p>`;
        } else if (answer === testData.questions[index].answers.find(a => a.isCorrect).answer) {
            correctAnswersCount++;
            resultContainer.innerHTML += `<p>Питання ${index + 1}: <span style="color: green;">Правильно</span></p>`;
        } else {
            resultContainer.innerHTML += `<p>Питання ${index + 1}: <span style="color: red;">Неправильно</span></p>`;
        }
    });

    resultContainer.innerHTML += `<p>Ваш результат: ${correctAnswersCount} з ${testData.questions.length} правильних відповідей.</p>`;
}

renderTest();



