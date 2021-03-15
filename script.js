/*
CREATING AN EVENT LISTENER
An 'event listener' is a code pattern that waits for a specific
event to happen, such as the click of a button, and then executes
or calls a function when (and only when) that event happens

We will create a function that will be executed when the
"Generate MadLib" button is clicked; the function will take the words
from the text input fields and insert them into the MadLib template text,
using a combination of document.querySelector() and ELEMENT.addEventListener()
*/

document.querySelector("#generate-madlib-submit").addEventListener("click", function() {

  /*
  THE VERBOSE SOLUTION

  When writing code, sometimes the best place to start is by writing code
  that will perform one of the key actions you want to see -- even if
  that code is very long and redundant.

  Then, you can figure out how to generalize the verbose solution
  to a more concise solution by noticing what stays the same
  and what changes in that key action

  var word1 = document.querySelector("input#word1").value;
  document.querySelector("span#word1").innerHTML = word1;

  var word2 = document.querySelector("input#word2").value;
  document.querySelector("span#word2").innerHTML = word2;

  */

  /*
  USING A FOR LOOP

  We will use a for loop in a sneaky way here:
  To individually retrieve each input value and place them
  where they belong in the MadLib text
  */

  for(var i = 1; i <= 36; i++) {
    var id = "word" + i;
    var input = document.querySelector("input#" + id);
    var value = input.value;

    /*
    After retrieving the values from the input fields,
    we can do some simple checks to see if the submitted word
    meets the required criteria (i.e., validate the form fields)
    */
    if(id === "word1" || id === "word15") {
      if(value.endsWith("ing") == false) {
        alert("You must enter a word that ends in -ing.");
        break;
      }
    }
    if(id === "word8") {
      if(value !== "days" && value !== "hours" && value !== "weeks" && value !== "seconds") {
        alert("Please choose one of the following: days, hours, weeks, seconds");
        break;
      }
    }

    /*
    If the value from the input field is empty, let's skip
    this insertion!
    */
    if(value === "") {
      continue;
    }

    /*
    Finally, we'll take the word from the input field and
    insert it into its corresponding placeholder in the MadLib text
    */
    document.querySelector("span#" + id).innerHTML = value;

  }

});

/*
CREATING ANOTHER EVENT LISTENER

We will create a function that will be executed when the
"Clear MadLib" button is clicked, which will clear all the
entries and return the MadLib text back to the template text
*/
document.querySelector("#clear-madlib").addEventListener("click", function() {
  for(var i = 1; i <= 36; i++) {
    var id = "word" + i;
    var wordElement = document.querySelector("span#" + id);
    wordElement.innerHTML = "[WORD]";
    document.querySelector("input#" + id).value = null;
  }
});
