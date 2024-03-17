import { Component } from '@angular/core';
import { TabsSettingsComponent } from '../tabs-settings.component';
import { NgSwitch, NgSwitchCase } from '@angular/common';
import { TabGroup2 } from '@ng-ds-ws/ui';

@Component({
  selector: 'app-exercise-2',
  template: `
    <div>
      <h4>Exercise 2</h4>
      <h3>Tabs Component</h3>
      <p>Todos: <br /></p>
      <ul>
        <li>Convert TabGroup2 to use &#64;for()</li>
        <li>Convert Exercise2 to use &#64;switch()</li>
      </ul>
      <div>
        <app-tabs-settings
          [(activeIndex)]="activeIndex"
          [(fullWidth)]="fullWidth"
          [(centered)]="centered"
        />
        <br />
        <hr />
        <br />
      </div>
    </div>

    <ds-tab-group2
      [tabs]="tabs"
      [(activeIndex)]="activeIndex"
      [centeredTabs]="centered"
      [fullWidthTabs]="fullWidth"
    />

    <ng-container [ngSwitch]="activeIndex">
      <div *ngSwitchCase="0">Tab1 content</div>
      <div *ngSwitchCase="1">Tab2 content</div>
      <div *ngSwitchCase="2">Tab3 content</div>
    </ng-container>
  `,
  standalone: true,
  imports: [NgSwitch, NgSwitchCase, TabsSettingsComponent, TabGroup2],
})
export class Exercise2 {
  tabs = [
    { title: 'Tab1' },
    { title: 'Tab2' },
    { title: 'Tab3', disabled: true },
  ];

  activeIndex = 0;
  fullWidth = false;
  centered = false;
}
