const fs = require('fs');
const path = require('path');
const { promisify } = require('util');
const idListPath = path.join(__dirname, 'id-list.json');
const readFile = promisify(fs.readFile);

const cityId = async promptCity => {
    const idListJson = await readFile(idListPath);
    const idListArray = JSON.parse(idListJson);
    const searchCity = idListArray.find(
        city => city.name.toLowerCase() === promptCity.toLowerCase(),
    );
    if (!searchCity) return false;
    return searchCity.id;
};

module.exports = cityId;

// const fs = require('fs');
// const path = require('path');
// const idListPath = path.join(__dirname, 'id-list.json');

// const cityId = promptCity => {
//   const idListJson = fs.readFileSync(idListPath);
//   const idListArray = JSON.parse(idListJson);
//   const searchCity = idListArray.find(
//     city => city.name.toLowerCase() === promptCity.toLowerCase(),
//   );
//   if (!searchCity) return 'Your city not found!!!';
//   return searchCity.id;
// };
// console.log(cityId('Kiv'));
