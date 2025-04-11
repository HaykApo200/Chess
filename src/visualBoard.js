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
        this.drawPiecesWhenStartGame = this.drawPiecesWhenStartGame(this.matrix, this.ctx);
        
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

    drawPiecesWhenStartGame(board,ctx){
        let squareSize = this.size/8;
        for(let i = 0; i < board.length; i++){
            for(let j = 0; j < board.length; j++){ 
                    if(typeof(board[i][j]) == "object"){
                    const image = new Image();
                    image.src = board[i][j].src;
                    image.onload = function(){
                        ctx.drawImage(image, ((j) * squareSize), ((i) * squareSize), squareSize, squareSize);
                    }
                }
             }
         }
    }




}


export {VisualBoard}