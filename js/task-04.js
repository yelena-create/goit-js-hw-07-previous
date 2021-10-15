const counterValueEl = document.querySelector('#value');
console.log(counterValueEl);
counterValueEl.textContent = 0;

const decrementBtn = document.querySelector('button[data-action="decrement"]');
console.log(decrementBtn);
const incrementBtn = document.querySelector('button[data-action="increment"]');
console.log(incrementBtn);

let counterValue = 0;

function decrement() {
    counterValue -= 1;
    counterValueEl.textContent = counterValue;
}

function increment() {
    counterValue += 1;
    counterValueEl.textContent = counterValue;
}

decrementBtn.addEventListener('click', decrement);
incrementBtn.addEventListener('click', increment);
