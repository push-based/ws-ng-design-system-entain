import { NgFor } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'ds-tab-group2',
  template: `
    <ul
      class="tab-header-items"
      [class.full-width-tabs]="fullWidthTabs"
      [class.centered-tabs]="centeredTabs"
    >
      <li
        *ngFor="let tab of tabs; let i = index"
        class="tab-header-item"
        [class.selected]="activeIndex === i"
        [attr.aria-selected]="activeIndex === i ? 'true' : null"
        [class.disabled]="tab.disabled"
        [attr.aria-disabled]="tab.disabled ? 'true' : null"
        (click)="!tab.disabled ? selectTab(i) : null"
        role="tab"
      >
        {{ tab.title }}
      </li>
    </ul>
  `,
  styleUrl: './tabs.component.scss',
  imports: [NgFor],
  standalone: true,
})
export class TabGroup2 {
  @Input() tabs: Array<{ title: string; disabled?: boolean }> = [];

  @Input() fullWidthTabs: boolean = false;

  @Input() centeredTabs: boolean = false;

  @Input() activeIndex: number = 0;
  @Output() activeIndexChange = new EventEmitter<number>();

  selectTab(index: number) {
    this.activeIndexChange.emit(index);
  }
}
