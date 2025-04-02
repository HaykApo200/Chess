class Board{
    constructor(domElements,size){
        this.size = size;
        this.domElements = domElements;
        this.canvas = this.createCnavas();
        this.ctx = this.canvas.getContext('2d');
        this.defaultFoo = this.defaultFoo();

        this.canvas.addEventListener('click', this.getCoordinates.bind(this));
    }

    defaultFoo(){
        this.paintChessBoard();
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

    getCoordinates(event) {
        const rect = this.canvas.getBoundingClientRect(); 
        const x = event.clientX - rect.left;  
        const y = event.clientY - rect.top;   

        const squareSize = this.size / 8;
        const col = Math.floor(x / squareSize) + 1;
        const row = 9 - (Math.floor(y / squareSize) + 1);

        console.log(`Position: Row = ${row}, Column = ${col}`);
    }

}

export {Board};