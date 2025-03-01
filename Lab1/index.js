document.addEventListener("DOMContentLoaded", function () {
    console.log("JS підключено!");  // Перевірка підключення

    var heading = document.getElementById('heading');
    setInterval(function () {
        var hue = 'rgb(' + (Math.floor(Math.random() * 256)) +
            ',' + (Math.floor(Math.random() * 256)) +
            ',' + (Math.floor(Math.random() * 256)) + ')';
        heading.style.color = hue;
    }, 1000);

    document.getElementById('greetBtn').addEventListener("click", function () {
        this.style.display = "none";

        var h1 = document.createElement('h1');
        h1.id = "big";
        h1.textContent = "Я ВІТАЮ ТЕБЕ СВІТ!!!";
        h1.style.color = "red";
        h1.style.fontSize = "4em";
        h1.style.textAlign = "center";
        document.body.appendChild(h1);

        document.getElementById('resetBtn').style.display = "block";
    });

    document.getElementById('resetBtn').addEventListener("click", function () {
        var bigHeading = document.getElementById('big');
        if (bigHeading) {
            bigHeading.remove();
        }
        document.getElementById('greetBtn').style.display = "block";
        this.style.display = "none";
    });
});
