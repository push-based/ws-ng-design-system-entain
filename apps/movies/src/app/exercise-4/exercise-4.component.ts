import { Component } from '@angular/core';
import { TabsSettingsComponent } from '../tabs-settings.component';
import { Tab4, TabGroup4 } from '@ng-ds-ws/ui';

@Component({
  selector: 'app-exercise-4',
  template: `
    <div>
      <h4>Exercise 4</h4>
      <h3>Tabs Component</h3>
      <p>Todos: <br /></p>
      <ul>
        <li>Make use of dynamic templates</li>
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

    <ds-tab-group4
      [(activeIndex)]="activeIndex"
      [centeredTabs]="centered"
      [fullWidthTabs]="fullWidth">
      <ds-tab4 title="Tab 1">
        <div>Tab1 content</div>
      </ds-tab4>
      <ds-tab4 title="Tab 2">
        <div>Tab2 content</div>
      </ds-tab4>
      <ds-tab4 title="Tab 3" disabled="true">
        <div>Tab3 content</div>
      </ds-tab4>
    </ds-tab-group4>
  `,
  standalone: true,
  imports: [TabsSettingsComponent, TabGroup4, Tab4],
})
export class Exercise4 {
  activeIndex = 0;
  fullWidth = false;
  centered = false;

  log(tabNumber: number) {
    console.log(`Tab${tabNumber} content`);
    return 1;
  }
}
