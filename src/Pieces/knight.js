import { Piece } from "./piece.js";

class Knight extends Piece{
    constructor(color, row, col){
        super(color,row,col);
        this.src = (this.color === "W") ? "images/knightW.png" :  "images/knightB.png";
    }
    

}

export {Knight}