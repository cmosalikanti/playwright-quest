### Accessibility Testing
Playwright can be used to test an application for many types of accessibility issues.

A few examples of problems this can catch include:

1.  Text that would be hard to read for users with vision impairments due to poor color contrast with the background behind it
2.  UI controls and form elements without labels that a screen reader could identify
3.  Interactive elements with duplicate IDs which can confuse assistive technologies

### Web Content Accessbility Guidelines (WCAG)
https://www.w3.org/TR/WCAG21/

### Manual Assessments
 A free and open source dev tool that walks you through assessing a website for WCAG 2.1 AA coverage. 

Please see: 
 https://accessibilityinsights.io/docs/web/overview/?referrer=playwright-accessibility-testing-js


### Axe
Accessibility Testing Engine: https://www.deque.com/axe/

Playwright relies on @axe-core/playwright package which adds support for running the Axe Engine.

#### Disabling individual scan rules
If the applications has many different preexisting violations of a specific rule, you can use AxeBuilder.disableRules() to temporarily disable individual rules until you're able to fix the issues.

A complete list of axe's rules: https://github.com/dequelabs/axe-core/blob/master/doc/rule-descriptions.md
```
await page.goto('https://www.saucedemo.com/');
  const accessibilityScanResults = await new AxeBuilder({ page })
                                        .disableRules(['page-has-heading-one', 'region', 'landmark-one-main'])
                                        .analyze();
```

