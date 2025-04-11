import { Piece } from "./piece.js";

class Bishop extends Piece{
    constructor(color, row, col){
        super(color,row,col);
        this.src = (this.color === "W") ? "images/bishopW.png" :  "images/bishopB.png";
    }
    

}

export {Bishop}