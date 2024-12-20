let container = document.querySelector('.box');

document.addEventListener('mousedown', function () {
    container.classList.add('cursor');
    document.body.addEventListener('mousemove', mouseMove);
    container.addEventListener('mouseup', mouseUp);
    document.body.addEventListener('mouseup', mouseUp);
})

function mouseUp() {
    container.classList.remove('cursor');
    document.body.removeEventListener('mousemove', mouseMove);
}

function mouseMove(e) {
    let x = container.getBoundingClientRect();
    container.style.top = `${x.top + e.movementY}px`;
    container.style.left = `${x.left + e.movementX}px`;
    container.querySelector('p').textContent = `${Math.trunc(x.top + e.movementY)}px , ${Math.trunc(x.left + e.movementX)}px`;
}