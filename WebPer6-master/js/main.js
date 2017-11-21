const inputElement = document.querySelector('input');
const reader = new FileReader();
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext("2d");
const img = document.createElement('img');

inputElement.addEventListener('change', (evt) => {
    const file = inputElement.files[0];
reader.readAsDataURL(file);
});

reader.addEventListener('load', (evt) => {
    img.src = reader.result;
});

img.addEventListener('load', (evt) => {
    ctx.drawImage(img, 0, 0, 200, 200);
});

window.onload = function() {
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    var img = document.getElementById("scream");
    ctx.drawImage(img, 10, 10);
};
'use strict';

// valitaan elementit ja tehdään tarvittavat oliot
const inputElement = document.querySelector('input');
const zoom = document.querySelector('#zoom');
const leftRight = document.querySelector('#leftRight');
const upDown = document.querySelector('#upDown');

const img = document.createElement('img');

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const reader = new FileReader();

// muuttujat koordinaatteja varten
let x = 0;
let y = 0;
let originalX = 0;
let originalY = 0;

let originalWidth = 0;
let originalHeight = 200;
let width = 0;
let height = 0;


// tapahtumkuuntelijat

inputElement.addEventListener('change', (evt) => {
    const file = inputElement.files[0];
reader.readAsDataURL(file);
});

reader.addEventListener('load', (evt) => {
    img.src = reader.result;
});

img.addEventListener('load', (evt) => {
    console.log(img.height);
console.log(img.width);
originalWidth = originalHeight * img.width / img.height;
canvas.width = img.width;
canvas.height = img.height;
ctx.drawImage(img, 0, 0);
});

zoom.addEventListener('input', (evt) => {
    width = originalWidth * zoom.value;
    height = originalHeight * zoom.value;
redraw();
});

upDown.addEventListener('input', (evt) => {
    y = originalY - (upDown.value);
    redraw();
});
leftRight.addEventListener('input', (evt) => {
    x = originalX - (leftRight.value);
    redraw();
}

// tätä kutsutaan kun likusäätimiä (range) muutetaan
const redraw = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, x, y, width, height);
};

