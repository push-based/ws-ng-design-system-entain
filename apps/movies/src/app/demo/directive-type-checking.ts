// import {
//   Component,
//   Directive,
//   inject,
//   OnInit,
//   TemplateRef,
//   ViewContainerRef,
// } from '@angular/core';
//
// @Directive({
//   selector: 'ng-template[withTypes]',
//   standalone: true,
// })
// export class WithTypes implements OnInit {
//   templateRef = inject(TemplateRef);
//   vcr = inject(ViewContainerRef);
//
//   ngOnInit() {
//     this.vcr.createEmbeddedView(this.templateRef, {
//       $implicit: true,
//       cool: 1,
//     });
//   }
//
//   static ngTemplateContextGuard(
//     directive: WithTypes,
//     context: unknown,
//   ): context is { $implicit: boolean; cool: number } {
//     return true;
//   }
// }
//
// @Component({
//   selector: 'dynamic-template',
//   template: `
//     <ng-template withTypes let-value let-isCool="cool">
//       <div>Hello world1! {{ value }} {{ isCool }}</div>
//     </ng-template>
//
//     <div *withTypes="let value; let isCool = cool">
//       <div>Hello world1! {{ value }} {{ isCool }}</div>
//     </div>
//   `,
//   standalone: true,
//   imports: [WithTypes],
// })
// export class DynamicTemplateManagement {}
