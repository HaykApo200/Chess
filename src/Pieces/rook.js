import { Piece } from "./piece.js";

class Rook extends Piece{
    constructor(color, row, col){
        super(color,row,col);
        this.src = (color === "W") ? "images/rookW.png" :"images/rookB.png";
    }
    

}

export {Rook}