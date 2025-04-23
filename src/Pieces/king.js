import { Piece } from "./piece.js";

class King extends Piece{
    constructor(color, row, col){
        super(color,row,col);
        this.name = "K";
        this.src = (this.color === "W") ? "images/kingW.png" :  "images/kingB.png";
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
    
    kingIsInCheck(matrix){
        const color = (this.color == "W") ? "B" : "W";
        
        for (let r = 0; r < matrix.length; r++) {
            for (let c = 0; c < matrix.length; c++) {
                if (typeof matrix[r][c] === "object" && matrix[r][c].color == color){
                    const validSteps = matrix[r][c].getValidSteps(matrix);
                    for (let i = 0; i < validSteps.length; i++) {
                        if ((validSteps[i][0] === this.row) && (validSteps[i][1] === this.col)) {
                            console.log(true);
                            return true;  
                        }
                    }
                }
            }
        }
    
        console.log(false);
        return false;  
    }

}

export {King}