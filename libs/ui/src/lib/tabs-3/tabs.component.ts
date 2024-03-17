import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'ds-tab-group3',
  template: `
    <ul
      class="tab-header-items"
      [class.full-width-tabs]="fullWidthTabs"
      [class.centered-tabs]="centeredTabs"
    >
      @for (tab of tabs; track tab.title) {
        <li
          class="tab-header-item"
          [class.selected]="activeIndex === $index"
          [attr.aria-selected]="activeIndex === $index ? 'true' : null"
          [class.disabled]="tab.disabled"
          [attr.aria-disabled]="tab.disabled ? 'true' : null"
          (click)="!tab.disabled ? selectTab($index) : null"
          role="tab"
        >
          {{ tab.title }}
        </li>
      }
    </ul>
  `,
  styleUrl: './tabs.component.scss',
  standalone: true,
})
export class TabGroup3 {
  @Input() tabs: Array<{ title: string; disabled?: boolean }> = [];

  @Input() fullWidthTabs: boolean = false;

  @Input() centeredTabs: boolean = false;

  @Input() activeIndex: number = 0;
  @Output() activeIndexChange = new EventEmitter<number>();

  selectTab(index: number) {
    this.activeIndexChange.emit(index);
  }
}
