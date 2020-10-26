import Boom from './boom'
import Hello from './hello'

const components = [
  Boom,
  Hello
]

const install = function (Vue) {
  if (install.installed) return
  install.installed = true
  components.forEach(item => {
    Vue.component(item.name, item)
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install,
  ...components
}
