import { VisualBoard } from "./visualBoard.js";
import { Pawn } from "./Pieces/pawn.js";
import { Rook } from "./Pieces/rook.js";
import { Queen } from "./Pieces/queen.js";
import { King } from "./Pieces/king.js";
import { Knight } from "./Pieces/knight.js";
import { Bishop } from "./Pieces/bishop.js";

class Board{
    constructor(domElements,size){
        this.size = size; // canvas size => ceil size = size / 8
        this.domElements = domElements;
        this.canvas = this.createCnavas();
        this.ctx = this.canvas.getContext('2d');

        this.kingW = null;
        this.kingB = null;

        this.kingWDanger = false;
        this.kingBDanger = false;

        this.matrix = this.createMatrixAndFillObj();
        this.visualBoard = new VisualBoard(this.canvas,this.ctx,this.matrix, this.size);
        
        this.moveW = true; // Whose turn
        this.stepCout = 0; // How many steps were there
        this.currPossibleSteps = []; // When you click on a piece, the possible moves of that piece are stored here.
        this.currPiece = null; // Current piece
        this.moveSound = new Audio("sound/stepSound.mp3");

        this.canvas.addEventListener('click', this.gameController.bind(this));

       
        console.log([this.kingW, this.kingB]);
        
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
                this.kingB = matrix[0][4];

                matrix[7][i] = new Queen("W", 7, i);
                matrix[7][4] = new King("W", 7, 4);
                this.kingW = matrix[7][4];
            }

        }
        return matrix;
    }

    // kingIsInCheck(moveW){
    //     const matrix = this.matrix;
    //     const color = moveW ? "B" : "W";

    //     //Check where is King
    //     let kingPos = null;
    //     for(let r = 0; r < matrix.length;r++){
    //         for(let c = 0;c < matrix.length;c++){ 
    //             if((typeof matrix[r][c] == "object") && (matrix[r][c].name == "K") && (matrix[r][c].color == color)){
    //                 kingPos = [r,c];
    //                 break;
    //             }
    //         }
    //         if (kingPos) break;
    //     }
        
    //     for (let r = 0; r < matrix.length; r++) {
    //         for (let c = 0; c < matrix.length; c++) {
    //             if (typeof matrix[r][c] === "object") {
    //                 const validSteps = matrix[r][c].getValidSteps(this.matrix);
    //                 for (let i = 0; i < validSteps.length; i++) {
    //                     if ((validSteps[i][0] === kingPos[0]) && (validSteps[i][1] === kingPos[1])) {
    //                         console.log(true);
    //                         return true;  
    //                     }
    //                 }
    //             }
    //         }
    //     }
    
    //     console.log(false);
    //     return false;  
    // }

    
    
    gameController(event) {
        const rect = this.canvas.getBoundingClientRect(); 
        const x = event.clientX - rect.left;  
        const y = event.clientY - rect.top;   
    
        const squareSize = this.size / 8;
        const col = Math.floor(x / squareSize);
        const row = Math.floor(y / squareSize);
    
        const selectedCell = this.matrix[row][col];
        const sameCellClicked = this.currPiece && this.currPiece[0] === row && this.currPiece[1] === col;
    
        const currMoveCol = this.moveW ? "W" : "B";
    
        if (this.currPiece == null || this.matrix[this.currPiece[0]][this.currPiece[1]].color == currMoveCol) {
            let moveItem = false;
    
            //When you move piece
            if (this.currPossibleSteps.length !== 0) {
                this.currPossibleSteps.forEach((cord) => {
                    if (cord[0] == row && cord[1] == col) {
                        this.visualBoard.movePiece(this.matrix[this.currPiece[0]][this.currPiece[1]], row, col);
                        this.visualBoard.removePossibleSteps(this.currPossibleSteps);
                        this.currPossibleSteps = [];
                        this.currPiece = null;
                        //this.kingIsInCheck(this.moveW);
                        const checkDanger = (currMoveCol == "W") ? this.kingB.kingIsInCheck(this.matrix) : this.kingW.kingIsInCheck(this.matrix);
                        this.moveW = !this.moveW;
                        moveItem = true;
                        this.moveSound.play();
                        this.stepCout++;
                    }
                });
            }
    
            //When you don't make a move, you instead change the selected piece or close its possible moves.
            if (!moveItem) {
                if (sameCellClicked) {
                    if (this.currPossibleSteps.length > 0) {
                        this.visualBoard.removePossibleSteps(this.currPossibleSteps);
                        this.currPossibleSteps = [];
                    } else {
                        if (typeof selectedCell === "object" && selectedCell.color === currMoveCol) {
                            this.currPossibleSteps = selectedCell.getValidSteps(this.matrix);
                            this.visualBoard.paintPossibleSteps(this.currPossibleSteps);
                        }
                    }
                } else {
                    if (this.currPossibleSteps.length > 0) {
                        this.visualBoard.removePossibleSteps(this.currPossibleSteps);
                        this.currPossibleSteps = [];
                    }
    
                    if (typeof selectedCell === "object" && selectedCell.color === currMoveCol) {
                        this.currPossibleSteps = selectedCell.getValidSteps(this.matrix);
                        this.visualBoard.paintPossibleSteps(this.currPossibleSteps);
                        this.currPiece = [row, col];
                    } else {
                        this.currPiece = null;
                    }
                }
            }
        }
    }
}

export {Board};

