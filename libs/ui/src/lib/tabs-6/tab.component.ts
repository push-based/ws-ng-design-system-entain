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
import { DsTabHeader } from './tabs.directives';

export interface DsTabContext {
  $implicit: boolean;
  index: number;
}

@Component({
  selector: 'ds-tab6',
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
export class Tab6 {
  @Input() title?: string;
  @Input({ transform: booleanAttribute }) disabled = false;

  @ContentChild(DsTabHeader) customHeader?: DsTabHeader | null = null;

  // Template based
  @ContentChild('dsTabHeader') headerTpl?: TemplateRef<DsTabContext> | null =
    null;
  @ContentChild('dsTabContent') contentTpl?: TemplateRef<DsTabContext> | null =
    null;

  selected = signal(false);
}
