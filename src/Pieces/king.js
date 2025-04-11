import { Piece } from "./piece.js";

class King extends Piece{
    constructor(color, row, col){
        super(color,row,col);
        this.src = (this.color === "W") ? "images/kingW.png" :  "images/kingB.png";
    }
    

}

export {King}