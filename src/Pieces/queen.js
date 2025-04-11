import { Piece } from "./piece.js";

class Queen extends Piece{
    constructor(color, row, col){
        super(color,row,col);
        this.src = (this.color === "W") ? "images/queenW.png" :  "images/queenB.png";
    }
    

}

export {Queen}