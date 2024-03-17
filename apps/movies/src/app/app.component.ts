import { Component } from '@angular/core';
import { Exercise1 } from './exercise-1/exercise1.component';
import { Exercise2 } from './exercise-2/exercise-2.component';
import { Exercise3 } from './exercise-3/exercise-3.component';

@Component({
  standalone: true,
  selector: 'ng-ds-ws-root',
  imports: [Exercise1, Exercise2, Exercise3],
  template: `
    <app-exercise-1 />
    <!-- <app-exercise-2 /> -->
    <!-- <app-exercise-3 />-->
  `,
})
export class AppComponent {}
