//  Letters
const letters = "abcdefghijklmnopqrstuvwxyz";

//  Get Array From Letters
let lettersArray = Array.from(letters);

//  Select Letters Containers
let lettersContainer = document.querySelector(".letters");

//  Generate Letters

lettersArray.forEach(letter => {
    // Create Span
    let span = document.createElement("span");

    // Create Letter Text Node
    let theLetter = document.createTextNode(letter);

    // Append Letter To Span
    span.appendChild(theLetter);

    // Add Class To Span
    span.className = `letter-box`;

    // Append Span To The Letters Container
    lettersContainer.appendChild(span);
});

// Object Of Words + Categoris
const words = {
    programing: ["php" , "c" , "python" , "java" , "javascript" , "go" , "sql" , "dart" , "kotlin"],
    movies: ["the godfather" , "the dark knight" , "The Matrix"],
    people: ["Mohamed Saad", "Shikabla", "tamer hosny" , "Amr diab"],
    countris: ["Tunsia" , "Egypt" , "Syria" , "england" , "qatar"]
}
// Get Random Category
let keys = Object.keys(words);
// Random number on keys length
let randomPrpNumber = Math.floor(Math.random() * keys.length);
// Category
let randomPropName = keys[randomPrpNumber];
// Category words
let randomPropValue = words[randomPropName];
// Random number on words
let randomValueNumber = Math.floor(Math.random() * randomPropValue.length);
// chossen word
let randomValueValue = randomPropValue[randomValueNumber];


// Set Category Info
document.querySelector(".game-info span").innerHTML = randomPropName;

// select letters guess container
let letterGuessContainer = document.querySelector(".letters-guess");

// convert chossen word to array
let lettersAndSpaces = Array.from(randomValueValue);

// create span debend on word

lettersAndSpaces.forEach(letter =>{
    // crearte empty span
    let span = document.createElement("span");

    // if letter is space
    if(letter === " "){
        // add class to span
        span.className = "has-space";
    }
    // Append Span To The Letters Guess
    letterGuessContainer.appendChild(span);

});
// select guess span 
let guessSpans =document.querySelectorAll(".letters-guess span");

// set wrong attempts
let wrongAttempts = 0;

// select the draw element
let theDraw = document.querySelector(".hangman-draw");

// handle cliciking in letters
document.addEventListener("click",(e) => {
    // set the chose stauts
    let theStatus = false;

    if(e.target.className === `letter-box`) {
        e.target.classList.add(`clicked`);
        
        // Get Clicked Letter
        let theClickedLetter = e.target.innerHTML.toLowerCase();
        // The Chossen Letter
        let theChossenLetter = Array.from(randomValueValue.toLowerCase());

        theChossenLetter.forEach((wordLetter , wordIndex) => {
            // if the clicked letter equal of the chossen word letter
            if(theClickedLetter == wordLetter ) {
                // correct status
                theStatus = true;
                guessSpans.forEach((span , spanIndex)=>{
                    if(wordIndex == spanIndex) {
                        span.innerHTML = wordLetter;
                    }
                });
            }
        });
        // if letter is wrong
        if(theStatus !== true) {
            // increase the wrong atempts
            wrongAttempts +=1;
            // add class wrong on the draw element
            theDraw.classList.add(`wrong-${wrongAttempts}`);
            // play fail sound
            document.querySelector(".fail").play()

            if(wrongAttempts === 8 ) {
                endGame();
                lettersContainer.classList.add("finished");
            }
        }else {
            document.querySelector(".success").play()
        }
    }
});
function endGame(){
    let div = document.createElement("div");
    let divText = document.createTextNode(`Game Over The Word Is ${randomValueValue}`);
    div.appendChild(divText);
    div.className = `poupp`;
    document.body.appendChild(div);
}
