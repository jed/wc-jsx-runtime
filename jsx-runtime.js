export {jsx, jsx as jsxs, jsx as Fragment}

let definitions = new Map()

function jsx(node, props, key) {
  if (node === jsx) node = document.createDocumentFragment()

  else if (typeof node === 'function') {
    let definition = definitions.get(node)

    if (!definition) {
      let is = node.name.replace(/(.)([A-Z])/g, '$1-$2').toLowerCase()
      let name = Object.getPrototypeOf(node).name.replace(/^HTML|Element$/g, '').toLowerCase()
      definition = name ? [name, {is}] : [is]
      customElements.define(is, node, name ? {extends: name} : null)
      definitions.set(...definition)
    }

    node = document.createElement(...definition)
  }

  else node = document.createElement(node)

  if (key) node.setAttribute('key', key)

  for (let name in props) {
    if (name !== 'children') node.setAttribute(name, props[name])

    else Array.isArray(props[name])
      ? node.append(...props[name])
      : node.append(props[name])
  }

  return node
}
