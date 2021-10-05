import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() public label: string = 'A label';
  @Input() public bgColor: string = 'red';
  @Input() public fontSize: number = 13;
  
  constructor() { }

  ngOnInit(): void {
  }

}
