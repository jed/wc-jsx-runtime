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
      <title>Hello, world!</title>
    )
  }
}

class AppBody extends HTMLBodyElement {
  connectedCallback() {
    this.append(<HelloWorld />)
  }
}

class HelloWorld extends HTMLElement {
  connectedCallback() {
    this.append('Hello, world!')
  }
}

document.documentElement.replaceWith(<AppHtml />)
