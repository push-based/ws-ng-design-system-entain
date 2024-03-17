import { Component } from '@angular/core';
import { TabsSettingsComponent } from '../tabs-settings.component';
import { TabGroup3 } from '@ng-ds-ws/ui';

@Component({
  selector: 'app-exercise-3',
  template: `
    <div>
      <h4>Exercise 3</h4>
      <h3>Tabs Component</h3>
      <p>Todos: <br /></p>
      <ul>
        <li>Refactor to use content projection and ng-content</li>
        <li>Create a Tab component to use to project content</li>
        <li>Make use of ContentChildren for dynamic content</li>
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

    <ds-tab-group3
      [tabs]="tabs"
      [(activeIndex)]="activeIndex"
      [centeredTabs]="centered"
      [fullWidthTabs]="fullWidth"
    >
    </ds-tab-group3>

    @switch (activeIndex) {
      @case (0) {
        <div>Tab1 content</div>
      }
      @case (1) {
        <div>Tab2 content</div>
      }
      @case (2) {
        <div>Tab3 content</div>
      }
    }
  `,
  standalone: true,
  imports: [TabsSettingsComponent, TabGroup3],
})
export class Exercise3 {
  tabs = [
    { title: 'Tab1' },
    { title: 'Tab2' },
    { title: 'Tab3', disabled: true },
  ];

  activeIndex = 0;
  fullWidth = false;
  centered = false;
}
