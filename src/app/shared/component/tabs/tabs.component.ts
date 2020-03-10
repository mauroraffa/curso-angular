import { Component, OnInit, ViewChild, QueryList, ContentChildren, AfterContentInit } from '@angular/core';
import { TabComponent } from './tab/tab.component';
import { ITab } from './tab/tab.interface';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit, AfterContentInit {

  @ContentChildren(TabComponent) tabs: QueryList<TabComponent>;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterContentInit() {
    this.selectTab(this.tabs.find(x => x.isActive) ? this.tabs.find(x => x.isActive) : this.tabs.first);
  }

  selectTab(tab: ITab) {
    if (!tab.disabled) {
      this.tabs.forEach(aux => aux.isActive = false);
      tab.isActive = true;
    }
  }



}
