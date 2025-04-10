class VisualBoard{
    constructor(canvas,ctx,matrix,size){
        this.canvas = canvas;
        this.ctx = ctx;
        this.matrix = matrix;
        this.size = size;
        this.paintChessBoard = this.paintChessBoard();
        
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
    
}

export {VisualBoard}