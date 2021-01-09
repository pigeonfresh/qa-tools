⚠️ This package is still work in progress but can be used since you probably won't include this in your bundled JS.

# QA Tools

QA tools is a package to provide developers with tools to assure the quality of their layouts. Simple install with yarn or NPM.

`yarn add qa-tools` or `npm install qa-tools`

##  gridOverlay

The first tool available is gridOverlay. With minor configuration it will be able to show a grid-column overlay like most designers tend to provide. The configuration can be past as custom props or as values. When the same naming convention is used the tool can be used without having to specify values.

⚠️ gridOverlay does NOT provide any help with creating grids! It is only intended to be able to visually help you with checking your layout!

An example can be found on [codesandbox]('https://codesandbox.io/s/gridoverlay-example-73jo3' "Example of gridOverlay on codesandbox").


It will except an object with the following parameters:
* `maxWidth` default: `var(--grid-max-width)`
* `padding` default: `var(--grid-padding)`
* `gridGap` default: `var(--grid-gap)`
* `gridColumns` default: `var(--grid-columns)`
* `color` default: `tomato`

For all params CSS values (px, rem, em, % etc) are allowed. For the columns I would suggest using a custom property. This makes it possible to have a 4 column switch into a 12 column i.e.

Below an example for when you can not use the default properties:

```ts
import { gridOverlay } from 'qa-tools';

const gridOverlayProps = {
  maxWidth: '1920px',
  padding: 'clamp(20px, calc(1.25rem + ((1vw - 3.75px) * 6.4725)), 120px);',
  gridGap: '30px',
  gridColumns: 'var(--columns)',
  color: 'hotpink',
}

gridOverlayProps(gridOverlayProps)
```
 or if you just want to update the color:
 
```ts
gridOverlay({ color: "magenta" });
```
