let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get',
 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you',
  'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];

//prints count of array
//console.log(secretMessage.length);
// remove last item from array

secretMessage.pop();

//console.log(secretMessage.length);


secretMessage.push("to", 'program');

// find the index of 'easily' *unncecessary step - just didn't feel like counting*

const replaceArray = (word) =>{

    for (let i = 0; i < secretMessage.length; i++){
        if (secretMessage[i] === word){
            return i;
        }
    }
}
// sets index of easily to variable
let indexOfEasily = replaceArray('easily');
//change the word 'easily' to the word 'right'
secretMessage[indexOfEasily] = 'right';

//remove the first string of the array
secretMessage.shift();

//add a new element to the beginning of the list
secretMessage.unshift("Programming");

// remove the strings 'get' 'right' 'the' 'first' 'time' and replace them with 'know'

secretMessage.splice(6, 5, 'know');

// joins the array 

let arrayString = secretMessage.join(" ");

console.log(arrayString);

