import {
  booleanAttribute,
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  Input,
  signal,
  TemplateRef,
} from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';

export interface DsTabContext {
  $implicit: boolean;
  index?: number;
}

@Component({
  selector: 'ds-tab5',
  template: `
    <div
      role="tabpanel"
      [style.display]="selected() ? 'block' : 'none'"
      [attr.aria-hidden]="!selected()">
      <!-- Needed to capture all the content of the tab -->
      <ng-content />

      @if (selected() && !disabled) {
        <ng-container *ngTemplateOutlet="contentTpl ?? null" />
      }
    </div>
  `,
  imports: [NgTemplateOutlet],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Tab5 {
  @Input() title?: string;
  @Input({ transform: booleanAttribute }) disabled = false;

  // Template based
  @ContentChild('dsTabHeader') headerTpl?: TemplateRef<DsTabContext> | null =
    null;
  @ContentChild('dsTabContent') contentTpl?: TemplateRef<DsTabContext> | null =
    null;

  selected = signal(false);
}
