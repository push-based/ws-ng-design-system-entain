import {getStoryContext, TestRunnerConfig} from '@storybook/test-runner';
import {checkA11y, injectAxe} from 'axe-playwright';
import {TestContext} from "@storybook/test-runner/dist/playwright/hooks";
import pushBasedTheme from "./push-based.theme";
import {Page} from "playwright";

const config: TestRunnerConfig = {
  async preRender(page: Page, testContext: TestContext) {
    await injectAxe(page);
    const storyContext = await getStoryContext(page, testContext);
    const params = storyContext.parameters;
    // console.log(params);
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
