import { Directive, inject, TemplateRef } from '@angular/core';
import { DsTabContext } from './tab.component';

@Directive({
  selector: 'ng-template[dsTabHeader]',
  standalone: true,
})
export class DsTabHeader {
  templateRef = inject<TemplateRef<DsTabContext>>(TemplateRef);

  static ngTemplateContextGuard(
    directive: DsTabHeader,
    context: unknown,
  ): context is DsTabContext {
    return true;
  }
}
