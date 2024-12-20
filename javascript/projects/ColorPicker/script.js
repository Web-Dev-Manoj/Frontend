let color = document.querySelector('input');

// without using event listeners
// color.oninput = function () {
//     document.body.style.background = color.value;
// }

// with event listeners
// color.addEventListener('input', function () {
//     document.body.style.background = color.value;
// })

// Background change for every 1000sec
color.addEventListener('input', bgChange);

function bgChange() {
    let randomnum = `0123456789abcdef`;
    function generateRdm() {
        return (Math.trunc(Math.random() * randomnum.length + 1)) % 10;
    }
    let color = `#`;
    for (let i = 0; i < 6; i++) {
        color = color + `${randomnum[generateRdm()]}`;
    }
    document.body.style.background = color;
}

setInterval(bgChange, 1000);