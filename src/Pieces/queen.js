import { Piece } from "./piece.js";

class Queen extends Piece{
    constructor(color, row, col){
        super(color,row,col);
        this.src = (this.color === "W") ? "images/queenW.png" :  "images/queenB.png";
    }
    
    getValidSteps(matrix) {
        const validSteps = [];
        const directions = [
            [-1, 0],  
            [1, 0],   
            [0, -1],  
            [0, 1],   
            [-1, -1], 
            [-1, 1],  
            [1, -1],  
            [1, 1]    
        ];
    
        const enemyColor = this.color === "W" ? "B" : "W";
        const row = this.row;
        const col = this.col;
    
        const isInBounds = (r, c) =>
            r >= 0 && r < matrix.length && c >= 0 && c < matrix[0].length;
    
        for (let [dr, dc] of directions) {
            let newRow = row + dr;
            let newCol = col + dc;
    
            while (isInBounds(newRow, newCol)) {
                const cell = matrix[newRow][newCol];
                if (cell === '-') {
                    validSteps.push([newRow, newCol]);
                } else if (typeof cell === 'object' && cell.color === enemyColor) {
                    validSteps.push([newRow, newCol]);
                    break;
                } else {
                    break; 
                }
    
                newRow += dr;
                newCol += dc;
            }
        }
    
        return validSteps;
    }
}

export {Queen}