Create a component that attaches global CSS utility classes to be used in all of the app.

You must create utility classes for margins and paddings, all direction plus `x` and `y`

Here is a helper function to make your job faster

```typescript
function generateUtilityCSSClasses(args: {
  prefix: string;
  values: Record<string, string>;
  breakpoints: Record<string, string>;
  getCSSPropertiesString: (value: string) => string;
}) {
  let css = "";

  for (const [valueName, valueValue] of Object.entries(values)) {
    css += `.${args.prefix}-${valueName} {
  ${args.getCSSPropertiesString(valueValue)}
}
`;
  }

  for (const [breakpointKey, breakpointValue] of Object.entries(breakpoints)) {
    css += `@media (min-width: ${breakpointValue}px) {
${(() => {
  let css = "";
  for (const [valueName, valueValue] of Object.entries(values)) {
    css += `.${args.prefix}-${breakpointKey}-${valueName} {
${args.getCSSPropertiesString(valueValue)}
}
`;
  }

  return css;
})()}
}
`;
  }

  return css
}
```