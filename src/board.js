import { VisualBoard } from "./visualBoard.js";
import { Pawn } from "./Pieces/pawn.js";
import { Rook } from "./Pieces/rook.js";
import { Queen } from "./Pieces/queen.js";
import { King } from "./Pieces/king.js";
import { Knight } from "./Pieces/knight.js";
import { Bishop } from "./Pieces/bishop.js";

class Board{
    constructor(domElements,size){
        this.size = size;
        this.domElements = domElements;
        this.canvas = this.createCnavas();
        this.ctx = this.canvas.getContext('2d');

        this.matrix = this.createMatrixAndFillObj();
        this.visualBoard = new VisualBoard(this.canvas,this.ctx,this.matrix, this.size);
        
        this.moveW = true;
        
        
        this.canvas.addEventListener('click', this.getCoordinates.bind(this));
    }

    createCnavas(){
        const canvas = document.createElement('canvas');
        canvas.width = this.size;
        canvas.height = this.size;
        canvas.style.border = '2px solid black'
        this.domElements[0].appendChild(canvas);
        this.domElements[1].style.width = `${this.size}px`;
        this.domElements[2].style.height = `${this.size}px`;
        return canvas;
    }


    createMatrixAndFillObj(){
        let matrix = [];
        
        for(let i = 0; i < 8; i++){
            matrix[i] = [];
            for(let j = 0; j < 8; j++){
                matrix[i][j] = "-";
            }
        }

        for(let i = 0; i < 8; i++){
            matrix[1][i] = new Pawn("B", 1, i);
            matrix[6][i] = new Pawn("W", 6, i);
            if(i == 0){
                matrix[0][i] = new Rook("B", 0, i);
                matrix[0][7] = new Rook("B", 0, 7);

                matrix[7][i] = new Rook("W", 7, i);
                matrix[7][7] = new Rook("W", 7, 7);
            }else if (i == 1){
                matrix[0][i] = new Knight("B", 0, i);
                matrix[0][6] = new Knight("B", 0, 6);

                matrix[7][i] = new Knight("W", 7, i);
                matrix[7][6] = new Knight("W", 7, 6);
            }else if (i == 2){
                matrix[0][i] = new Bishop("B", 0, i);
                matrix[0][5] = new Bishop("B", 0, 5);

                matrix[7][i] = new Bishop("W", 7, i);
                matrix[7][5] = new Bishop("W", 7, 5);
            }else if(i == 3){
                matrix[0][i] = new Queen("B", 0, i);
                matrix[0][4] = new King("B", 0, 4);

                matrix[7][i] = new Queen("W", 7, i);
                matrix[7][4] = new King("W", 7, 4);
            }

        }
        return matrix;
    }

    getCoordinates(event) {
        const rect = this.canvas.getBoundingClientRect(); 
        const x = event.clientX - rect.left;  
        const y = event.clientY - rect.top;   

        const squareSize = this.size / 8;
        const col = Math.floor(x / squareSize); // Math.floor(x / squareSize) + 1;
        const row = Math.floor(y / squareSize);  //9 - (Math.floor(y / squareSize) + 1);

        console.log(`Position: Row = ${row}, Column = ${col}`);
    }

}

export {Board};

