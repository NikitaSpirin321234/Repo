class View{
    constructor(game){
        this.game = game;
        let name = localStorage["tetris.username"];
        let fullName;
        if(name)
            fullName = "Игрок: " + localStorage["tetris.username"];
        else {
            fullName = "Игрок: Player";
            localStorage["tetris.username"] = "Player";
        }
        document.getElementById("playerName").textContent = fullName;
    }

    viewBlock(context, code, x, y, width, height){
        let color = '';
        switch (code) {
            case 1:
                color = 'cyan';
                break;
            case 2:
                color = 'orange';
                break;
            case 3:
                color = 'blue';
                break;
            case 4:
                color = 'red';
                break;
            case 5:
                color = 'green';
                break;
            case 6:
                color = 'yellow';
                break;
            case 7:
                color = 'purple';
                break;
            case 8:
                color = 'brown';
                break;
            default:
                break;
        }
        if (color !== '') {
            context.fillStyle = color;
            context.strokeStyle = "black";
            context.strokeWidth = 1;
            context.fillRect(x * width, y * height, width, height);
            context.strokeRect(x * width, y * height, width, height);
        }

    }

}

export class ViewGameField extends View{
    canvas = document.getElementById("glass");
    context = this.canvas.getContext("2d");
    widthOfBlock = this.game.field.getBlockWidthPx;
    heightOfBlock = this.game.field.getBlockHeightPx;

    constructor(game){
        super(game);
    }

    viewGF(state){
        for(let y = 0; y < state.length; y++)
            for(let x = 0; x < state[y].length; x++) {
                let code = state[y][x];
                if (code) {
                    this.viewBlock(this.context, code, x, y, this.widthOfBlock, this.heightOfBlock);
                }
            }
    }

    viewGameOverScreen(){
        this.context.strokeStyle = "#ff3121";
        this.context.shadowColor = "#ff5445";
        this.context.shadowOffsetX = 1;
        this.context.shadowOffsetY = 1;
        this.context.font = "40pt Calibri";
        this.context.strokeText("Game over!", 25, 200);
        this.context.font = "22pt Calibri";
        this.context.strokeText("Your total score is " + this.game.score, 25, 250);
    }

    clearScreen(){
        this.context.clearRect(0, 0, this.game.field.getWidthPx, this.game.field.getHeightPx);
    }
}

export class ViewNextBrick extends View{
    canvas = document.getElementById("nextBrick");
    context = this.canvas.getContext("2d");
    widthOfBlock = this.game.field.getBlockWidthPx;
    heightOfBlock = this.game.field.getBlockHeightPx;

    constructor(game){
        super(game);
    }

    viewB(){
        let nextFigure = this.game.nextFigure;
        for(let y = 0; y < nextFigure.figure.length; y++)
            for(let x = 0; x < nextFigure.figure.length; x++) {
                let code = nextFigure.figure[y][x];
                if (code)
                    this.viewBlock(this.context, code, x, y, this.widthOfBlock, this.heightOfBlock);
            }
    }

    clearBrick(){
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

}