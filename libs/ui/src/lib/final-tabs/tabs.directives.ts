import { Directive, inject, TemplateRef } from '@angular/core';
import { DsTabContext } from './tab.component';

@Directive({
  selector: 'ng-template[dsTabHeader]',
  standalone: true,
})
export class TabHeader {
  templateRef = inject<TemplateRef<DsTabContext>>(TemplateRef);

  static ngTemplateContextGuard(
    directive: TabHeader,
    context: unknown,
  ): context is DsTabContext {
    return true;
  }
}

@Directive({
  selector: 'ng-template[dsTabContent]',
  standalone: true,
})
export class TabContent {
  templateRef = inject(TemplateRef);

  static ngTemplateContextGuard(
    directive: TabContent,
    context: unknown,
  ): context is DsTabContext {
    return true;
  }
}
