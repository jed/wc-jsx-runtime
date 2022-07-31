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
