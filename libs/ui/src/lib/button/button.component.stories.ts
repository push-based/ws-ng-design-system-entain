import {
  argsToTemplate,
  componentWrapperDecorator,
  Meta,
  moduleMetadata,
  StoryObj,
} from '@storybook/angular';
import { Button } from './button.component';
import { fireEvent, userEvent, within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { Chevron } from '../chevron/chevron.component';

const meta: Meta<Button> = {
  title: 'Atoms/Button',
  component: Button,
  args: {
    label: 'label',
    variant: 'primary',
    size: 'md',
    disabled: false,
  },
  argTypes: {
    variant: {
      options: ['primary', 'secondary', 'success', 'ghost'],
      table: {
        defaultValue: { summary: 'primary' },
        category: 'Styling',
      },
      control: { type: 'select' },
      description: 'The variant of the button',
    },
    size: {
      options: ['sm', 'md', 'lg', 'xl'],
      table: {
        defaultValue: { summary: 'md' },
        category: 'Styling',
      },
      control: { type: 'select' },
      description: 'The size of the button',
    },
    disabled: {
      type: 'boolean',
      table: {
        defaultValue: { summary: false },
      },
      control: { type: 'boolean' },
      description: 'The disabled state of the button',
    },
    label: {
      type: 'string',
      control: {
        type: 'text',
      },
      table: {
        defaultValue: { summary: 'Button' },
      },
      description: 'The label of the button',
    },
    onClick: { type: 'function', action: 'clicked' },
  },
  decorators: [
    moduleMetadata({
      imports: [Chevron],
    }),
    componentWrapperDecorator(
      (story) => `<div style="margin: 3em">${story}</div>`,
    ),
  ],
  render: (args) => ({
    props: args,
    template: `
        <ds-button ${argsToTemplate(args)}>
            <chevron start></chevron>
        </ds-button>
    `,
  }),
};

export default meta;
type Story = StoryObj<Button>;

export const Primary: Story = {
  args: meta.args,
  name: 'Primary',
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button');
    fireEvent.focus(button);
    const user = userEvent.setup();
    await user.click(button);
    await expect(args.onClick).toHaveBeenCalled();
  },
};

export const DisabledSmGhost: Story = {
  args: {
    ...meta.args,
    disabled: true,
    variant: 'ghost',
    size: 'sm',
  },
  name: 'Disabled Sm Ghost',
};

export const Overrides: Story = {
  args: meta.args,
  name: 'Primary with override in label',
  render: (args) => ({
    props: args,
    template: `
        <h1>Button with primary args</h1>
        <ds-button ${argsToTemplate(args)}>
            <chevron start></chevron>
        </ds-button>
        <h1>Pure button with overrides without chevron</h1>
        <ds-button disabled="true" size="xl" label="${args.label}" variant="${
          args.variant
        }"/>
    `,
  }),
};

export const WithoutBackgrounds: Story = {
  parameters: {
    backgrounds: { disable: true },
  },
};
