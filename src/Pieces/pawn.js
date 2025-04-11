import { Piece } from "./piece.js";

class Pawn extends Piece{
    constructor(color, row, col){
        super(color,row,col);
        this.src = (this.color === "W") ? "images/pawnW.png" :  "images/pawnB.png";
    }
    

}

export {Pawn}