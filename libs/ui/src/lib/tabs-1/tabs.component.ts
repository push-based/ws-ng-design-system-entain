import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'ds-tab-group1',
  template: `
    <ul class="tab-header-items">
      <li class="tab-header-item selected" role="tab">Tab 1</li>
      <li class="tab-header-item disabled" role="tab">Tab 2</li>
      <li class="tab-header-item" role="tab">Tab 3</li>
    </ul>
  `,
  styleUrl: './tabs.component.scss',
  imports: [NgFor],
  standalone: true,
})
export class TabGroup1 {}
