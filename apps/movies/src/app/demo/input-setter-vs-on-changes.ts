// import { Component, Input, SimpleChanges } from '@angular/core';
//
// @Component({
//   selector: 'child',
//   standalone: true,
//   template: ` {{ input1 }} {{ input2 }} `,
// })
// export class Child {
//   @Input() input1: string = '';
//   @Input() input2: string = '';
//
//   ngOnChanges(changes: SimpleChanges) {
//     console.log(changes);
//   }
//
//   // _input1: string = 'none';
//   // _input2: string = 'none';
//   //
//   // @Input() set input1(value: string) {
//   //   this._input1 = value;
//   //   console.log('onInput 1 change, input2 -> ', this.input2);
//   // }
//   //
//   // get input1() {
//   //   return this._input1;
//   // }
//   //
//   // @Input() set input2(value: string) {
//   //   this._input2 = value;
//   //
//   //   console.log('onInput 2 change, input1-> ', this.input1);
//   // }
//   //
//   // get input2() {
//   //   return this._input2;
//   // }
// }
//
// @Component({
//   selector: 'app-root',
//   standalone: true,
//   template: `
//     <child [input1]="input1" [input2]="input2" />
//
//     <button (click)="changeData()">Change</button>
//   `,
//   imports: [Child],
// })
// export class App {
//   input1 = '1';
//   input2 = '2';
//
//   changeData() {
//     this.input1 += 'a';
//     this.input2 += 'b';
//   }
// }

// // showcase swapping inputs when using setters - racing condition issue
