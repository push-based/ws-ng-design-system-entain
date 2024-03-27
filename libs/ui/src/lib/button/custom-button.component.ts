import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

@Component({
  selector: 'ds-custom-button',
  standalone: true,
  template: `<button [disabled]="disabled" (click)="onClick()">
    <ng-content/>
  </button>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DsCustomButton {
  @Input() disabled: boolean = false;
  @Input() label: string = 'Button label';
  @Output() buttonClick = new EventEmitter<void>();

  onClick() {
    this.buttonClick.emit();
  }
}
