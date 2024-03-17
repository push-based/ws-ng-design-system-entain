import {addons} from '@storybook/manager-api';
import pushBasedTheme from './push-based.theme';

addons.setConfig({
  theme: pushBasedTheme,
});

addons.setConfig({
  sidebar: {
    filters: {
      patterns: (story) => {
        return !story?.tags?.includes('template');
      }
    }
  }
});
