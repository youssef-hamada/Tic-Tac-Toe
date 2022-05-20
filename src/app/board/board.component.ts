import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  squares!:any[];
  xIsNext:boolean | undefined;
  winner!:string | null;
  draw!:boolean;

  constructor() { }

  ngOnInit(): void {
    this.newGame();
  }

  newGame(){
    this.squares = Array(9).fill(null)
    this.winner = null
    this.xIsNext = true
    this.draw = false;
  }


  
  public get player() : string {
    return this.xIsNext ? 'X' : 'O'
  }


  makeMove(id: number){
    if(!this.squares[id]){
      this.squares.splice(id,1,this.player);
      this.xIsNext = !this.xIsNext;
    }

    this.winner = this.calWinner();
    this.draw = this.calWinner()
    
  }

  calWinner(){
    const lines = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6],
    ]

    for(let i = 0 ; i < lines.length; i++){
      const [x,y,z] = lines[i]
      if(this.squares[x] && this.squares[x] === this.squares[y] && this.squares[x] == this.squares[z] ){
        return this.squares[x];
      }else if(!this.squares.includes(null)){
        return true;
      }
    }
  }
  

}
