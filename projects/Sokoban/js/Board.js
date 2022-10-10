export class Board{

    constructor(level2DArray){
   
        this.levelString = level2DArray;
        this.height = this.levelString.length;
        this.width = this.levelString[0].length;
        this.level[0][0] = new Wall
    }

    show(){
        
       const boardElement = document.querySelector(".board");
       console.log(boardElement);
       boardElement.style.gridTemplateRows = `repeat(${this.height}, 50px)`;
       boardElement.style.gridTemplateColumns = `repeat(${this.width}, 50px)`;
        debugger;
       for(const x of this.levelString){
        for(const y of x){
            const element = document.createElement("div");
            element.textContent =  y;
            boardElement.appendChild(element);
        }
       }
     

    }

}
