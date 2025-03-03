let panels = document.querySelectorAll('.panel');
// place all the elements with panel into a nodeList

const removeActiveClasses = () => {
    panels.forEach((panel) => {
        panel.classList.remove('active')
    })
}

panels.forEach((panel) => {
    panel.addEventListener('click', () => {
        removeActiveClasses();
        panel.classList.add('active')
    })
})