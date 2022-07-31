# wc-jsx-runtime

A JSX transform for Web Components

## Usage

This library transforms JSX in web components into DOM operations. [React's new JSX transform](https://reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html), so all you need to do is configure your build tool to use `https://esm.sh/wc-jsx-runtime` for `jsxImportSource`.

This transform:

1. Turns all JSX into DOM operations (ie, `<div/>` becomes `document.createElement('div')`),
2. Automatically calculates the tag name of each web component by hyphen-casing its constructor name (ie, `AppBody` becomes `app-body`),
3. Determines whether the web component is autonomous (ie, `<hello-world>`) or custom (ie, `<div is="hello-world">`) based on whether it inherits from `HTMLElement`.
4. Automatically runs `customElements.define` the first time the web component is instantiated.

## Example

Here's [an example](./test/index.jsx) that uses both custom (such as `<html is="app-html">`) and autonomous (such as `<hello-world></hello-world>`) web components.

```jsx
class AppHtml extends HTMLHtmlElement {
  connectedCallback() {
    this.append(
      <AppHead />,
      <AppBody />
    )
  }
}

class AppHead extends HTMLHeadElement {
  connectedCallback() {
    this.append(
      <title>Testing ws-jsx-runtime...</title>
    )
  }
}

class AppBody extends HTMLBodyElement {
  connectedCallback() {
    this.append(<HelloWorld name='JSX'/>)
  }
}

class HelloWorld extends HTMLElement {
  connectedCallback() {
    this.append(`Hello, ${this.getAttribute('name')}!`)
  }
}

document.documentElement.replaceWith(<AppHtml />)
```

Once run, the DOM will look like this:

```html
<html is="app-html">
  <head is="app-head">
    <title>Testing ws-jsx-runtime...</title>
  </head>
  <body is="app-body">
    <hello-world>Hello, JSX!</hello-world>
  </body>
</html>
```

## Todo

- Add special cases for elements with names that don't conform to `HTML${tagName}Element` pattern.
