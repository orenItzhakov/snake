import { Injectable } from '@angular/core';
import { Snake } from './snake';
import { Subject ,Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class SnakeService {
  fruit : any = this.fruit = { x : null , y : null};;
  snake : Snake;
  snakeSubject : Subject<Snake> = new Subject<Snake>();
  snakeObservable:Observable<Snake>;
  interval;

  constructor() {
    this.snakeObservable = this.snakeSubject.asObservable();
  } 

  randomFruit(){
    var x = Math.floor( Math.random() * (19));
    var y = Math.floor( Math.random() * (19));
    var flag = true;
    while (flag) {
      flag = false;
      for (let i = 0; i < this.snake.points.length; i++) {
        if( this.snake.points[i].x == x && this.snake.points[i].y == y){
          flag = true;
        }
      }
    }
    this.fruit = { x : x , y:y};
  }

  startGame(){
    this.snake = new Snake();
    this.randomFruit();

    this.interval = setInterval(()=>{
      if(!this.snake.gameState){
        clearInterval(this.interval);
        console.log("Game over");
      }

      this.snake.move(true);
      this.snakeSubject.next(this.snake);
    }, 100);
  }

  changeDirection(direction : string){
    this.snake.newDirection(direction);
  }

  addOne(){
    this.snake.move(false);
    this.randomFruit();
  }

}
