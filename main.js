let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'Images/Mario and Luma.png') {
        myImage.setAttribute('src','Images/Luma and Mario.png');
    } else {
        myImage.setAttribute('src','Images/Mario and Luma.png');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName){
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        myHeading.innerHTML = 'This art is cool, ' + myName;
    }
    localStorage.setItem('name', myName);
    myHeading.textContent = 'This art is cool, ' + myName;
}
if(!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'This art is cool, ' + storedName;
}
myButton.onclick = function() {
    setUserName();
}