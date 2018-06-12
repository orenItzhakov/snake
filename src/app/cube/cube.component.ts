import { Component, OnInit ,Input} from '@angular/core';
import { SnakeService } from  "../snake.service";
import { Snake } from '../snake';

@Component({
  selector: 'app-cube',
  templateUrl: './cube.component.html',
  styleUrls: ['./cube.component.scss']
})
export class CubeComponent implements OnInit {
  @Input() location : any;
  constructor(private snakeService : SnakeService) {
  }
  ngOnInit() {
  }

}
