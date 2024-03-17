import {withThemeByClassName} from "@storybook/addon-themes";
import {Preview} from "@storybook/angular";
import {themes} from "@storybook/theming"
import {INITIAL_VIEWPORTS} from "@storybook/addon-viewport";

export const decorators = [
  withThemeByClassName({
    themes: {
      red: "theme-1",
      turquoise: "theme-2",
    },
    defaultTheme: "red",
    parentSelector: "body", // selector for the parent element that you want to apply your theme class to, default "html"
  }),
];

const customViewports = {
  device1: {
    name: 'Some weird device Elon Mask can come up with',
    styles: {
      width: '600px',
      height: '963px',
    },
  }
};

export default {
  parameters: {
    viewport: {
      viewports: {
        ...INITIAL_VIEWPORTS,
        ...customViewports,
      },
      // defaultViewport: 'iphone14promax',
      // defaultOrientation: 'landscape' // or 'portrait'
    },
    backgrounds: {
      // default: 'dark',
      values: [
        {name: 'light', value: '#fff'},
        {name: 'dark', value: '#333'},
        {name: 'facebook', value: 'var(--global-color-additional-social-facebook)'},
      ],
    },
    options: {
      storySort: {
        method: 'alphabetical',
      },
    },
    docs: {
      theme: themes.light,
      // canvas: {
      //   sourceState: 'shown'
      // }
    },
    // controls: { expanded: true },
    // a11y: {
    //   element: '#storybook-root',
    //   config: {
    //     rules: [
    //       {
    //         // Setting the enabled option to false will disable checks for this particular rule on all stories.
    //         id: 'color-contrast',
    //         enabled: false,
    //       },
    //     ],
    //   },
    // },
  }
} as Preview;
