class Piece{
    constructor(color, row, col){
       this.color = color;
       this.row = row;
       this.col = col;
       this.x = this.col + 1;
       this.y = 8 - this.row; 
    }

    
}

export {Piece}