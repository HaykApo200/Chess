class Piece{
    constructor(color, x, y){
       this.color = color;
       this.x = x;
       this.y = y; 
       this.matrixX = x - 1;
       this.matrixY = 8 - y;    
    }
}

export {Piece}