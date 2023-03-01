let display = document.getElementById('calci');

let clear = () => {
    display.value = '';
}

let show = (n) => {
    display.value += n;
}

let result = () => {
    display.value = eval(display.value);
}