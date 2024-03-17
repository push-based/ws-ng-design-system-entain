## 7.6.8

- Addon-actions: Fix module resolution for react-native - [#25296](https://github.com/storybookjs/storybook/pull/25296), thanks [@dannyhw](https://github.com/dannyhw)!
- Storysource: Fix import error - [#25391](https://github.com/storybookjs/storybook/pull/25391), thanks [@unional](https://github.com/unional)!

## 7.6.7

- Core: Skip no-framework error when ignorePreview=true - [#25286](https://github.com/storybookjs/storybook/pull/25286), thanks [@ndelangen](https://github.com/ndelangen)!
- Dependencies: Semver dependency fixes - [#25283](https://github.com/storybookjs/storybook/pull/25283), thanks [@ndelangen](https://github.com/ndelangen)!
- Vite: Fix pre-transform error in Vite 5 - [#25329](https://github.com/storybookjs/storybook/pull/25329), thanks [@yannbf](https://github.com/yannbf)!
- Vue3: Fix pnp by making compiler-core a dependency - [#25311](https://github.com/storybookjs/storybook/pull/25311), thanks [@shilman](https://github.com/shilman)!

## 7.6.6

- SvelteKit: Support 2.0 modules with mocks - [#25244](https://github.com/storybookjs/storybook/pull/25244), thanks [@paoloricciuti](https://github.com/paoloricciuti)!

## 7.6.5

- Angular: Update Angular cli templates - [#25152](https://github.com/storybookjs/storybook/pull/25152), thanks [@Marklb](https://github.com/Marklb)!
- Blocks: Fix Subtitle block for unattached docs pages - [#25157](https://github.com/storybookjs/storybook/pull/25157), thanks [@kripod](https://github.com/kripod)!
- SvelteKit: Fix missing `$app` modules - [#25132](https://github.com/storybookjs/storybook/pull/25132), thanks [@paoloricciuti](https://github.com/paoloricciuti)!

## 7.6.4

- Angular: Fix CSF Plugin - [#25098](https://github.com/storybookjs/storybook/pull/25098), thanks [@valentinpalkovic](https://github.com/valentinpalkovic)!
- Viewport: Fix viewport dts files - [#25107](https://github.com/storybookjs/storybook/pull/25107), thanks [@kasperpeulen](https://github.com/kasperpeulen)!

## 7.6.3

- Next.js: Fix next/font/local usage in babel mode - [#25045](https://github.com/storybookjs/storybook/pull/25045), thanks [@valentinpalkovic](https://github.com/valentinpalkovic)!

## 7.6.2

- CLI: Improve dependency metadata detection in storybook doctor - [#25037](https://github.com/storybookjs/storybook/pull/25037), thanks [@yannbf](https://github.com/yannbf)!
- React-Docgen: Make error-handling more gentle - [#25055](https://github.com/storybookjs/storybook/pull/25055), thanks [@valentinpalkovic](https://github.com/valentinpalkovic)!

## 7.6.1

- Next.js: Fix AppRouterProvider usage - [#25032](https://github.com/storybookjs/storybook/pull/25032), thanks [@valentinpalkovic](https://github.com/valentinpalkovic)!
- SvelteKit: Fix HMR not working - [#25031](https://github.com/storybookjs/storybook/pull/25031), thanks [@JReinhold](https://github.com/JReinhold)!
- Test: Downgrade @testing-library/user-event to 14.3.0 - [#25004](https://github.com/storybookjs/storybook/pull/25004), thanks [@kasperpeulen](https://github.com/kasperpeulen)!
- Webpack: Fix exclude regex in react-docgen-loader - [#25030](https://github.com/storybookjs/storybook/pull/25030), thanks [@valentinpalkovic](https://github.com/valentinpalkovic)!

## 7.6.0

Storybook 7.6 is here with increased performance and much more!

- 🔥 Improved SWC support
- 🧪 New test utilities and fast build mode
- 🔼 NextJS SWC + avif support & fixes
- 🤡 SvelteKit page and navigation mocking
- ⚛️ React-docgen upgrade
- 🎨 Controls a11y, background theming, and viewports
- 🩺 CLI: The doctor is in!
- 🚫 Addons: Remove React as a peer dependency
- 🪦 Storyshots and Vue2 deprecated

<details>
  <summary>
    List of all updates
  </summary>

- Actions: Attach spies on actions across stories when defined in meta - [#24451](https://github.com/storybookjs/storybook/pull/24451), thanks [@kasperpeulen](https://github.com/kasperpeulen)!
- Actions: Fix `@storybook/core-events/preview-errors` dependency missing for Yarn PnP - [#24973](https://github.com/storybookjs/storybook/pull/24973), thanks [@JReinhold](https://github.com/JReinhold)!
- Actions: Fix missing crypto module crashing React Native - [#24546](https://github.com/storybookjs/storybook/pull/24546), thanks [@dannyhw](https://github.com/dannyhw)!
- Actions: Warn on implicit actions - [#24856](https://github.com/storybookjs/storybook/pull/24856), thanks [@kasperpeulen](https://github.com/kasperpeulen)!
- Addon A11y: Avoid CSP issue - [#24477](https://github.com/storybookjs/storybook/pull/24477), thanks [@Marklb](https://github.com/Marklb)!
- Addon: Move Visual Test addon to the code directory - [#24771](https://github.com/storybookjs/storybook/pull/24771), thanks [@cdedreuille](https://github.com/cdedreuille)!
- Addons, core: Make `react` and Storybook packages `devDependencies` where possible - [#24676](https://github.com/storybookjs/storybook/pull/24676), thanks [@JReinhold](https://github.com/JReinhold)!
- Addons, core: Make `react` and Storybook packages `devDependencies` where possible - ATTEMPT 2 - [#24834](https://github.com/storybookjs/storybook/pull/24834), thanks [@JReinhold](https://github.com/JReinhold)!
- Angular: Add source-map option to builder - [#24466](https://github.com/storybookjs/storybook/pull/24466), thanks [@valentinpalkovic](https://github.com/valentinpalkovic)!
- Angular: Handle nested module metadata - [#24798](https://github.com/storybookjs/storybook/pull/24798), thanks [@valentinpalkovic](https://github.com/valentinpalkovic)!
- Angular: Include object configured styles - [#24768](https://github.com/storybookjs/storybook/pull/24768), thanks [@valentinpalkovic](https://github.com/valentinpalkovic)!
- Babel: Update all @babel/* dependencies - [#24610](https://github.com/storybookjs/storybook/pull/24610), thanks [@valentinpalkovic](https://github.com/valentinpalkovic)!
- CLI: Add "doctor" command - [#22236](https://github.com/storybookjs/storybook/pull/22236), thanks [@yannbf](https://github.com/yannbf)!
- CLI: Add @storybook/addon-designs to non-core list - [#24507](https://github.com/storybookjs/storybook/pull/24507), thanks [@yannbf](https://github.com/yannbf)!
- CLI: Ensure errors with opening the browser are caught - [#24668](https://github.com/storybookjs/storybook/pull/24668), thanks [@xueyawei](https://github.com/xueyawei)!
- CLI: Ignore `addon-onboarding` when checking versions - [#24634](https://github.com/storybookjs/storybook/pull/24634), thanks [@JReinhold](https://github.com/JReinhold)!
- CLI: Use @storybook/test in template stories - [#24393](https://github.com/storybookjs/storybook/pull/24393), thanks [@yannbf](https://github.com/yannbf)!
- Controls: Improve accessibility of BooleanControl for screen readers - [#24418](https://github.com/storybookjs/storybook/pull/24418), thanks [@danielmarcano](https://github.com/danielmarcano)!
- Core-Server: Ignore all node_module folders for watchpack - [#24553](https://github.com/storybookjs/storybook/pull/24553), thanks [@valentinpalkovic](https://github.com/valentinpalkovic)!
- Core: Add deprecation notice for Vite + CommonJS - [#23950](https://github.com/storybookjs/storybook/pull/23950), thanks [@JReinhold](https://github.com/JReinhold)!
- Core: Detect no matching export error in storybook start and build - [#24877](https://github.com/storybookjs/storybook/pull/24877), thanks [@yannbf](https://github.com/yannbf)!
- Core: Fix `useStoryPrepared` hook failing with `undefined` data - [#22631](https://github.com/storybookjs/storybook/pull/22631), thanks [@SpookyJelly](https://github.com/SpookyJelly)!
- Core: Fix pnp support when cache dir is outside working dir - [#24572](https://github.com/storybookjs/storybook/pull/24572), thanks [@valentinpalkovic](https://github.com/valentinpalkovic)!
- Core: Fix post message channel location.search access for React Native - [#24545](https://github.com/storybookjs/storybook/pull/24545), thanks [@dannyhw](https://github.com/dannyhw)!
- Core: Gracefully handle error when parsing preview.js file - [#24858](https://github.com/storybookjs/storybook/pull/24858), thanks [@yannbf](https://github.com/yannbf)!
- Core: Make warnOnIncompatibleAddons fault-tolerant - [#24880](https://github.com/storybookjs/storybook/pull/24880), thanks [@taozhou-glean](https://github.com/taozhou-glean)!
- Dependencies: Fix Yarn 4 failing to install due to jscodeshift dependency issue - [#24914](https://github.com/storybookjs/storybook/pull/24914), thanks [@samvv](https://github.com/samvv)!
- Dependencies: Update @babel/traverse and @babel/core to fix vulnerability - [#24670](https://github.com/storybookjs/storybook/pull/24670), thanks [@valentinpalkovic](https://github.com/valentinpalkovic)!
- Dependencies: Update browserify-sign transitive dependency - [#24674](https://github.com/storybookjs/storybook/pull/24674), thanks [@valentinpalkovic](https://github.com/valentinpalkovic)!
- Dependencies: Update jscodeshift to v0.15.1 - [#24882](https://github.com/storybookjs/storybook/pull/24882), thanks [@epreston](https://github.com/epreston)!
- Dependencies: Update nx dependencies to v17 - [#24671](https://github.com/storybookjs/storybook/pull/24671), thanks [@valentinpalkovic](https://github.com/valentinpalkovic)!
- Doc Blocks: Add support for `of` prop to `Primary` block - [#23849](https://github.com/storybookjs/storybook/pull/23849), thanks [@Wilson2k](https://github.com/Wilson2k)!
- Doc Blocks: Remove `defaultProps` in `Stories` block - [#24506](https://github.com/storybookjs/storybook/pull/24506), thanks [@WouterK12](https://github.com/WouterK12)!
- Docs: Changes corresponding to docs design updates - [#24925](https://github.com/storybookjs/storybook/pull/24925), thanks [@kylegach](https://github.com/kylegach)!
- Maintenance: Split renderers preview entrypoints - [#24623](https://github.com/storybookjs/storybook/pull/24623), thanks [@ndelangen](https://github.com/ndelangen)!
- Manager: Update `store.settings.lastTrackedStoryId` - [#24115](https://github.com/storybookjs/storybook/pull/24115), thanks [@rashidshamloo](https://github.com/rashidshamloo)!
- ManagerAPI: Fix setting status without index, crashes storybook - [#24866](https://github.com/storybookjs/storybook/pull/24866), thanks [@ndelangen](https://github.com/ndelangen)!
- ManagerBuilder: Fix `"type": "commonjs"` compatibility - [#24534](https://github.com/storybookjs/storybook/pull/24534), thanks [@ndelangen](https://github.com/ndelangen)!
- Next.js: Add avif support - [#24611](https://github.com/storybookjs/storybook/pull/24611), thanks [@valentinpalkovic](https://github.com/valentinpalkovic)!
- Next.js: Add back image context CommonJS export - [#24885](https://github.com/storybookjs/storybook/pull/24885), thanks [@martinnabhan](https://github.com/martinnabhan)!
- Next.js: Add experimental SWC support - [#24852](https://github.com/storybookjs/storybook/pull/24852), thanks [@valentinpalkovic](https://github.com/valentinpalkovic)!
- Next.js: Fix Fast Refresh config for SWC mode - [#24991](https://github.com/storybookjs/storybook/pull/24991), thanks [@valentinpalkovic](https://github.com/valentinpalkovic)!
- Next.js: Fix forwarding ref for Image component - [#24648](https://github.com/storybookjs/storybook/pull/24648), thanks [@valentinpalkovic](https://github.com/valentinpalkovic)!
- Next.js: Fix import path in swc loader - [#24922](https://github.com/storybookjs/storybook/pull/24922), thanks [@valentinpalkovic](https://github.com/valentinpalkovic)!
- Next.js: Fix react-docgen usage with preset-env settings - [#24993](https://github.com/storybookjs/storybook/pull/24993), thanks [@valentinpalkovic](https://github.com/valentinpalkovic)!
- Next.js: Remove duplicate Fast Refresh plugin init - [#24963](https://github.com/storybookjs/storybook/pull/24963), thanks [@valentinpalkovic](https://github.com/valentinpalkovic)!
- React: Upgrade `react-docgen` to v7 - [#24530](https://github.com/storybookjs/storybook/pull/24530), thanks [@shilman](https://github.com/shilman)!
- ReactNative: Fix missing assert dep in docs-tools - [#24732](https://github.com/storybookjs/storybook/pull/24732), thanks [@dannyhw](https://github.com/dannyhw)!
- Svelte: Fix decorators always running twice - [#24921](https://github.com/storybookjs/storybook/pull/24921), thanks [@paoloricciuti](https://github.com/paoloricciuti)!
- Svelte: Fix source with decorators always showing the `SlotDecorator` component - [#24800](https://github.com/storybookjs/storybook/pull/24800), thanks [@JReinhold](https://github.com/JReinhold)!
- SvelteKit: Add experimental page and navigation mocking - [#24795](https://github.com/storybookjs/storybook/pull/24795), thanks [@paoloricciuti](https://github.com/paoloricciuti)!
- SvelteKit: Default to log an action for `goto`, `invalidate` and `invalidateAll` - [#24955](https://github.com/storybookjs/storybook/pull/24955), thanks [@paoloricciuti](https://github.com/paoloricciuti)!
- SWC: Add settings for react and preact - [#24805](https://github.com/storybookjs/storybook/pull/24805), thanks [@valentinpalkovic](https://github.com/valentinpalkovic)!
- Test Build: Add env-variable support to `--test` CLI-flag - [#24862](https://github.com/storybookjs/storybook/pull/24862), thanks [@ndelangen](https://github.com/ndelangen)!
- Test Build: Add tests and rename to camelCase - [#24911](https://github.com/storybookjs/storybook/pull/24911), thanks [@ndelangen](https://github.com/ndelangen)!
- Test Build: Disable composition when `--test` is `true` - [#24799](https://github.com/storybookjs/storybook/pull/24799), thanks [@ndelangen](https://github.com/ndelangen)!
- Test Build: Disable docs related stuff for test builds - [#24691](https://github.com/storybookjs/storybook/pull/24691), thanks [@ndelangen](https://github.com/ndelangen)!
- Test Build: Disable telemetry for test builds - [#24706](https://github.com/storybookjs/storybook/pull/24706), thanks [@kasperpeulen](https://github.com/kasperpeulen)!
- Test Build: Disable warnOnIncompatibleAddons - [#24797](https://github.com/storybookjs/storybook/pull/24797), thanks [@ndelangen](https://github.com/ndelangen)!
- Test Build: Filter out addon-docs from essentials in the test build - [#24994](https://github.com/storybookjs/storybook/pull/24994), thanks [@kasperpeulen](https://github.com/kasperpeulen)!
- Test Build: Fix disabledAddons filter - [#24924](https://github.com/storybookjs/storybook/pull/24924), thanks [@IanVS](https://github.com/IanVS)!
- Test Build: Fix indexer bug - [#24890](https://github.com/storybookjs/storybook/pull/24890), thanks [@ndelangen](https://github.com/ndelangen)!
- Test Build: Globalize `@storybook/blocks` if `build.test.emptyBlocks` is `true` - [#24650](https://github.com/storybookjs/storybook/pull/24650), thanks [@ndelangen](https://github.com/ndelangen)!
- Test Build: Implement builder options for test build - [#24826](https://github.com/storybookjs/storybook/pull/24826), thanks [@kasperpeulen](https://github.com/kasperpeulen)!
- Test Build: Improve config loading & naming - [#24837](https://github.com/storybookjs/storybook/pull/24837), thanks [@ndelangen](https://github.com/ndelangen)!
- Test Build: No sourcemaps for test builds - [#24804](https://github.com/storybookjs/storybook/pull/24804), thanks [@ndelangen](https://github.com/ndelangen)!
- Test Build: Revert defaulting to SWC in test build, but keep using esbuild for minification - [#24843](https://github.com/storybookjs/storybook/pull/24843), thanks [@kasperpeulen](https://github.com/kasperpeulen)!
- Test: Create @storybook/test package based on vitest - [#24392](https://github.com/storybookjs/storybook/pull/24392), thanks [@kasperpeulen](https://github.com/kasperpeulen)!
- Test: Don\'t attach action to function mock if action was added already - [#24966](https://github.com/storybookjs/storybook/pull/24966), thanks [@tmeasday](https://github.com/tmeasday)!
- Test: Model loaders as before each and restore mocks properly - [#24948](https://github.com/storybookjs/storybook/pull/24948), thanks [@kasperpeulen](https://github.com/kasperpeulen)!
- Theming: Add theme variable to set the preview background color - [#24575](https://github.com/storybookjs/storybook/pull/24575), thanks [@JReinhold](https://github.com/JReinhold)!
- Typescript: Add \'skipCompiler\' option to TypeScript presets - [#24847](https://github.com/storybookjs/storybook/pull/24847), thanks [@valentinpalkovic](https://github.com/valentinpalkovic)!
- UI: Fix horizontal scroll bar in Canvas hidden by styling - [#24408](https://github.com/storybookjs/storybook/pull/24408), thanks [@yoshi2no](https://github.com/yoshi2no)!
- UI: improve A11Y remove redundant styling rules, update icon color - [#24402](https://github.com/storybookjs/storybook/pull/24402), thanks [@tolkadot](https://github.com/tolkadot)!
- UI: Logo fixed value - [#24726](https://github.com/storybookjs/storybook/pull/24726), thanks [@black-arm](https://github.com/black-arm)!
- UI: Update zIndex on NotificationList to fix the notification not being clickable in certain cases - [#24602](https://github.com/storybookjs/storybook/pull/24602), thanks [@yoshi2no](https://github.com/yoshi2no)!
- Viewport: Add newer device viewports - [#24777](https://github.com/storybookjs/storybook/pull/24777), thanks [@Tomo5524](https://github.com/Tomo5524)!
- Vite: Prevent non-deterministic build output - [#24833](https://github.com/storybookjs/storybook/pull/24833), thanks [@henkerik](https://github.com/henkerik)!
- Webpack: Add export-order-loader and remove babel-plugin-named-exports-order - [#24749](https://github.com/storybookjs/storybook/pull/24749), thanks [@valentinpalkovic](https://github.com/valentinpalkovic)!
- Webpack: Add react-docgen loader and remove babel-plugin-react-docgen - [#24762](https://github.com/storybookjs/storybook/pull/24762), thanks [@valentinpalkovic](https://github.com/valentinpalkovic)!
- Webpack: Fix race condition for export-order loader - [#24817](https://github.com/storybookjs/storybook/pull/24817), thanks [@valentinpalkovic](https://github.com/valentinpalkovic)!
- Webpack: Hide critical dependency warning - [#24784](https://github.com/storybookjs/storybook/pull/24784), thanks [@valentinpalkovic](https://github.com/valentinpalkovic)!
- Webpack: Only load babel config when babel-loader is used - [#25002](https://github.com/storybookjs/storybook/pull/25002), thanks [@valentinpalkovic](https://github.com/valentinpalkovic)!
- Webpack: Resolve circular dependency and fix HMR - [#24974](https://github.com/storybookjs/storybook/pull/24974), thanks [@valentinpalkovic](https://github.com/valentinpalkovic)!
  </details>

## 7.5.2

- Addon-themes: Fix globals not being set when using absolute path - [#24596](https://github.com/storybookjs/storybook/pull/24596), thanks [@JReinhold](https://github.com/JReinhold)!
- CLI: Allow Yarn v4 in `link` command - [#24551](https://github.com/storybookjs/storybook/pull/24551), thanks [@yannbf](https://github.com/yannbf)!
- Next.js: Support v14.0.0 - [#24593](https://github.com/storybookjs/storybook/pull/24593), thanks [@nikospapcom](https://github.com/nikospapcom)!

## 7.5.1

- Angular: update wrong type for webpackStatsJson in start-storybook schema.json - [#24494](https://github.com/storybookjs/storybook/pull/24494), thanks [@LucaVazz](https://github.com/LucaVazz)!
- Themes: Run postinstall in shell for windows - [#24389](https://github.com/storybookjs/storybook/pull/24389), thanks [@Integrayshaun](https://github.com/Integrayshaun)!

## 7.5.0

Storybook 7.5 enhances your Storybook experience with several key updates:

- 💃🏼 Now supports Lit 3.0 and Vite 5
- 👻 storiesOf and storyStoreV6 officially deprecated
- 🔨 Fix Webpack5 build errors not being propagated
- 🀄 Support rename font import for Next.js
- ⬆️ Upgrade react-docgen to 6.0.x and improve argTypes
- ✨ Many Angular improvements such as introducing argsToTemplate , new schema debugging options, support for standalone directives, etc.
<details>
  <summary>
    List of all updates
  </summary>

- Angular: Introduce argsToTemplate for property and event Bindings - [#24434](https://github.com/storybookjs/storybook/pull/24434), thanks [@valentinpalkovic](https://github.com/valentinpalkovic)!
- Angular: Add schema options (debugWebpack, webpackStatsJson, and more) - [#24388](https://github.com/storybookjs/storybook/pull/24388), thanks [@yannbf](https://github.com/yannbf)!
- Angular: Categorize legacy build options error - [#24014](https://github.com/storybookjs/storybook/pull/24014), thanks [@yannbf](https://github.com/yannbf)!
- Angular: Fix Angular 15 support and add zone.js v0.14.x support - [#24367](https://github.com/storybookjs/storybook/pull/24367), thanks [@valentinpalkovic](https://github.com/valentinpalkovic)!
- Angular: Allow loading standalone directives - [#24448](https://github.com/storybookjs/storybook/pull/24448), thanks [@osnoser1](https://github.com/osnoser1)!
- CLI: Inform the user how to dedupe and strip color from info command - [#24087](https://github.com/storybookjs/storybook/pull/24087), thanks [@kasperpeulen](https://github.com/kasperpeulen)!
- CLI: Add more information to storybook info command - [#24003](https://github.com/storybookjs/storybook/pull/24003), thanks [@JReinhold](https://github.com/JReinhold)!
- CLI: Change /Date$/ to /Dates$/i - [#24195](https://github.com/storybookjs/storybook/pull/24195), thanks [@arup1221](https://github.com/arup1221)!
- CLI: Improve sanitization logic in crash reports - [#24028](https://github.com/storybookjs/storybook/pull/24028), thanks [@yannbf](https://github.com/yannbf)!
- CLI: Remove random commas in storybook upgrade logs - [#22333](https://github.com/storybookjs/storybook/pull/22333), thanks [@joaonunomota](https://github.com/joaonunomota)!
- Controls: Fix select / multiselect when value contains multiple spaces - [#22334](https://github.com/storybookjs/storybook/pull/22334), thanks [@oxcened](https://github.com/oxcened)!
- Core: Add class name to Storybook error name - [#24371](https://github.com/storybookjs/storybook/pull/24371), thanks [@yannbf](https://github.com/yannbf)!
- Core: Deprecate storyStoreV6 (including storiesOf) and storyIndexers - [#23938](https://github.com/storybookjs/storybook/pull/23938), thanks [@JReinhold](https://github.com/JReinhold)!
- Doc Blocks: Add title to Meta prop types - [#23370](https://github.com/storybookjs/storybook/pull/23370), thanks [@iqbalcodes6602](https://github.com/iqbalcodes6602)!
- ManagerAPI: Fix bug with story redirection when URL has partial storyId - [#24345](https://github.com/storybookjs/storybook/pull/24345), thanks [@ndelangen](https://github.com/ndelangen)!
- NextJS: Support rename font import - [#24406](https://github.com/storybookjs/storybook/pull/24406), thanks [@yoshi2no](https://github.com/yoshi2no)!
- NextJS: Change babel plugins from proposal-... to transform-... - [#24290](https://github.com/storybookjs/storybook/pull/24290), thanks [@roottool](https://github.com/roottool)!
- NextJS: Fix default next image loader when src has params - [#24187](https://github.com/storybookjs/storybook/pull/24187), thanks [@json-betsec](https://github.com/json-betsec)!
- NextJS: Fix Image Context re-use via singleton - [#24146](https://github.com/storybookjs/storybook/pull/24146), thanks [@martinnabhan](https://github.com/martinnabhan)!
- NextJS: Improve support for Windows-style paths - [#23695](https://github.com/storybookjs/storybook/pull/23695), thanks [@T99](https://github.com/T99)!
- React: Upgrade `react-docgen` to `6.0.x` and improve argTypes - [#23825](https://github.com/storybookjs/storybook/pull/23825), thanks [@shilman](https://github.com/shilman)!
- Svelte: Fix docs generating when using `lang="ts"` or optional chaining - [#24096](https://github.com/storybookjs/storybook/pull/24096), thanks [@j3rem1e](https://github.com/j3rem1e)!
- UI: Filter some manager errors - [#24217](https://github.com/storybookjs/storybook/pull/24217), thanks [@yannbf](https://github.com/yannbf)!
- UI: Update ScrollArea with radix - [#24413](https://github.com/storybookjs/storybook/pull/24413), thanks [@cdedreuille](https://github.com/cdedreuille)!
- UI: Improve contrast ratio between focus / hover - [#24205](https://github.com/storybookjs/storybook/pull/24205), thanks [@chocoscoding](https://github.com/chocoscoding)!
- UI: Fix className missing in syntaxhighlighter - [#24491](https://github.com/storybookjs/storybook/pull/24491), thanks [@ndelangen](https://github.com/ndelangen)!
- Vite: Move mdx-plugin from `@storybook/builder-vite` to `@storybook/addon-docs` - [#24166](https://github.com/storybookjs/storybook/pull/24166), thanks [@bryanjtc](https://github.com/bryanjtc)!
- Vite: Support Vite 5 - [#24395](https://github.com/storybookjs/storybook/pull/24395), thanks [@IanVS](https://github.com/IanVS)!
- Web-components: Add Lit3 support - [#24437](https://github.com/storybookjs/storybook/pull/24437), thanks [@shilman](https://github.com/shilman)!
- Webpack: Display errors on build - [#24377](https://github.com/storybookjs/storybook/pull/24377), thanks [@yannbf](https://github.com/yannbf)!
- Webpack: Categorize builder error - [#24031](https://github.com/storybookjs/storybook/pull/24031), thanks [@yannbf](https://github.com/yannbf)!
- Webpack: Use logger.warn on warnings - [#24472](https://github.com/storybookjs/storybook/pull/24472), thanks [@yannbf](https://github.com/yannbf)!
</details>
