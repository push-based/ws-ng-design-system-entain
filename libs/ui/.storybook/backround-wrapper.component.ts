import {ChangeDetectionStrategy, Component, Input} from "@angular/core";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'background-wrapper',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div [ngStyle]="{'background': background}">
      <ng-container *ngComponentOutlet="story"></ng-container>
    </div>
  `,
})
export class BackgroundWrapperComponent {
  @Input() story: any;
  @Input() background!: string;
}
