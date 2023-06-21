const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
    debugger;
  }

  return gifts;
}

wrapGifts(gifts);

function writeCards(stringArray,eventName) {
    const emptyArray = [];
    for (let i = 0; i < stringArray.length; i++) {
    emptyArray[i] = (`Thank you, ${stringArray[i]}, for the wonderful ${eventName} gift!`);
    }
    return emptyArray;

}

function countDown(number) {
    let countdown = number;
    while (countdown >= 0) {
        console.log(countdown--);
    }
}