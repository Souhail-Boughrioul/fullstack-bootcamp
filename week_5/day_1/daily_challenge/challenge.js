// 1st daily challenge
const makeAllCaps = (arr)=>{
    return new Promise((resolve,reject)=>{
        if(arr.length > 0 && arr.every(item => typeof item === 'string')){
            const upperArr = arr.map(item => item.toUpperCase());
            resolve(upperArr)
         }else{
            reject('there is some element that are not string')
         }
}
)
}

const sortWords = (arr)=>{
    return new Promise((resolve,reject)=>{
        if(arr.length > 4){
            const sortedArr = arr.sort();
            resolve(sortedArr)
        }else{
            reject('the length of the array is less than 4')
        }
    })
}

makeAllCaps(['apple','orange','ananas','tomato','banana'])
.then((arr)=> sortWords(arr))
.then((result)=> console.log(result))
.catch((err)=> console.log(err))


// 2nd daily challenge

// Morse JSON data
const morse = `{
  "0": "-----", "1": ".----", "2": "..---", "3": "...--", "4": "....-",
  "5": ".....", "6": "-....", "7": "--...", "8": "---..", "9": "----.",
  "a": ".-", "b": "-...", "c": "-.-.", "d": "-..", "e": ".", "f": "..-.",
  "g": "--.", "h": "....", "i": "..", "j": ".---", "k": "-.-", "l": ".-..",
  "m": "--", "n": "-.", "o": "---", "p": ".--.", "q": "--.-", "r": ".-.",
  "s": "...", "t": "-", "u": "..-", "v": "...-", "w": ".--", "x": "-..-",
  "y": "-.--", "z": "--..", ".": ".-.-.-", ",": "--..--", "?": "..--..",
  "!": "-.-.--", "-": "-....-", "/": "-..-.", "@": ".--.-.", "(": "-.--.",
  ")": "-.--.-", " ": "/"
}`;

// Convert JSON string → JS object
const toJs = () => {
  return new Promise((resolve, reject) => {
    try {
      const morseJS = JSON.parse(morse);
      if (Object.keys(morseJS).length === 0) {
        reject("Morse object is empty!");
      } else {
        resolve(morseJS);
      }
    } catch (error) {
      reject("Invalid JSON format!");
    }
  });
};

// Convert text → Morse
const toMorse = (morseJS, text) => {
  return new Promise((resolve, reject) => {
    const translation = [];
    const lowerText = text.toLowerCase().trim();

    for (let char of lowerText) {
      if (morseJS[char]) {
        translation.push(morseJS[char]);
      } else {
        reject(`Character "${char}" not found in Morse dictionary!`);
        return; 
      }
    }

    resolve(translation);
  });
};

// Join Morse symbols
const joinWords = (morseTranslation) => {
  const output = morseTranslation.join("\n");
  console.log("Morse Translation:\n");
  console.log(output);
};

// Chain all together
const userInput = "hello world"; //  You can change this

toJs()
  .then((morseObj) => toMorse(morseObj, userInput))
  .then((translation) => joinWords(translation))
  .catch((err) => console.error("Error:", err));
