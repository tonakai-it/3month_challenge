// console.log(window);
/** window.alert() == alert() */
// console.log(window.document);
/** console.dir(document) // head // chirdren //body */


document.body.children[1].children[0].href = 'https://google.com';

let anchorElement = document.getElementById("external-link");
anchorElement.href = "https://google.com";

anchorElement = document.querySelector('#external-id');
anchorElement.href = "https://google.com";

anchorElement = document.querySelector('p a'); // like CSS selector
anchorElement.href = "https://google.com";


// ADD AN ELEMENT
// 1. Create the new element

let newAnchorElement = document.createElement('a');
newAnchorElement.href = "https://google.com";
newAnchorElement.textContent = "The leads to Google."

// 2. Get access to the parent element that should hold the new element
let firstParagraph = document.querySelector('p'); //first default

// 3. Insert the new element into the parent element content
firstParagraph.append(newAnchorElement);


// REMOVE ELEMENT
// 1. Select the element that should be removed
let firstH1Element = document.querySelector('h1');

// 2. Remove it!
firstH1Element.remove();
// firstH1Element.parentElement.removeChild(firstH1Element) this is older browser


// MOVE ELEMENTS
firstParagraph.parentElement.append(firstParagraph);

// INNERHTML innerHTML
console.log(firstParagraph.innerHTML, firstParagraph.textContent);
firstParagraph.innerHTML = 'Hi! This is <strong>important</strong>' + 'another pattern'; //this is disabled by textContent
