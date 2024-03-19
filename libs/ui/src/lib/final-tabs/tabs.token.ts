import { InjectionToken, Provider } from '@angular/core';

export interface TabsOptions {
  /*
   * Whether the tabs should take up the full width of the container.
   */
  fullWidthTabs: boolean;

  /*
   * Whether the tabs should be centered.
   */
  centeredTabs: boolean;
}

const DEFAULT_TAB_OPTIONS: TabsOptions = {
  fullWidthTabs: false,
  centeredTabs: false,
};

export const TAB_OPTIONS = new InjectionToken<TabsOptions>('TAB_OPTIONS', {
  providedIn: 'root',
  factory: () => DEFAULT_TAB_OPTIONS,
});

export const provideTabOptions = (options: Partial<TabsOptions>) => {
  return {
    provide: TAB_OPTIONS,
    useValue: { ...DEFAULT_TAB_OPTIONS, ...options },
  } as Provider;
};
