import { Piece } from "./piece.js";

class Knight extends Piece{
    constructor(color, row, col){
        super(color,row,col);
        this.src = (this.color === "W") ? "images/knightW.png" :  "images/knightB.png";
    }
    
    getValidSteps(matrix) {
        const validSteps = [];
        const moves = [
            [-2, -1], [-2, 1],
            [-1, -2], [-1, 2],
            [1, -2], [1, 2],
            [2, -1], [2, 1]
        ];
    
        const enemyColor = this.color === "W" ? "B" : "W";
        const row = this.row;
        const col = this.col;
    
        const isInBounds = (r, c) => r >= 0 && r < matrix.length && c >= 0 && c < matrix[0].length;
    
        for (let [dr, dc] of moves) {
            const newRow = row + dr;
            const newCol = col + dc;
    
            if (isInBounds(newRow, newCol)) {
                const cell = matrix[newRow][newCol];
                if (cell === '-' || (typeof cell === 'object' && cell.color === enemyColor)) {
                    validSteps.push([newRow, newCol]);
                }
            }
        }
    
        return validSteps;
    }

}

export {Knight}