// import {
//   AfterViewInit,
//   Component,
//   inject,
//   TemplateRef,
//   ViewChild,
//   ViewContainerRef,
// } from '@angular/core';

// // @Directive({
// //   standalone: true,
// //   selector: '[show]',
// // })
// // export class ShowTemplate {
// //   vcRef = inject(ViewContainerRef);
// //   templateRef = inject(TemplateRef);
// //
// //   @ViewChild('modalRef') modalRef!: TemplateRef<unknown>;
// //
// //   private embeddedView?: EmbeddedViewRef<any>;
// //
// //   @Input() set renderTemplate(value: unknown) {
// //     if (!value) {
// //       this.vcRef.clear();
// //       this.embeddedView = undefined;
// //       return;
// //     }
// //
// //     // already rendered - do nothing
// //     if (this.embeddedView) return;
// //
// //     this.embeddedView = this.vcRef.createEmbeddedView(this.templateRef);
// //   }
// // }

// @Component({
//   selector: 'dynamic-template',
//   template: `
//     <ng-template #hello>
//       <div>Hello world1!</div>
//     </ng-template>

//     <!--    <div *>Won't render!</div>-->
//     <!--    <div *show="true">Hello world2!</div>-->
//   `,
//   standalone: true,
// })
// export class DynamicTemplateManagement implements AfterViewInit {
//   @ViewChild('hello') hello!: TemplateRef<unknown>;

//   vcRef = inject(ViewContainerRef);

//   ngAfterViewInit() {
//     // this.vcRef.createEmbeddedView(this.hello);
//     console.log(this.hello);
//   }
// }
