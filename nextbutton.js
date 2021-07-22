import { body, randomNum } from './buttonfunc.js'

const btn = document.querySelector('#button');


const colors = ['black', 'green', 'blue', 'red', 'purple', 'yellow', 'orange', ];

function colorPicker(param) {
    let num = randomNum(param);
    return num
};

function colorCheck(paramA, paramB) {
    if(paramA.style.color === paramB.style.backgroundColor) {
        paramA.style.color = colors[colorPicker(colors)]
        console.log('COLORS MATCHED')
    } else {
        console.log('colors did not match')
    }
};

function changeColor(paramA, paramB) {
    paramA.style.color = colors[colorPicker(colors)];
    paramB.style.backgroundColor = colors[colorPicker(colors)]
    colorCheck(paramA, paramB)
};

export { btn, colors, colorPicker, colorCheck, changeColor}