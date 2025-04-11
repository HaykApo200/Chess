import { Pawn } from "./Pieces/pawn.js";
import { Rook } from "./Pieces/rook.js";
import { Queen } from "./Pieces/queen.js";
import { King } from "./Pieces/king.js";
import { Knight } from "./Pieces/knight.js";
import { Bishop } from "./Pieces/bishop.js";

class VisualBoard{
    constructor(canvas,ctx,matrix,size){
        this.canvas = canvas;
        this.ctx = ctx;
        this.matrix = matrix;
        this.size = size;
        this.paintChessBoard = this.paintChessBoard();
        this.drawPieceInStart = this.drawBoard(this.matrix, this.ctx);
        
    }

    paintChessBoard(){
        let squareSize = this.size/8;

        for(let row = 0; row < 8; row++){
            for(let col = 0; col < 8; col++){
                if ((row + col) % 2 === 0) {
                    this.ctx.fillStyle = '#b58863';
                } else {
                    this.ctx.fillStyle = '#f0d9b5'; 
                }
                this.ctx.fillRect(col * squareSize, row * squareSize, squareSize, squareSize); 
            }
        }
    }


    drawBoard(board,ctx){
        let squareSize = this.size/8;
        for(let i = 0; i < board.length; i++){
            for(let j = 0; j < board.length; j++){ 

                if((board[i][j] instanceof Pawn) && (board[i][j].color === "W")){
                    const image = new Image();
                    image.src = "images/pawnW.png";
                    image.onload = function() {
                        ctx.drawImage(image, ((j) * squareSize), ((i) * squareSize), squareSize, squareSize); 
                    };
                }

                if((board[i][j] instanceof Pawn) && (board[i][j].color === "B")){
                    const image = new Image();
                    image.src = "images/pawnB.png";
                    image.onload = function() {
                        ctx.drawImage(image, ((j) * squareSize), ((i) * squareSize), squareSize, squareSize); 
                    };
                }

                if((board[i][j] instanceof Rook) && (board[i][j].color === "B")){
                    const image = new Image();
                    image.src = "images/rookB.png";
                    image.onload = function() {
                        ctx.drawImage(image, ((j) * squareSize), ((i) * squareSize), squareSize, squareSize); 
                    };
                }

                if((board[i][j] instanceof Rook) && (board[i][j].color === "W")){
                    const image = new Image();
                    image.src = "images/rookW.png";
                    image.onload = function() {
                        ctx.drawImage(image, ((j) * squareSize), ((i) * squareSize), squareSize, squareSize); 
                    };
                }

                if((board[i][j] instanceof King) && (board[i][j].color === "B")){
                    const image = new Image();
                    image.src = "images/kingB.png";
                    image.onload = function() {
                        // ctx.drawImage(image, ((8*75) - (board[i][j].x*75)), ((8 * 75) - board[i][j].y*75), board[i][j].x + 73, board[i][j].y + 75); 
                        ctx.drawImage(image, ((j) * squareSize), ((i) * squareSize), squareSize, squareSize); 
                    };
                }

                if((board[i][j] instanceof King) && (board[i][j].color === "W")){
                    const image = new Image();
                    image.src = "images/kingW.png";
                    image.onload = function() {
                        ctx.drawImage(image, ((j) * squareSize), ((i) * squareSize), squareSize, squareSize); 
                    };
                }

                if((board[i][j] instanceof Queen) && (board[i][j].color === "B")){
                    const image = new Image();
                    image.src = "images/queenB.png";
                    image.onload = function() {
                        ctx.drawImage(image, ((j) * squareSize), ((i) * squareSize), squareSize, squareSize); 
                    };
                }

                if((board[i][j] instanceof Queen) && (board[i][j].color === "W")){
                    const image = new Image();
                    image.src = "images/queenW.png";
                    image.onload = function() {
                        ctx.drawImage(image, ((j) * squareSize), ((i) * squareSize), squareSize, squareSize); 
                    };
                }

                if((board[i][j] instanceof Bishop) && (board[i][j].color === "B")){
                    const image = new Image();
                    image.src = "images/bishopB.png";
                    image.onload = function() {
                        ctx.drawImage(image, ((j) * squareSize), ((i) * squareSize), squareSize, squareSize); 
                    };
                }

                if((board[i][j] instanceof Bishop) && (board[i][j].color === "W")){
                    const image = new Image();
                    image.src = "images/bishopW.png";
                    image.onload = function() {
                        ctx.drawImage(image, ((j) * squareSize), ((i) * squareSize), squareSize, squareSize); 
                    };
                }

                if((board[i][j] instanceof Knight) && (board[i][j].color === "B")){
                    const image = new Image();
                    image.src = "images/knightB.png";
                    image.onload = function() {
                        ctx.drawImage(image, ((j) * squareSize), ((i) * squareSize), squareSize, squareSize); 
                    };
                }

                if((board[i][j] instanceof Knight) && (board[i][j].color === "W")){
                    const image = new Image();
                    image.src = "images/knightW.png";
                    image.onload = function() {
                        ctx.drawImage(image, ((j) * squareSize), ((i) * squareSize), squareSize, squareSize); 
                    };
                }

            }
        }
    }

}




export {VisualBoard}