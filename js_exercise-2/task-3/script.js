const input = document.querySelector('.input');
const result = document.querySelector('.result');

let arr = [5,1,2,1,2,3,4,3,2,3,1,3,4,5,3,5,5,6,7,5,4,];
let newArr = arr.sort();
let obj = {};
let count = 0;
let acMax =0
let tempMax
let value;
let resultValues = [];

input.innerHTML = `Given array = [${arr}]`;

for( let i = 0; i< newArr.length; i++) {
  if(arr.length == 1) {
    value = arr[0]
    break;
  }
  if(i === 0) {
    count = 1;
    obj[newArr[i]] = 1;
  } else {
    if(newArr[i] != newArr[i-1]) {
      tempMax = count;
      count = 1;
      obj[newArr[i]] = 1;
    } else {
      obj[newArr[i]] += 1;
      count++;
      tempMax = count;
    }
    if(tempMax >= acMax) {
      acMax = tempMax;
      value = newArr[i-1];
    }
  }
}

for(let val in obj) {
  if(obj[val] === obj[value]) {
    resultValues.push(val);
  }
}


result.innerHTML = `Most frequent value = [${resultValues}]`

