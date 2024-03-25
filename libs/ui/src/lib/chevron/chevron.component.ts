import { Component } from '@angular/core';

@Component({
  selector: 'chevron',
  standalone: true,
  template: `
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M7.74352 11.8127L1.53662 5.81266L2.46332 4.854L8.1906 10.3904L13.5204 4.87027L14.4796 5.79639L8.68647 11.7964C8.56361 11.9236 8.39522 11.9968 8.21836 11.9999C8.04151 12.0029 7.87069 11.9356 7.74352 11.8127Z"
                fill="black" />
        </svg>
    `,
  styles: [':host {display: inline-flex; justify-items: center; align-items: center; height: 100%;}'],
})
export class Chevron {}
