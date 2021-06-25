const themeSelector = document.querySelector('#selector');
const body = document.querySelector('body');
//Default theme
themeSelector.value = '1';

themeSelector.addEventListener('change', function () {
    console.log(themeSelector.value)
    if (themeSelector.value === '1') {
        body.classList.add('theme1');
        body.classList.remove('theme2');
        body.classList.remove('theme3');
    }
    else if (themeSelector.value === '2') {
        body.classList.add('theme2');
        body.classList.remove('theme1');
        body.classList.remove('theme3');
    }
    else if (themeSelector.value === '3') {
        body.classList.add('theme3');
        body.classList.remove('theme1');
        body.classList.remove('theme2');
    }
})

const numButtons = document.querySelectorAll('.btn');
const deleteBtn = document.querySelector('.delete');
const reset = document.querySelector('.reset');
const equals = document.querySelector('.equals');
const display = document.querySelector('.output');
let ev = '0';

display.innerText = 0;
reset.addEventListener('click', function () {
    display.innerText = 0;
    ev = '0';
})
equals.addEventListener('click', function (e) {
    ev = `${eval(ev)}`;
    if (ev.length >= '13') {
        ev = ev.slice(0, 12);
    }
    display.innerText = ev.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
})

deleteBtn.addEventListener('click', function () {
    ev = ev.slice(0, -1);
    let last = ev.indexOf(ev.length - 1);
    if (ev === '*' || ev === '+' || ev === '-' || ev === '/') {
        ev = ev.slice(0, -1);
    }
    display.innerText = ev.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    if (ev === "") {
        ev = '0';
        display.innerText = ev;
    }
})

for (btn of numButtons) {
    btn.addEventListener('click', function () {
        if (ev.length < '13') {
            if (display.innerText === '0') {
                if (this.value !== '/' && this.value !== '*' && this.value !== '+' && this.value !== '-' && this.value !== '.') {
                    ev = "";
                    display.innerText = "";
                }
            }
            let last = ev.charAt(ev.length-1);
            console.log(last);
            if (this.value === '*' || this.value === '+' || this.value === '-' || this.value === '/') {
                if (last !== this.value) {
                    ev = ev.concat(this.value);
                }
            }
            else {
                ev = ev.concat(this.value);
            }
        }
        // ev = ev.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        display.innerText = ev.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    })
}

