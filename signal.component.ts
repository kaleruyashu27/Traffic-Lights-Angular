import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signal',
  templateUrl: './signal.component.html',
  styleUrls: ['./signal.component.scss']
})
export class SignalComponent implements OnInit {
  static: any;
  constructor() { }

  ngOnInit(): void {
  }

turnOnRed(){
  this.static = 'red';
  
}
turnOnYellow(){
  this.static = 'yellow';
  
}
turnOnGreen(){
  this.static = 'green';
 
}

}
