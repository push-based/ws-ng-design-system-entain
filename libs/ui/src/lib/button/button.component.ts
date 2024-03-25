import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ds-button',
  standalone: true,
  imports: [CommonModule],
  styleUrl: './button.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <button
      type="button"
      class="btn"
      [ngClass]="hostClass"
      [class.disabled]="disabled"
      [attr.aria-disabled]="disabled"
      (click)="onClick()">
      <ng-content select="[start]" />
      <span>{{ label }}</span>
      <ng-content select="[end]" />
    </button>
  `,
})
export class Button {
  @Input() label = '';

  @Input() size: 'sm' | 'md' | 'lg' | 'xl' = 'md';

  @Input() disabled = false;

  @Input() variant: 'primary' | 'success' | 'ghost' | 'secondary' = 'primary';

  @Output()
  buttonClick = new EventEmitter<Event>();

  get hostClass() {
    return `${this.size} ${this.variant}`;
  }

  onClick() {
    this.buttonClick.emit();
  }
}
