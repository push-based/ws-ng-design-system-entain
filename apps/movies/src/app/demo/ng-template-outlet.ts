// import { Component } from '@angular/core';
// import { NgTemplateOutlet } from '@angular/common';

// // @Directive({
// //   standalone: true,
// //   selector: '[templateOutlet]',
// // })
// // export class TemplateOutlet {
// //   vcRef = inject(ViewContainerRef);
// //
// //   private embededView?: EmbeddedViewRef<unknown>;
// //
// //   @Input() set templateOutlet(value: TemplateRef<unknown>) {
// //     if (!value) {
// //       this.vcRef.clear();
// //       this.embededView = undefined;
// //       return;
// //     }
// //
// //     // already rendered - do nothing
// //     if (this.embededView) return;
// //
// //     this.embededView = this.vcRef.createEmbeddedView(value);
// //   }
// // }
// //
// // @Component({
// //   selector: 'card',
// //   standalone: true,
// //   template: `
// //     <div class="card">
// //       <div class="header">
// //         @if (header) {
// //           <ng-container *ngTemplateOutlet="header" />
// //         } @else {
// //           <h3>{{ title }}</h3>
// //         }
// //       </div>
// //
// //       <div class="body">
// //         <ng-content />
// //       </div>
// //     </div>
// //   `,
// //   imports: [NgTemplateOutlet],
// // })
// // export class Card {
// //   @Input() title?: string;
// //   @ContentChild('header') header!: TemplateRef<unknown>;
// // }

// @Component({
//   selector: 'dynamic-template',
//   template: `
//     <ng-template #hello>
//       <div>Hello world1!</div>
//     </ng-template>

//     <!--    <ng-container [templateOutlet]="hello" />-->
//     <!--    <ng-container [ngTemplateOutlet]="hello" />-->
//   `,
//   standalone: true,
//   imports: [NgTemplateOutlet],
// })
// export class DynamicTemplateManagement {}
