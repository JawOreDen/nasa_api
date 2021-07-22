import { section, body, pictureResponse, bodyImage, randomNum } from './buttonfunc.js'
import { btn, colors, colorPicker, colorCheck, changeColor } from './nextbutton.js'

const apiKey = '2fTquAEvwg1x7HS8zuedBEc5KvyFi5TbWr3WPB9p';

const baseUrl = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?';

const libraryName = 'earth_date=';

const date = '2014-11-16';

const preApi = '&api_key=';

const camera = '&camera=mast';

const pageNum = '1'

const page = `&page=${pageNum}`;

const finalUrl = `${baseUrl}${libraryName}${date}${camera}${page}${preApi}${apiKey}`
let pictures = [];

async function getSpacePictures() {
    try {
        let picArray = [];
        const response = await axios.get(finalUrl);
        let pics = await response.data.photos;
        pics.forEach(element => {
            picArray.push(element.img_src);
        });
        return picArray
    } catch(error) {
        console.error(error)
    }
}

const spacePictures = getSpacePictures();

spacePictures.then(response => {
    pictureResponse(response)
    return response
}).then(link => {
    let count = 1;
    setInterval(() => {
        let screenWidth = document.querySelector('html').clientWidth;
        let screenHeight = document.querySelector('html').clientHeight;
        let num = randomNum(link);
        let pic = document.querySelector('#photo');
        let anchorTag = document.querySelector('#anchor');
        anchorTag.innerHTML = link[num];
        console.log(photo);
        pic.src = link[num];
        pic.width = screenWidth * 0.99;
        pic.height = screenHeight * 0.99;
        changeColor(btn, body)
        count++;
        console.log(count)
    }, 15000);
})

