document.addEventListener('DOMContentLoaded', (event) => {
    const input = document.getElementById('input');
    const output = document.getElementById('output');
    maxCount = 50;

    input.addEventListener('input', () => {
        const count = input.value.length;
        if (count > maxCount) {
            input.value = input.value.substring(0, maxCount);
            output.textContent = `${maxCount} characters (maximum reached)`;
            output.style.color = "red";
        }
        else {
            output.textContent = `You still have ${maxCount - count} characters left...`
            output.style.color = "black";
        }
    });
});

function display() {
    const input = document.getElementsByClassName('container');
    input[0].style.display = "none";
    const alertbox = document.getElementById('alertbox');
    alertbox.style.cssText = `
    display: flex;
    visibility: visible;
    top: 200px;
    border: 1px solid black;
    `;
}