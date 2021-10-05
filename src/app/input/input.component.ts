import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
  @Input() public label: string = "A label";
  @Input() public placeholder: string = "A placeholder";
  @Input() public type: 'text' | 'password' | 'email' = "text";

  constructor() { }

  ngOnInit(): void {
  }

  @ViewChild('input', { static: false }) input: ElementRef<HTMLInputElement>;

  get text(): string {
    return this.input.nativeElement.value;
  }
}
