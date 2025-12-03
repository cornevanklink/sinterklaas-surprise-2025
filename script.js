function checkAnswers() {
    const inputs = document.querySelectorAll('.poem-input');
    const resultDiv = document.getElementById('result');
    let allCorrect = true;
    let correctCount = 0;

    inputs.forEach(input => {
        const userAnswer = input.value.trim().toLowerCase();
        const correctAnswer = input.dataset.answer.toLowerCase();

        if (userAnswer === correctAnswer) {
            input.classList.remove('incorrect');
            input.classList.add('correct');
            correctCount++;
        } else {
            input.classList.remove('correct');
            input.classList.add('incorrect');
            allCorrect = false;
        }
    });

    if (allCorrect) {
        resultDiv.textContent = '🎉 Gefeliciteerd! Je hebt alle woorden goed geraden!';
        resultDiv.classList.remove('error');
        resultDiv.classList.add('success');
    } else {
        resultDiv.textContent = `Je hebt ${correctCount} van ${inputs.length} woorden goed. Probeer het nog een keer!`;
        resultDiv.classList.remove('success');
        resultDiv.classList.add('error');
    }
}
