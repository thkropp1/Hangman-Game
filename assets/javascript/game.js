

function getRandomWord() { //Get random word from list
  word = words[Math.floor(Math.random() * words.length)];
  // set up the answer array with '_'
  console.log("Random word is: " + word);
  guessArray = []; // Write the number of '_' per letter in the word
  for (var i=0; i < word.length; i++) {
    guessArray[i] = "_";
  }
  console.log("guessArray is: " + guessArray);
  document.getElementById("message").innerHTML= "<h3>" + "Type a letter. You have up to 20 guesses." + "</h3>";
  document.getElementById("answer").innerHTML= "<h3>" + guessArray.join(" ") + "</h3>";
}

function reset() { // resets the game
      guessesLeft = 20; // reset guessesLeft counter
      document.getElementById("guess").innerHTML= "<h3>" + "Number of guesses remaining: " + guessesLeft + "</h3>";
      guessesList = []; // reset list of guesses
      document.getElementById("guessList").innerHTML= "<h3>" + "Letters already guessed: " + guessesList.join(" ") + "</h3>";
      getRandomWord(); // start a new game
}

function checkGuess(userInput) { // Check user input for a letter match 
  
    for (var i = 0; i < word.length; i++) {
        if (word[i] === userInput) {
           guessArray[i] = userInput; //Keep track of user's guesses
           console.log("Yay! " + userInput + " is a correct letter!");
           document.getElementById("answer").innerHTML= "<h3>" + guessArray.join(" ") + "</h3>";
           document.getElementById("guess").innerHTML= "<h3>" + "Number of guesses remaining: " + guessesLeft + "</h3>";
        }  // if
     } // for
    // Update the game for the remaining unknown letters
    var letters_left = guessArray.length;
    // count the remaining letters
    for (var i = 0; i < guessArray.length; i++) {
        if (guessArray[i] !== "_") {
          letters_left -= 1;
        } // if
    } // for

    // if there are no remaining letters, then you won!
    if (letters_left == 0) {
      console.log("Congrats! You guessed the word correctly!");
      alert("Congrats! You guessed the word correctly!");
      winCount++; // Add one to Wins
      console.log("Wins: " + winCount);
      document.getElementById("win").innerHTML= "<h3>" + "Wins: " + winCount + "</h3>";
      reset(); // resets the game
    } else {
          guessesLeft--; /* if it's an incorrect guess */
          console.log(userInput + " is an incorrect letter.");
          console.log("How many guesses are left: " + guessesLeft);
          document.getElementById("guess").innerHTML= "<h3>" + "Number of guesses remaining: " + guessesLeft + "</h3>";
    } //else

    if (guessesLeft === 0){ // No more guesses left
        alert("Sorry. The word is: " + word);
        reset(); // resets the game
    } // if 
} // function
