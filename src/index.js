

import numeral from 'numeral';

const courseValue = numeral(1000).format('$0,0.00');

let arr = [3,2,1];

let newArr = [];

arr.forEach(element =>  {
   const filteredItems = arr.slice(0,arr.indexOf(element))
   .concat(arr.slice(arr.indexOf(element) + 1, arr.length));
  let arrSum = filteredItems.reduce((total, num)=>{
    return total * num;
  });
  newArr.push(arrSum);
});
console.log(newArr);

console.log(`I would pay ${courseValue} for this awesome course`);
