import {
  AfterContentInit,
  ChangeDetectorRef,
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
import { Tab4 } from './tab.component';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'ds-tab-group4',
  template: `
    <ul
      class="tab-header-items"
      [class.full-width-tabs]="fullWidthTabs"
      [class.centered-tabs]="centeredTabs"
    >
      @for (tab of tabs; track tab.title) {
        <li
          class="tab-header-item"
          [class.selected]="activeIndex === $index"
          [attr.aria-selected]="activeIndex === $index ? 'true' : null"
          [class.disabled]="tab.disabled"
          [attr.aria-disabled]="tab.disabled ? 'true' : null"
          (click)="!tab.disabled ? selectTab($index) : null"
          role="tab"
        >
          {{ tab.title }}
        </li>
      }
    </ul>

    <div class="tab-content">
      <ng-content />
    </div>
  `,
  styleUrl: './tabs.component.scss',
  standalone: true,
})
export class TabGroup4 implements OnChanges, AfterContentInit {
  private destroyRef = inject(DestroyRef);
  private cdr = inject(ChangeDetectorRef);

  @ContentChildren(Tab4) tabs?: QueryList<Tab4>;

  @Input() fullWidthTabs: boolean = false;

  @Input() centeredTabs: boolean = false;

  @Input() activeIndex: number = 0;
  @Output() activeIndexChange = new EventEmitter<number>();

  ngOnChanges(changes: SimpleChanges) {
    if (changes['activeIndex'].currentValue) {
      this.selectTab(this.activeIndex);
    }
  }

  ngAfterContentInit() {
    if (this.tabs) {
      // select the activeIndex by default
      this.selectTab(this.activeIndex);

      this.tabs.changes
        .pipe(takeUntilDestroyed(this.destroyRef))
        .subscribe(() => {
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
        });
    }
  }

  selectTab(index: number) {
    this.tabs?.forEach((tab, i) => {
      tab.selected.set(i === index);
    });

    if (this.activeIndex !== index) {
      this.activeIndexChange.emit(index);
    }
  }

  selectedTab() {
    return this.tabs?.find((tab) => tab.selected());
  }
}
