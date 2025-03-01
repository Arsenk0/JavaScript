console.log(0.1 + 0.2);
var sum = 0.1 + 0.2;
var result = document.getElementsByClassName("m1")[0];
result.innerHTML = "В Java Script " + "<br>" + "0.1 + 0.2 = " + sum;
result.style.color = '#2d264a';

var myTxt = document.querySelector('h1.n2');
myTxt.innerHTML = 'Привіт, cтуденте!';

var person = prompt('Як Вас звати');
if (person != null) {
    myTxt.innerHTML = "Я вітаю Вас " + person + "!" + "<br>" + " ";
}

myTxt.style.color = 'red';

alert("Як Ваші справи, " + person + "?  \n  Ви готові для нашої подальшої роботи?");

var r = confirm("Готові гризти граніт науки?");
if (r == true) {
    myTxt.innerHTML = "ВПЕРЕД ДО ЗНАНЬ!";
} else {
    myTxt.innerHTML = "Мені дуже сумно!";
}

var myImage = document.querySelector('img');
var j = 0;
myImage.onclick = function () {
    j++;
    var mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/firefox-icon.png') {
        myImage.setAttribute('src', 'images/firefox-icon.png');
    } else {
        myImage.setAttribute('src', 'images/firefox-icon.png');
    }
    if (j == 3) {
        myImage.remove();
        document.write("<h1>Вітаю!</h1><h2>Завдання виконано!</h2>");
    }
}

myTxt.innerHTML += "<br>" + "Клацніть мишею по емблемі FireFox!";
