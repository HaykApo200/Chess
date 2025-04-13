import { Piece } from "./piece.js";

class Pawn extends Piece{
    constructor(color, row, col){
        super(color,row,col);
        this.src = (this.color === "W") ? "images/pawnW.png" :  "images/pawnB.png";
    }

    getValidSteps(matrix){
        const validSteps = [];
        const dir = this.color === "W" ? -1 : 1;
        const enemyColor = this.color === "W" ? "B" : "W";
        const row = this.row;
        const col = this.col;

        const isInBounds = (r, c) => r >= 0 && r < matrix.length && c >= 0 && c < matrix[0].length;
    
        if (isInBounds(row + dir, col) && matrix[row + dir][col] === '-') {
            validSteps.push([row + dir, col]);
            if ((this.color === "W" && row === 6) || (this.color === "B" && row === 1)) {
                if (isInBounds(row + 2 * dir, col) && matrix[row + 2 * dir][col] === '-') {
                    validSteps.push([row + 2 * dir, col]);
                }
            }
        }
        
        for (let dc of [-1, 1]) {
            const newRow = row + dir;
            const newCol = col + dc;
            if (isInBounds(newRow, newCol)) {
                const target = matrix[newRow][newCol];
                if (typeof target === 'object' && target.color === enemyColor) {
                    validSteps.push([newRow, newCol]);
                }
            }
        }
    
        return validSteps;
    }

}

export {Pawn}