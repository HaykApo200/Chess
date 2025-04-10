import { Board_Size_With_Pixels as size,
         Board_Parent_Div as parent} 
        from "./config.js";

import { Board } from "./board.js";

import { Pawn } from "./Pieces/pawn.js";

//Get important DOM elements and manage num and letters flexibilty
const lettersContent = document.getElementById('letters-content');
const numsContent = document.getElementById('nums-content');

const letterBox = document.getElementsByClassName('letter');
const numberBox = document.getElementsByClassName('num');

[...letterBox].forEach((val) => {
        val.style.width = `${size / 8}px`;
        val.style.fontSize = `${size / 16}px`
});   
[...numberBox].forEach((val) => {
        val.style.height = `${size / 8}px`;
        val.style.paddingTop = `${size / 32}px`;
        val.style.fontSize = `${size / 16}px`
});
const domElements = [parent,lettersContent,numsContent];

const board = new Board(domElements,size);



// let pawn = new Pawn("w", 5,6);
// 

// console.log(pawn);

