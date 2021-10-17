const inputData = document.querySelector('[data-length]');
const inputlength = inputData.dataset.length;

inputData.addEventListener('change', cheсkInputLength);

function cheсkInputLength(event) {
    event.target.value.length === inputlength ?
        inputData.classList.add('valid') ||
        inputData.classList.remove('invalid') : inputData.classList.remove('valid') ||
        inputData.classList.add('invalid');
    
}