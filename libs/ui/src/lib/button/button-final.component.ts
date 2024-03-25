import { Component, Input } from '@angular/core';

@Component({
  selector: 'button[ds-button]',
  standalone: true,
  styleUrl: './button.component.scss',
  host: {
    type: 'button',
    class: 'btn',
    '[class]': '[size, variant]',
    '[class.disabled]': 'disabled',
    '[attr.aria-disabled]': 'disabled',
  },
  template: `
    <ng-content select="[slot=start]" />
    <ng-content />
    <ng-content select="[slot=end]" />
  `,
})
export class ButtonFinal {
  @Input() disabled = false;

  @Input() size: ButtonSize = 'md';
  @Input() variant: ButtonVariant = 'primary';
}

type ButtonSize = 'sm' | 'md' | 'lg' | 'xl';
type ButtonVariant = 'primary' | 'success' | 'ghost' | 'secondary';
