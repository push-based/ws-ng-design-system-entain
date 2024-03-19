import { Component } from '@angular/core';
import { TabsSettingsComponent } from '../tabs-settings.component';
import { Tab5, TabGroup5 } from '@ng-ds-ws/ui';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { heroArchiveBox } from '@ng-icons/heroicons/outline';

@Component({
  selector: 'app-exercise-5',
  template: `
    <div>
      <h4>Exercise 5</h4>
      <h3>Tabs Component</h3>
      <p>Todos: <br /></p>
      <ul>
        <li>Use directives for typechecking</li>
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

    <ds-tab-group5
      [(activeIndex)]="activeIndex"
      [centeredTabs]="centered"
      [fullWidthTabs]="fullWidth"
    >
      <ds-tab5>
        <ng-template #dsTabHeader let-selected let-i="index">
          <span>Tab{{ i + 1 }} header</span>
          @if (selected) {
            <ng-icon name="heroArchiveBox" />
          }
        </ng-template>
        <ng-template #dsTabContent>
          <span>Tab1 content {{ log(1) }}</span>
        </ng-template>
      </ds-tab5>
      <ds-tab5 title="Tab 2">
        <ng-template #dsTabHeader let-selected let-i="index">
          <span>Tab{{ i + 1 }} header</span>
          @if (selected) {
            <ng-icon name="heroArchiveBox" />
          }
        </ng-template>
        <ng-template #dsTabContent>
          <span>Tab2 content {{ log(2) }}</span>
        </ng-template>
      </ds-tab5>
      <ds-tab5 title="Tab 3" disabled="true">
        <div>Tab3 content {{ log(3) }}</div>
      </ds-tab5>
    </ds-tab-group5>
  `,
  standalone: true,
  imports: [TabsSettingsComponent, TabGroup5, Tab5, NgIcon],
  providers: [provideIcons({ heroArchiveBox })],
})
export class Exercise5 {
  activeIndex = 0;
  fullWidth = false;
  centered = false;

  log(tabNumber: number) {
    console.log(`Tab${tabNumber} content`);
    return 1;
  }
}
