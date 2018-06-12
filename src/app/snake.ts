export class Snake {
    x : number;
    y : number;
    len : number;
    direction : string;
    points : Array<any> = [];
    gameState :boolean;
    constructor() {
        this.len = 4;
        this.x = 10;
        this.y = 10;
        this.direction ="ArrowLeft";
        this.first();
        this.gameState = true;
    }

    first(){
        for (let i = this.len-1 ; i >=0 ; i--) {
            this.points.push( {
                x : this.x , 
                y : this.y + i
            } );
        }
    }

    move(condition : boolean){
        if(condition) this.points.splice(0, 1);
        if(this.direction =="ArrowDown"){
            if(this.x < 19) this.x++;
            else this.x = 0;
        }
        else if (this.direction =="ArrowUp"){
            if(this.x > 0) this.x--;
            else this.x = 19;
        }
        else if(this.direction =="ArrowRight"){
            if(this.y < 19) this.y++;
            else this.y = 0;
        }
        else{
            if(this.y > 0) this.y--;
            else this.y = 19;
        }

        this.checkValid();
    }

    newDirection(newDirection :string){
        var check = this.direction == "ArrowLeft" && newDirection=="ArrowRight" ||
                    this.direction == "ArrowRight" && newDirection=="ArrowLeft" ||
                    this.direction == "ArrowUp" && newDirection=="ArrowDown" ||
                    this.direction == "ArrowDown" && newDirection=="ArrowUp" ;
        if(!check) this.direction = newDirection;
    }

    addLength(){
        this.move(false);
    }

    checkValid(){
        for (let i = 0; i < this.points.length; i++) {
            if( this.points[i].x==this.x && this.points[i].y==this.y){
                this.gameOver();
                return;
            }
        }

        this.points.push({
            x : this.x , 
            y : this.y
        })

    }

    gameOver(){
        this.gameState = false;
        // this.points = [];
        this.points = [
            {x : 3 , y: 0},
            {x : 3 , y: 1},
            {x : 3 , y: 2},
            {x : 3 , y: 3},
            {x : 4 , y: 0},
            {x : 5 , y: 0},
            {x : 5 , y: 2},
            {x : 5 , y: 3},
            {x : 6 , y: 0},
            {x : 6 , y: 3},
            {x : 7 , y: 0},
            {x : 7 , y: 1},
            {x : 7 , y: 2},
            {x : 7 , y: 3},

            {x :  3, y: 5},
            {x :  3, y: 6},
            {x :  3, y: 7},
            {x :  3, y: 8},
            {x :  4, y: 5},
            {x :  4, y: 8},
            {x :  5, y: 5},
            {x :  5, y: 8},
            {x :  6, y: 5},
            {x :  6, y: 6},
            {x :  6, y: 7},
            {x :  6, y: 8},
            {x :  7, y: 5},
            {x :  7, y: 8},

            {x :  3, y: 10},
            {x :  3, y: 11},
            {x :  3, y: 12},
            {x :  3, y: 13},
            {x :  3, y: 14},
            {x :  4, y: 10},
            {x :  4, y: 12},
            {x :  4, y: 14},
            {x :  5, y: 10},
            {x :  5, y: 12},
            {x :  5, y: 14},           
            {x :  6, y: 10},
            {x :  6, y: 12},
            {x :  6, y: 14},         
            {x :  7, y: 10},
            {x :  7, y: 12},
            {x :  7, y: 14},
            
            {x :  3, y: 16},
            {x :  4, y: 16},
            {x :  5, y: 16},
            {x :  6, y: 16},
            {x :  7, y: 16},
            {x :  3, y: 17},
            {x :  3, y: 18},
            {x :  3, y: 19},
            {x :  5, y: 17},
            {x :  5, y: 18},
            {x :  5, y: 19},
            {x :  7, y: 17},
            {x :  7, y: 18},
            {x :  7, y: 19},

            {x :  10, y: 0},
            {x :  10, y: 1},
            {x :  10, y: 2},
            {x :  10, y: 3},
            {x :  14, y: 0},
            {x :  14, y: 1},
            {x :  14, y: 2},
            {x :  14, y: 3},
            {x :  11, y: 0},
            {x :  11, y: 3},
            {x :  12, y: 0},
            {x :  12, y: 3},
            {x :  13, y: 0},
            {x :  13, y: 3},
            
            {x :  10, y: 5},
            {x :  10, y: 8},
            {x :  11, y: 5},
            {x :  11, y: 8},
            {x :  12, y: 5},
            {x :  12, y: 8},
            {x :  13, y: 5},
            {x :  13, y: 8},
            {x :  14, y: 6},
            {x :  14, y: 7},
            
            {x :  10, y: 10},
            {x :  10, y: 11},
            {x :  10, y: 12},
            {x :  10, y: 13},
            {x :  12, y: 10},
            {x :  12, y: 11},
            {x :  12, y: 12},
            {x :  12, y: 13},
            {x :  14, y: 10},
            {x :  14, y: 11},
            {x :  14, y: 12},
            {x :  14, y: 13},
            {x :  11, y: 10},
            {x :  13, y: 10},
            
            {x :  10, y: 15},
            {x :  10, y: 16},
            {x :  10, y: 17},
            {x :  10, y: 18},
            {x :  10, y: 19},
            {x :  11, y: 15},
            {x :  11, y: 19},
            {x :  12, y: 15},
            {x :  12, y: 16},
            {x :  12, y: 17},
            {x :  12, y: 18},
            {x :  12, y: 19},
            {x :  13, y: 15},
            {x :  13, y: 19},
            {x :  14, y: 15},
            {x :  14, y: 19}
        ];
    }
}
