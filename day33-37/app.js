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

// 2. Get access to the parent element that should hold the new element

let firstParagraph = document.querySelector('p'); //first default

// 3. Insert the new element into the parent element content

firstParagraph.append(newAnchorElement);