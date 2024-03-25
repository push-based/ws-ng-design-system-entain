import { TestRunnerConfig } from '@storybook/test-runner';
import { checkA11y, injectAxe } from 'axe-playwright';
import { Page } from 'playwright';

const config: TestRunnerConfig = {
  async preRender(page: Page) {
    await injectAxe(page);
  },
  async postRender(page: any) {
    await checkA11y(page, '#storybook-root', {
      detailedReport: true,
      detailedReportOptions: {
        html: true,
      },
    });
  },
};

export default config;
