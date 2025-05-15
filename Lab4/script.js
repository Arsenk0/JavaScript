function output(message) {
    const out = document.getElementById("output");
    const div = document.createElement("div");
    div.textContent = message;
    out.appendChild(div);
}

function findMinLengthOfThreeWords(w1, w2, w3) {
    return Math.min(w1.length, w2.length, w3.length);
}

function filterOddElements(arr) {
    return arr.filter(num => num % 2 !== 0);
}

function getLengthOfShortestElement(arr) {
    if (arr.length === 0) return 0;
    return Math.min(...arr.map(el => el.length));
}

function joinArrayOfArrays(arrays) {
    return [].concat(...arrays);
}

function findSmallestNumberAmongMixedElements(arr) {
    const numbers = arr.filter(el => typeof el === 'number');
    if (numbers.length === 0) return 0;
    return Math.min(...numbers);
}

function computeSummationToN(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) sum += i;
    return sum;
}

function convertScoreToGrade(score) {
    if (score > 100 || score < 0) return 'INVALID SCORE';
    if (score >= 90) return 'A';
    if (score >= 80) return 'B';
    if (score >= 70) return 'C';
    if (score >= 60) return 'D';
    if (score >= 50) return 'E';
    return 'F';
}

function getLongestOfThreeWords(w1, w2, w3) {
    const words = [w1, w2, w3];
    return words.reduce((longest, word) =>
        word.length > longest.length ? word : longest
    );
}

function multiply(a, b) {
    let result = 0;
    const positive = Math.abs(b);
    for (let i = 0; i < positive; i++) result += a;
    return b < 0 ? -result : result;
}

function computeSumBetween(a, b) {
    if (b <= a) return 0;
    let sum = 0;
    for (let i = a; i < b; i++) sum += i;
    return sum;
}

function runAllTasks() {
    document.getElementById("output").innerHTML = "";

    output("1. Мінімальна довжина слова: " + findMinLengthOfThreeWords("apple", "banana", "kiwi"));
    output("2. Непарні елементи масиву: " + filterOddElements([1, 2, 3, 4, 5]));
    output("3. Довжина найкоротшого слова: " + getLengthOfShortestElement(["tree", "sun", "elephant"]));
    output("4. Об’єднаний масив: " + joinArrayOfArrays([[1, 2], [3, 4], [5]]));
    output("5. Найменше число серед змішаних елементів: " + findSmallestNumberAmongMixedElements([true, 3, "hi", 2, 9]));
    output("6. Сума чисел до n: " + computeSummationToN(5));
    output("7. Оцінка ECTS: " + convertScoreToGrade(85));
    output("8. Найдовше слово: " + getLongestOfThreeWords("cat", "hippopotamus", "dog"));
    output("9. Добуток чисел (без *): " + multiply(4, -3));
    output("10. Сума між числами: " + computeSumBetween(1, 5));
}
