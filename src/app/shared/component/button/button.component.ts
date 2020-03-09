import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Input() text: string;
  @Output() clickButton: EventEmitter<boolean> = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit(): void {
  }

  clickEventButton(event) {
    console.log(event);
    if (event) {
      this.clickButton.next(true);
    }
  }

}
