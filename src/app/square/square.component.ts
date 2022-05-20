import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-square',
  template: `<button class="btn btn-primary fs-3">{{ value }}</button>`,
  styleUrls: ['./square.component.css']
})
export class SquareComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input () value : 'X' | 'O' | undefined;

}
