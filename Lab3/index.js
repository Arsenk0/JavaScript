// Виведення інформації різними методами
document.write("<p>Вивід через document.write()</p>");
alert("Вивід через alert()");
console.log("Вивід через console.log()");
document.getElementById("output").innerHTML = "Вивід через innerHTML";

// Видалення останнього символу
function removeLastCharacter() {
    let outputDiv = document.getElementById("output");
    let text = outputDiv.innerHTML;
    outputDiv.innerHTML = text.slice(0, -1);
}

// Приклад з пункту 4 (заміна textContent на innerHTML)
let exampleDiv = document.getElementById("example");
exampleDiv.innerHTML = "<strong>Це текст, доданий через innerHTML</strong>";

// Функції згідно з індивідуальними завданнями
function getProperty(obj, key) {
    return obj[key];
}

function addProperty(obj, key, value) {
    obj[key] = value;
    return true;
}

function removeProperty(obj, key) {
    return delete obj[key];
}

function getFullName(firstName, lastName) {
    return `${firstName} ${lastName}`;
}

function getLengthOfWord(word) {
    return word.length;
}

function getLengthOfTwoWords(word1, word2) {
    return word1.length + word2.length;
}

function isGreaterThan(num1, num2) {
    return num1 > num2;
}

function isEven(num) {
    return num % 2 === 0;
}

function isSameLength(word1, word2) {
    return word1.length === word2.length;
}

function isEvenAndGreaterThanTen(num) {
    return num % 2 === 0 && num > 10;
}

function computeAreaOfATriangle(base, height) {
    return 0.5 * base * height;
}
