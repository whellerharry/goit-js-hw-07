const range = document.querySelector('#font-size-control');
const text = document.querySelector('#text');
range.addEventListener('input', inputOnSpan);
function inputOnSpan(event) {
    text.style.fontSize = `${event.currentTarget.value}px`;
};