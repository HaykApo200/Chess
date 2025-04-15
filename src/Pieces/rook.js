import { Piece } from "./piece.js";

class Rook extends Piece{
    constructor(color, row, col){
        super(color,row,col);
        this.src = (color === "W") ? "images/rookW.png" :"images/rookB.png";
    }

    getValidSteps(matrix) {
        const validSteps = [];
        const directions = [
            [-1, 0], 
            [1, 0],  
            [0, -1], 
            [0, 1]   
        ];
    
        const enemyColor = this.color === "W" ? "B" : "W";
        const row = this.row;
        const col = this.col;
    
        const isInBounds = (r, c) => r >= 0 && r < matrix.length && c >= 0 && c < matrix[0].length;
    
        for (let [dr, dc] of directions) {
            let r = row + dr;
            let c = col + dc;
    
            while (isInBounds(r, c)) {
                const cell = matrix[r][c];
    
                if (cell === '-') {
                    validSteps.push([r, c]);
                } else {
                    if (typeof cell === 'object' && cell.color === enemyColor) {
                        validSteps.push([r, c]);
                    }
                    break; 
                }
    
                r += dr;
                c += dc;
            }
        }
    
        return validSteps;
    }

}

export {Rook}