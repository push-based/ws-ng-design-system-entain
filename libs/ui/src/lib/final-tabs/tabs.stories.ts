import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { TabsGroup } from './tabs.component';
import { Tab } from './tab.component';
import { TabContent, TabHeader } from './tabs.directives';
import { Chevron } from '../chevron/chevron.component';
import { Button } from '../button/button.component';
import { ButtonFinal } from '../button/button-final.component';
import { fireEvent, userEvent, within } from '@storybook/testing-library';

type StoryType = TabsGroup & { ngContent?: string };

export default {
  title: 'Atoms/Tabs group',
  component: TabsGroup,
  args: {
    fullWidthTabs: false,
    activeIndex: 0,
    ngContent: '',
  },
  argTypes: {
    fullWidthTabs: {
      type: 'boolean',
      table: {
        defaultValue: { summary: false },
      },
      control: { type: 'boolean' },
      description:
        'Whether the tabs should take up the full width of the container',
    },
    activeIndex: {
      type: 'number',
      table: {
        defaultValue: { summary: '0' },
      },
      control: { type: 'number' },
      description: 'Index of active tab',
    },
  },
  decorators: [
    moduleMetadata({
      imports: [
        Tab,
        TabsGroup,
        TabContent,
        TabHeader,
        Chevron,
        Button,
        ButtonFinal,
      ],
    }),
  ],
} as Meta<StoryType>;

export const Primary: StoryObj<StoryType> = {
  name: 'Primary',
  render: (args) => ({
    props: args,
    template: `
    <ds-tab-group>
    <ds-tab title="Primary tab title"><chevron></chevron></ds-tab>
    </ds-tab-group>
`,
  }),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const tabs = canvas.getAllByRole('tab');
    for (const tab of tabs) {
      const user = userEvent.setup();
      await user.hover(tab);
      await user.click(tab);
      fireEvent.focus(tab);
      await expect(tab).toHaveClass('selected');
    }
  },
};

export const EmptyTabGroup: StoryObj<StoryType> = {
  name: 'EmptyTabGroup',
  tags: ['docs-template'],
  render: (args) => {
    const { ngContent, ...props } = args;
    return {
      props: args,
      template: `
    <ds-tab-group  [activeIndex]="${args.activeIndex}">
      ${ngContent}
    </ds-tab-group>
`,
    };
  },
};

export const ThreeTabs: StoryObj<StoryType> = {
  name: 'Three tabs',
  ...EmptyTabGroup,
  args: {
    ngContent: `
    <ds-tab title="Tab1 title"><button ds-button><span>click me 1</span></button></ds-tab>
        <ds-tab title="Tab2 title"><button ds-button><span>click me 2</span></button></ds-tab>
    <ds-tab disabled="true" title="Tab3 title"><button ds-button><span>click me 3</span></button></ds-tab>
    `,
  },
};

export const ThreeTabsDefault: StoryObj<StoryType> = {
  name: 'Three tabs',
  ...EmptyTabGroup,
  args: {
    ngContent: `
    <ds-tab title="Tab1 title"><chevron></chevron></ds-tab>
        <ds-tab title="Tab2 title"><chevron></chevron></ds-tab>
    <ds-tab disabled="true" title="Tab3 title"><chevron></chevron></ds-tab>
    `,
  },
};
