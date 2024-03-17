import {
  Component,
  ChangeDetectionStrategy,
  Input,
  EventEmitter,
  Output,
} from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tabs-settings',
  template: `
    <br />

    <div style="margin-bottom: 10px;">
      <input
        type="number"
        [(ngModel)]="activeIndex"
        (ngModelChange)="activeIndexChange.emit($event)"
        [min]="0"
        id="activeNumber"
        style="width: 30px; font-size: 18px; border-radius: 5px; border: 1px solid #c5c5c5; margin-right: 10px" />
      <label for="activeNumber">Active Index</label>
    </div>

    <div
      style="display: flex; align-items: center; gap: 10px; margin-bottom: 10px;">
      <input
        style="width: 20px; height: 20px"
        type="checkbox"
        name="fullwidth"
        id="fullwidth"
        [checked]="fullWidth"
        (change)="fullWidthChange.emit($any($event.target).checked)" />
      <label for="fullwidth">Full width tabs</label>
    </div>

    <div style="display: flex; align-items: center; gap: 10px">
      <input
        style="width: 20px; height: 20px"
        type="checkbox"
        name="centered"
        id="centered"
        [checked]="centered"
        (change)="centeredChange.emit($any($event.target).checked)" />
      <label for="centered">Centered tabs</label>
    </div>
  `,
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [FormsModule],
})
export class TabsSettingsComponent {
  @Input() activeIndex: number = 0;
  @Output() activeIndexChange = new EventEmitter<number>();

  @Input() fullWidth: boolean = false;
  @Output() fullWidthChange = new EventEmitter<boolean>();
  @Input() centered: boolean = false;
  @Output() centeredChange = new EventEmitter<boolean>();
}
