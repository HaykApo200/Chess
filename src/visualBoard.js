class VisualBoard{
    constructor(canvas,ctx,matrix,size){
        this.canvas = canvas;
        this.ctx = ctx;
        this.matrix = matrix;
        this.size = size;
        this.paintChessBoard = this.paintChessBoard();
        this.drawPiecesWhenStartGame = this.drawPiecesWhenStartGame();
        
    }

    paintChessBoard(){
        const squareSize = this.size/8;

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

    drawPiecesWhenStartGame(){
        const squareSize = this.size/8;
        const ctx = this.ctx;
        const matrix = this.matrix;
        
        for(let i = 0; i < matrix.length; i++){
            for(let j = 0; j < matrix.length; j++){ 
                    if(typeof(matrix[i][j]) == "object"){
                    const image = new Image();
                    image.src = matrix[i][j].src;
                    image.onload = function(){
                        ctx.drawImage(image, ((j) * squareSize), ((i) * squareSize), squareSize, squareSize);
                    }
                }
             }
         }
    }

    paintPossibleSteps(cordMatrix){
        const squareSize = this.size / 8;
        cordMatrix.forEach((cord) => {
            console.log(this.matrix);
            
        const row = cord[0];
        const col = cord[1];
        const ctx = this.ctx;

            if(typeof this.matrix[row][col] !== 'object'){   
                ctx.fillStyle = 'rgba(99, 96, 96, 0.5)';
                const centerX = col * squareSize + squareSize / 2;
                const centerY = row * squareSize + squareSize / 2;
                const radius = squareSize / 6; 
        
                ctx.beginPath();
                ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
                ctx.fill();
            }else{
                const image = new Image();
                image.src = this.matrix[row][col].src;
                image.onload = function() {
                    
                ctx.fillStyle = 'rgba(255, 0, 0, 0.4)';
                ctx.fillRect(col * squareSize, row * squareSize, squareSize, squareSize); 
                ctx.drawImage(image, col * squareSize, row * squareSize, squareSize, squareSize);

                  
                };
            }


        });

    }

    removePossibleSteps(cordMatrix){
        const squareSize = this.size/8;
        const ctx = this.ctx; 
        const matrix = this.matrix;

        cordMatrix.forEach((cord) => {

            const row = cord[0];
            const col = cord[1];

            if((row + col) % 2 === 0){
                this.ctx.fillStyle = '#b58863';
            }else{
                this.ctx.fillStyle = '#f0d9b5';
            }
            this.ctx.fillRect(col * squareSize, row * squareSize, squareSize, squareSize); 
            if(typeof this.matrix[row][col] == 'object'){
                const image = new Image();
                image.src = this.matrix[row][col].src;
                image.onload = function(){
                    ctx.drawImage(image, ((col) * squareSize), ((row) * squareSize), squareSize, squareSize);
                }
            }
        });
    }


}


export {VisualBoard}