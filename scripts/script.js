// JavaScript Document

var audioGlass= document.querySelector("audio.glass");

var video1950 = document.querySelector("#video1950");

video1950.addEventListener("click", togglePlay1950);

function togglePlay1950() {
    if (video1950.paused) { 
        video1950.play();
    }
    else {
        video1950.pause();
    }
}

var video1960 = document.querySelector("#video1960");

video1960.addEventListener("click", togglePlay1960);

function togglePlay1960() {
    if (video1960.paused) { 
        video1960.play();
    }
    else {
        video1960.pause();
    }
}


var video1970 = document.querySelector("#video1970");

video1970.addEventListener("click", togglePlay1970);

function togglePlay1970() {
    if (video1970.paused) { 
        video1970.play();
    }
    else {
        video1970.pause();
    }
}


var video1980 = document.querySelector("#video1980");

video1980.addEventListener("click", togglePlay1980);

function togglePlay1980() {
    if (video1980.paused) { 
        video1980.play();
    }
    else {
        video1980.pause();
    }
}

var video1990 = document.querySelector("#video1990");

video1990.addEventListener("click", togglePlay1990);

function togglePlay1990() {
    if (video1990.paused) { 
        video1990.play();
    }
    else {
        video1990.pause();
    }
}

var video2000 = document.querySelector("#video2000");

video2000.addEventListener("click", togglePlay2000);

function togglePlay2000() {
    if (video2000.paused) { 
        video2000.play();
    }
    else {
        video2000.pause();
    }
}

var video2010 = document.querySelector("#video2010");

video2010.addEventListener("click", togglePlay2010);

function togglePlay2010() {
    if (video2010.paused) { 
        video2010.play();
    }
    else {
        video2010.pause();
    }
}

var video2020 = document.querySelector("#video2020");

video2020.addEventListener("click", togglePlay2020);

function togglePlay2020() {
    if (video2020.paused) { 
        video2020.play();
    }
    else {
        video2020.pause();
    }
}

const info1950button = document.querySelector("ol li:nth-of-type(1) > button");
const info1950dialog = document.querySelector("ol li:nth-of-type(1) dialog");

info1950button.addEventListener("click", openinfo1950dialog);

function openinfo1950dialog () {
	info1950dialog.showModal();
    audioGlass.play();
}

const info1960button = document.querySelector("ol li:nth-of-type(2) > button");
const info1960dialog = document.querySelector("ol li:nth-of-type(2) dialog");

info1960button.addEventListener("click", openinfo1960dialog);

function openinfo1960dialog () {
	info1960dialog.showModal();
    audioGlass.play();
}

const info1970button = document.querySelector("ol li:nth-of-type(3) > button");
const info1970dialog = document.querySelector("ol li:nth-of-type(3) dialog");

info1970button.addEventListener("click", openinfo1970dialog);

function openinfo1970dialog () {
	info1970dialog.showModal();
    audioGlass.play();
}

const info1980button = document.querySelector("ol li:nth-of-type(4) > button");
const info1980dialog = document.querySelector("ol li:nth-of-type(4) dialog");

info1980button.addEventListener("click", openinfo1980dialog);

function openinfo1980dialog () {
	info1980dialog.showModal();
    audioGlass.play();
}

const info1990button = document.querySelector("ol li:nth-of-type(5) > button");
const info1990dialog = document.querySelector("ol li:nth-of-type(5) dialog");

info1990button.addEventListener("click", openinfo1990dialog);

function openinfo1990dialog () {
	info1990dialog.showModal();
    audioGlass.play();
}

const info2000button = document.querySelector("ol li:nth-of-type(6) > button");
const info2000dialog = document.querySelector("ol li:nth-of-type(6) dialog");

info2000button.addEventListener("click", openinfo2000dialog);

function openinfo2000dialog () {
	info2000dialog.showModal();
    audioGlass.play();
}

const info2010button = document.querySelector("ol li:nth-of-type(7) > button");
const info2010dialog = document.querySelector("ol li:nth-of-type(7) dialog");

info2010button.addEventListener("click", openinfo2010dialog);

function openinfo2010dialog () {
	info2010dialog.showModal();
    audioGlass.play();
}



const info2020button = document.querySelector("ol li:nth-of-type(8) > button");
const info2020dialog = document.querySelector("ol li:nth-of-type(8) dialog");
const aside = document.querySelector("aside");

info2020button.addEventListener("click", openinfo2020dialog);

function openinfo2020dialog () {
	info2020dialog.showModal();
    audioGlass.play();
}

const info2020closebutton = document.querySelector("ol li:nth-of-type(8) dialog button");

info2020closebutton.addEventListener("click", groteBoem);

function groteBoem () {
	info2020button.classList.add("groteBoem");

    info2020button.addEventListener("animationend", groteSurprise);
}

function groteSurprise() {
    aside.classList.add("tadaa");
}
