document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("depression-test-form");
    const calculateButton = document.getElementById("calculate-button");
    const resultContainer = document.getElementById("result");
    const percentageSpan = document.getElementById("percentage");

    calculateButton.addEventListener("click", function () {
        let totalScore = 0;

        for (let i = 1; i <= 10; i++) {
            const question = form.querySelector(`input[name="question-${i}"]:checked`);
            if (question) {
                totalScore += parseInt(question.value);
            }
        }

        const percentage = (totalScore / 30) * 100;

        resultContainer.classList.remove("hidden");
        percentageSpan.textContent = `${percentage.toFixed(2)}%`;
    });
});
