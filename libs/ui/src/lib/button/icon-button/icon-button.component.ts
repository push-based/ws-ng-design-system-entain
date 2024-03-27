import { Component, ContentChild, ElementRef } from '@angular/core';

@Component({
  selector: 'ds-icon-button',
  standalone: true,
  template: `
    <button (click)="toggleContent()">
      <ng-content></ng-content>
    </button>
  `,
})
export class DsIconButton {
  @ContentChild('icon') iconElementRef?: ElementRef;

  toggleContent() {
    if (this.iconElementRef) {
      if (
        this.iconElementRef?.nativeElement?.textContent?.includes('play_arrow')
      ) {
        this.iconElementRef.nativeElement.textContent = 'pause';
      } else {
        this.iconElementRef.nativeElement.textContent = 'play_arrow';
      }
    }
  }
}
