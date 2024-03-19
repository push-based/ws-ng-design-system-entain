import { NgTemplateOutlet } from '@angular/common';
import {
  AfterContentInit,
  ChangeDetectionStrategy,
  Component,
  ContentChildren,
  DestroyRef,
  EventEmitter,
  inject,
  Input,
  OnChanges,
  Output,
  QueryList,
  SimpleChanges,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { TAB_OPTIONS } from './tabs.token';
import { Tab } from './tab.component';

@Component({
  selector: 'ds-tab-group',
  template: `
    <ul role="tablist"
      class="tab-header-items"
      [class.full-width-tabs]="fullWidthTabs"
      [class.centered-tabs]="centeredTabs"
    >
      @for (tab of tabs!; track tab) {
        <li
          class="tab-header-item"
          role="tab"
          [class.disabled]="tab.disabled"
          [attr.aria-disabled]="tab.disabled ? 'true' : 'false'"
          [class.selected]="tab.selected()"
          [attr.aria-selected]="tab.selected() ? 'true' : 'false'"
          (click)="!tab.disabled ? selectTab($index) : null"
        >
          @if (tab.customHeader?.templateRef; as headerTpl) {
            <ng-container
              *ngTemplateOutlet="
                headerTpl;
                context: { $implicit: tab.selected(), index: $index }
              "
            />
          } @else if (tab.headerTpl) {
            <ng-container
              *ngTemplateOutlet="
                tab.headerTpl;
                context: { $implicit: tab.selected(), index: $index }
              "
            />
          } @else {
            {{ tab.title }}
          }
        </li>
      }
    </ul>

    <div class="tab-content">
      <ng-content />
    </div>
  `,
  imports: [NgTemplateOutlet],
  styleUrl: './tabs.component.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TabsGroup implements OnChanges, AfterContentInit {
  private destroyRef = inject(DestroyRef);

  private tabOptions = inject(TAB_OPTIONS);

  @Input() activeIndex: number = 0;

  @Output() activeIndexChange = new EventEmitter<number>();

  /*
   * Whether the tabs should take up the full width of the container.
   */
  @Input() fullWidthTabs: boolean = this.tabOptions.fullWidthTabs;

  /*
   * Whether the tabs should be centered.
   */
  @Input() centeredTabs = this.tabOptions.centeredTabs;

  ngOnChanges(changes: SimpleChanges) {
    if (changes['activeIndex'].currentValue) {
      this.selectTab(this.activeIndex);
    }
  }

  @ContentChildren(Tab) tabs: QueryList<Tab> | undefined;

  ngAfterContentInit() {
    if (this.tabs) {
      this.tabs.changes
        .pipe(takeUntilDestroyed(this.destroyRef))
        .subscribe((changes) => {
          const tabs = this.tabs?.toArray() || [];

          // if there are no tabs, do nothing
          if (tabs.length === 0) return;

          // check if the selected tab still exists
          const selectedTab = this.selectedTab();
          if (!selectedTab) {
            // try to select the previously selected tab index if it exists
            if (tabs.length > this.activeIndex && this.activeIndex !== null) {
              this.selectTab(this.activeIndex);
            } else {
              // select the first tab if the selected tab does not exist
              this.selectTab(0);
            }
          }

          console.log({ changes });
        });

      // select the first tab by default
      this.selectTab(this.activeIndex);
    }
  }

  selectTab(index: number) {
    this.tabs?.forEach((tab, i) => {
      tab.selected.set(i === index);
    });

    this.activeIndexChange.emit(index);
  }

  private selectedTab(): Tab | undefined {
    return this.tabs?.find((tab) => tab.selected());
  }
}
