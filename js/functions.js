const getLengthString = (string, length) => string.length <= length;

function getLengthStringTwo (string, length) {
  return string.length <= length;
}


const line = 'Кекс был в Гренландии';
const size = 22;

getLengthString(line, size);
getLengthStringTwo(line, size);

function isPolidrom(string) {
  const userString = string.replaceAll(' ' , '').toLowerCase();
  for(let i = 0; i < userString.length / 2; i++) {
    if (userString[i] !== userString[userString.length - 1 - i]) {
      return false;
    }

    return true;
  }
}
isPolidrom('Лёша на полке клопа нашёл ');


const testString = 'wefi23783few24fw'.toString();
function extractNumber(arg) {
  let result = '';

  for(let i = 0; i < arg.length; i++) {
    if(!Number.isNaN(parseInt(arg[i], 10))) {
      result += arg[i];
    }
  }

  return result;

}
extractNumber(testString);


// const extractNumber = (string) => {
//   if (typeof string === 'number') {
//     return string;
//   }

//   let result = '';
//   for (let i = 0; i < string.length; i++) {
//     if ( !Number.isNaN(parseInt(string.at(i), 10))) {
//     result += string.at(i);
//     }
//   }

//   return parseInt(result, 10);
// }
