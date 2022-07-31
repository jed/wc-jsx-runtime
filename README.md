# wc-jsx-runtime

A JSX transform for Web Components

## Usage

This library transforms JSX in web components into DOM operations. [React's new JSX transform](https://reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html), so all you need to do is configure your build tool to use `https://esm.sh/wc-jsx-runtime` for `jsxImportSource`.

## Todo

- Add special cases for elements with names that don't conform to `HTML${tagName}Element` pattern.
