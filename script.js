setInterval(clock, 1000);

const hourHand = document.querySelector('.hour'); 
const minuteHand = document.querySelector('.minute'); 
const secondHand = document.querySelector('.second');
const body = document.querySelector('body');
const switchContainer = document.querySelector('.dark-mode-container');

function setDegree(element, ratio) {
    element.style.setProperty('--hand-rotation', `${ratio * 360}deg`);
}

function clock() {
    const now = new Date();
    let secondRatio = now.getSeconds() / 60;
    let minuteRatio = now.getMinutes() / 60;
    let hourRatio = (now.getHours() + minuteRatio) / 12;

    setDegree(secondHand, secondRatio);
    setDegree(minuteHand, minuteRatio);
    setDegree(hourHand, hourRatio);
}


switchContainer.addEventListener('click', () => {
    body.classList.toggle('dark-mode-active');
})

clock();