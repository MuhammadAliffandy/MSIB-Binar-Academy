const fs = require('fs')
const imagePath = '../public/assets/car_vw.jpg';
const { Blob } = require('buffer');

const imageBuffer = fs.readFileSync(imagePath);

const image = new Blob([Buffer.from(imageBuffer)], {type: 'Buffer' });


module.exports = imageBuffer;
