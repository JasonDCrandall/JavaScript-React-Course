let input = 'Greetings Human!';
const vowels = ['a', 'e', 'i', 'o', 'u'];
let resultArray = []; 

const getVowels = (phrase, vowelList) => {
  phrase = phrase.toLowerCase();
  let vowelArray = [];
  for (let i = 0; i < phrase.length; i++) {
    if (phrase[i]==='e' || phrase[i]==='u') {
      vowelArray.push(phrase[i]);
    }
    for (let j = 0; j < vowelList.length; j++) {
      if (phrase[i]===vowelList[j]){
        vowelArray.push(phrase[i]);
      }
    }
  }
  return vowelArray;
}
resultArray = getVowels(input,vowels);
let finalString = resultArray.join('').toUpperCase();
console.log(finalString);