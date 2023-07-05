function writeCards(stringArray, eventName){
  let newArray = [];  
  for (let i=0; i < stringArray.length; i++){
    newArray.push(`Thank you, ${stringArray[i]}, for the wonderful ${eventName} gift!`)
  }
  return newArray;
}

// function countDown(number){
//   for (let i=number; i >= 0; i--)
//   console.log(i);
// }

function countDown(number){
  let i=number;
  while (i>=0){
    console.log(i--);
  }
}