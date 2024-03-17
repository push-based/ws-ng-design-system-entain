import {
  booleanAttribute,
  ChangeDetectionStrategy,
  Component,
  Input,
  signal,
} from '@angular/core';

@Component({
  selector: 'ds-tab4',
  template: `
    <div
      role="tabpanel"
      [style.display]="selected() ? 'block' : 'none'"
      [attr.aria-hidden]="!selected()"
    >
      <!-- Needed to capture all the content of the tab -->
      <ng-content />
    </div>
  `,
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Tab4 {
  @Input() title?: string;
  @Input({ transform: booleanAttribute }) disabled = false;

  selected = signal(false);
}
