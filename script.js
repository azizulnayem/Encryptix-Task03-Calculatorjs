var screen = document.querySelector('#screen');
var btn = document.querySelectorAll('.btn');

for (item of btn) {
    item.addEventListener('click', (e) => {
        let btntext = e.target.innerText;

        if (btntext == '×') {
            btntext = '*';
        }

        if (btntext == '÷') {
            btntext = '/';
        }
        screen.value += btntext;
    });
}

function sin() {
    screen.value = Math.sin(toRadians(screen.value));
}

function cos() {
    screen.value = Math.cos(toRadians(screen.value));
}

function tan() {
    screen.value = Math.tan(toRadians(screen.value));
}

function toRadians(angle) {
    return angle * (Math.PI / 180);
}

function pow() {
    screen.value = Math.pow(screen.value, 2);
}

function sqrt() {
    screen.value = Math.sqrt(screen.value);
}

function log() {
    screen.value = Math.log10(screen.value);
}

function pi() {
    screen.value += 3.14159265359;
}

function e() {
    screen.value += 2.71828182846;
}

function fact() {
    let num = parseInt(screen.value);
    let f = 1;
    for (let i = 1; i <= num; i++) {
        f *= i;
    }
    screen.value = f;
}

function backspc() {
    screen.value = screen.value.slice(0, -1);
}

function clearScreen() {
    screen.value = '';
}

function calculate() {
    try {
        screen.value = eval(screen.value);
    } catch {
        screen.value = "Error";
    }
}
