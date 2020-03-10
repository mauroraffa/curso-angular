import { Component, OnInit, Input } from '@angular/core';
import { ITab } from './tab.interface';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss']
})
export class TabComponent implements ITab, OnInit {
  @Input() disabled = false;
  @Input() isActive = false;
  @Input() title = '';
  @Input() id = '';

  constructor() { }

  ngOnInit(): void {
  }

}
