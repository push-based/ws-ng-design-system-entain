import { NgModule } from '@angular/core';
import { TabsGroup } from './tabs.component';
import { TabContent, TabHeader } from './tabs.directives';
import { Tab } from './tab.component';

export { TabsGroup } from './tabs.component';
export { Tab } from './tab.component';
export { TabContent, TabHeader } from './tabs.directives';
export { TAB_OPTIONS, TabsOptions, provideTabOptions } from './tabs.token';

@NgModule({
  imports: [TabsGroup, Tab, TabContent, TabHeader],
  exports: [TabsGroup, Tab, TabContent, TabHeader],
})
export class TabsModule {}
