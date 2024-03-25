import { ButtonFinal } from './button-final.component';
import { Meta, StoryObj } from '@storybook/angular';
import { withActions } from '@storybook/addon-actions/decorator';

type StoryType = ButtonFinal & { contentProjection?: string };

export default {
  name: 'Atoma/Button final',
  component: ButtonFinal,
  args: {
    disabled: false,
  },
  parameters: {
    actions: {
      handles: ['mouseover', 'click'],
    },
  },
  decorators: [withActions],
  render: (args) => ({
    props: args,
    template: `
    <button ds-button>this is button label</button>
    `,
  }),
} as Meta<StoryType>;

export const Primary: StoryObj<StoryType> = {};
