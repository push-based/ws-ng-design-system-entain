import { Component } from '@angular/core';
import { Exercise1 } from './exercise-1/exercise1.component';
import { Exercise2 } from './exercise-2/exercise-2.component';
import { Exercise3 } from './exercise-3/exercise-3.component';
import { Exercise4 } from './exercise-4/exercise-4.component';
import { Exercise5 } from './exercise-5/exercise-5.component';
import { Exercise6 } from './exercise-6/exercise-6.component';
import { DsIconButton } from '@ng-ds-ws/ui';

@Component({
  standalone: true,
  selector: 'ng-ds-ws-root',
  imports: [
    Exercise1,
    Exercise2,
    Exercise3,
    Exercise4,
    Exercise5,
    Exercise6,
    DsIconButton,
  ],
  template: `
    <!--    <app-exercise-1 />-->
    <!--    <app-exercise-2 />-->
    <!--    <app-exercise-3 />-->
    <!--    <app-exercise-4 />-->
    <!--    <app-exercise-5 />-->
    <!--    <app-exercise-6 />-->
    <ds-icon-button>
      <span #icon>play_arrow</span>
    </ds-icon-button>
  `,
})
export class AppComponent {}
