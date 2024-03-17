import { Component } from '@angular/core';
import { TabsSettingsComponent } from '../tabs-settings.component';
import { NgSwitch, NgSwitchCase } from '@angular/common';
import { TabGroup1 } from '@ng-ds-ws/ui';

@Component({
  selector: 'app-exercise-1',
  template: `
    <div>
      <h4>Exercise 1</h4>
      <h3>Tabs Component</h3>
      <p>Todos: <br /></p>
      <ul>
        <li>Add input to make tabs dynamic</li>
        <li>Add input to give make tabs full width</li>
        <li>Add input to give make tabs centered</li>
      </ul>
      <div>
        <app-tabs-settings
          [(activeIndex)]="activeIndex"
          [(fullWidth)]="fullWidth"
          [(centered)]="centered" />
        <br />
        <hr />
        <br />
      </div>
    </div>

    <ds-tab-group1 />

    <ng-container [ngSwitch]="activeIndex">
      <div *ngSwitchCase="0">Tab1 content</div>
      <div *ngSwitchCase="1">Tab2 content</div>
      <div *ngSwitchCase="2">Tab3 content</div>
    </ng-container>
  `,
  standalone: true,
  imports: [NgSwitch, NgSwitchCase, TabsSettingsComponent, TabGroup1],
})
export class Exercise1 {
  tabs = [
    { title: 'Tab1' },
    { title: 'Tab2' },
    { title: 'Tab3', disabled: true },
  ];

  activeIndex = 0;
  fullWidth = false;
  centered = false;
}
