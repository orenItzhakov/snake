import { Component } from '@angular/core';
import { Snake } from './snake';
import { SnakeService } from  "./snake.service";

declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  host: {
    '(document:keydown)': 'handleKey($event)'
  }
})

export class AppComponent {
  snake : Snake ;
  score : number = -1;
  rows = Array(20).fill(0).map((x,i)=>Array(20).fill(0).map((x,i)=>i));
  constructor(private snakeService : SnakeService){
    this.snakeService.snakeObservable.subscribe((data)=>{
      this.snake = data;
      this.score = this.snake.points.length-4 ;
      this.backgroundColor();
    });
  }

  handleKey(event: KeyboardEvent) {
    if(event.key == "ArrowDown" || event.key == "ArrowUp" || event.key == "ArrowRight" || event.key == "ArrowLeft" ) this.snakeService.changeDirection(event.key);
  }

  backgroundColor(){
    $('.cube').removeClass("color");
    $('.cube').removeClass("fruit");
    $('#cube' + this.snakeService.fruit.x + "_"+ this.snakeService.fruit.y).addClass("fruit");
    for (let i = this.snake.points.length-1; i >= 0 ; i--){
      $('#cube' + this.snake.points[i].x + "_"+ this.snake.points[i].y).addClass("color");
    }
    if(this.snake.points[this.snake.points.length-1].x == this.snakeService.fruit.x && this.snake.points[this.snake.points.length-1].y == this.snakeService.fruit.y){
      this.snakeService.addOne();
      console.log("eat");
    }
  }

  startGame(){
    this.snakeService.startGame();
    this.score = 0; 
  }
}