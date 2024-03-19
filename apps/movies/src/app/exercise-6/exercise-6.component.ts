import { Component } from '@angular/core';
import { TabsSettingsComponent } from '../tabs-settings.component';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { heroArchiveBox } from '@ng-icons/heroicons/outline';
import { DsTabHeader, Tab6, TabGroup6 } from '@ng-ds-ws/ui';

@Component({
  selector: 'app-exercise-6',
  template: `
    <div>
      <h4>Exercise 6</h4>
      <h3>Tabs Component</h3>
      <p>Todos: <br /></p>
      <ul>
        <li>Make use of dynamic templates</li>
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

    <ds-tab-group6
      [(activeIndex)]="activeIndex"
      [centeredTabs]="centered"
      [fullWidthTabs]="fullWidth"
    >
      <ds-tab6>
        <ng-template dsTabHeader let-selected let-i="index">
          <span>Tab{{ i + 1 }} header</span>
          @if (selected) {
            <ng-icon name="heroArchiveBox" />
          }
        </ng-template>
        <div>Tab1 content</div>
      </ds-tab6>
      <ds-tab6>
        <div *dsTabHeader="let selected; let i = index">
          <span>Tab{{ i + 1 }} header</span>
          @if (selected) {
            <ng-icon name="heroArchiveBox" />
          }
        </div>
        <div>Tab2 content</div>
      </ds-tab6>
      <ds-tab6 disabled="true">
        <ng-template #dsTabHeader let-selected let-i="index">
          <span>Tab{{ i + 1 }} header</span>
          @if (selected) {
            <ng-icon name="heroArchiveBox" />
          }
        </ng-template>
        <div>Tab3 content</div>
      </ds-tab6>
      <ds-tab6 title="Tab 3">
        <div>Tab4 content</div>
      </ds-tab6>
    </ds-tab-group6>
  `,
  standalone: true,
  imports: [TabsSettingsComponent, NgIcon, TabGroup6, Tab6, DsTabHeader],
  providers: [provideIcons({ heroArchiveBox })],
})
export class Exercise6 {
  activeIndex = 0;
  fullWidth = false;
  centered = false;

  log(tabNumber: number) {
    console.log(`Tab${tabNumber} content`);
    return 1;
  }
}
