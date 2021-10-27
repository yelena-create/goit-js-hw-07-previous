const refs = {
    input : document.querySelector('[type="number"]'),
    btnAdd : document.querySelector('[data-action="render"]'),
    btnClear : document.querySelector('[data-action="destroy"]'),
    boxes : document.querySelector('#boxes'),
}
// const inputLength = input.currentTarget[number];

refs.input.addEventListener('click', onInputChange);
refs.btnAdd.addEventListener('click', createBoxes);
refs.btnClear.addEventListener('click', destroyBoxes)

function onInputChange(event) {
    let amount = refs.input.currentTarget.value
    return Number(amount)
    }
const newArray = []
function createBoxes(amount) {
    for (let i = 0; i >= 100; i += 1) {
        const newBox = document.createElement('div');
        newArray.push(div)
        // img.background = green;
        // img.width = "30px";
        // каждый следующий див больше предыдущего на 10px???
        refs.boxes.append('...newArray')
        // span.classList.add('.new-el')
    }
}
function destroyBoxes() {
    refs.boxes.textContent = " "
};
 console.log(boxes)
// function onInputChange(){
//     
// };
// function onBtnAddClick() {
//     const div = document.createElement('span')
//     boxes.append('span')
//     span.classList.add('new-el')
//     // return div
// };
