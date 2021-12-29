let paragraphElement = document.querySelector('p');

function changeParagraphText(){
    paragraphElement.textContent = 'Clicked!';
    console.log("paragraph changed")
}

paragraphElement.addEventListener('click', changeParagraphText);




let inputElement = document.querySelector('input');

function retrieveUserInput(event) {
    let enteredText = inputElement.value;
    console.log(enteredText);
    console.log("@@@@@@@@@@@@@@@")
    console.log(event);
    enteredText = event.target.value;
    // event.data mean what charactor inputed, not text
}

inputElement.addEventListener('input', retrieveUserInput);