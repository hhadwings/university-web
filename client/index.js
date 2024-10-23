const changeColorButton = document.querySelector('#change-color-btn');
const header = document.querySelector('.header');
const footer = document.querySelector('.footer');
const textElement = document.querySelector('#text');

changeColorButton.addEventListener('click', () => {
    const randomHexColor = Math.floor(Math.random()*16777215).toString(16);

    footer.style.backgroundColor = '#' + randomHexColor;
    header.style.backgroundColor = '#' + randomHexColor;

    if (textElement.classList.contains('text-visible')) {
        textElement.classList.remove('text-visible')
    } else {
        textElement.classList.add('text-visible')
    }
})