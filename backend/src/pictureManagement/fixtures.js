// FIXME: add some meaningful data

const pictures = require('../../public/1500-random-images.json');

const picturesStringify = JSON.parse(JSON.stringify(pictures))
module.exports = {
  pictures,
};