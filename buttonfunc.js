
const section = document.querySelector('#section');
const body = document.querySelector('body');

function createBtn() {
    body.append(button);
    button.innerHTML = 'Click Me for new picture!'
}

function bodyImage(image) {
    return body.append(image)
}

function randomNum(param) {
    let num = Math.floor(Math.random() * param.length);
    return num
}

function pictureResponse(response) {
    let screenWidth = document.querySelector('html').clientWidth
    let screenHeight = document.querySelector('html').clientHeight
    let pictureArr = response;
    let rand = randomNum(pictureArr)
    const img = document.createElement('img');
    img.id = 'photo'
    img.src = `${pictureArr[rand]}`;
    img.width = screenWidth * 0.99;
    img.height = screenHeight * 0.99;
    console.log(img)
    body.append(img)
};



export { section, body, createBtn, pictureResponse, bodyImage, randomNum }