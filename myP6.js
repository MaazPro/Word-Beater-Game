/*
#levels
#seconds
#current-word
#word-input
#time
#score
*/
window.addEventListener('load',init);

const myLevels = document.querySelector('#levels');
const mySeconds = document.querySelector('#seconds');
const myCurrentWord = document.querySelector('#current-word');
const myWordInput = document.querySelector('#word-input');
const myTime = document.querySelector('#time');
const myScore = document.querySelector('#score');
const myMessage = document.querySelector('#message');
// alert(myLevels + mySeconds + myCurrentWord + myWordInput + myTime + myScore);


mySeconds.innerHTML = myLevels.value;
let time = myLevels.value;
let score = 0;
let isPlaying;

const words = [
    'hat',
    'river',
    'lucky',
    'statue',
    'generate',
    'stubborn',
    'cocktail',
    'runaway',
    'joke',
    'developer',
    'establishment',
    'hero',
    'javascript',
    'nutrition',
    'revolver',
    'echo',
    'siblings',
    'investigate',
    'horrendous',
    'symptom',
    'laughter',
    'magic',
    'master',
    'space',
    'definition'
];

myWordInput.addEventListener('input',updateValues);
myLevels.addEventListener('change', setLevels);

function init(){

    setInterval(checkStatus,5);
    setInterval(countDown,1000);
    showWord(words);
}

function setLevels(time){
time = myLevels.value;
mySeconds.innerHTML = myLevels.value;

}

function updateValues(){
    if(matchWords()){
        myWordInput.value = '';
        showWord(words);
        // setLevels(time);
        time = myLevels.value;
        score++;
        mySeconds.innerHTML = myLevels.value;
    
    if(score === -1)
    {
        score = 0;
    }

    myScore.innerHTML = score;
    mySeconds.innerHTML = myLevels.value;    

    }  
}
var index = 0;
var textArray; //from_words.split("")
var from_words;
var inputArray;
function matchWords(){
    inputArray = myWordInput.value;
    inputArray.split('');

    
    myWordInput.onkeyup = (event) => {
        if(event.keyCode === 8){
            if(index > 1)
            {
            index--;
            }
        //  console.log(event.keyCode);
        }
    };
    
        // console.log( " *This* " + inputArray[index] + " *MATCHED WITH* " + from_words[index] + " *AT INDEX *: " + index);
        // console.log( "Before the if statement: "+ index)
    if( from_words[index] === inputArray[index]){
        myWordInput.style.color = "blue" ;
        // console.log( " *This* " + inputArray[index] + " *MATCHED WITH* " + from_words[index] + " *AT INDEX *: " + index);
        index++;
    }else{
        myWordInput.style.color = "red";
        // console.log( "Value not matched" + " " + from_words[index]);
    }
    // console.log( "After the if statement: "+ index)


    if(myWordInput.value === myCurrentWord.innerHTML){

        return true;
    }
    else{

        return false;
    }
}

function checkStatus(){
    if( !isPlaying && time === 0){
        myMessage.innerHTML = "Game Over !";
        score = -1;
    }else{
        myMessage.innerHTML = "";
    }
}

function countDown(){
    if(time > 0){
        time --;
        myLevels.disabled = true;

    }
    else{
        isPlaying = false;
        myLevels.disabled = false;
    }
    myTime.innerHTML = time;
}


var previousRandomIndex = null;
function showWord(words){
    const randomIndex = Math.floor( Math.random() * words.length ) ;
   
    // const randomIndex = 2;
    console.log(previousRandomIndex + " *:* " + randomIndex);

    
        if(previousRandomIndex === randomIndex ){
            myCurrentWord.style.color = "green";
        }
        else{
            myCurrentWord.style.color = "white";
        }
    

    previousRandomIndex = randomIndex;

    myCurrentWord.innerHTML = words[randomIndex];
    from_words = words[randomIndex];
    index = 0;
    // textArray = from_words.split('');
    from_words.split('');
    
}