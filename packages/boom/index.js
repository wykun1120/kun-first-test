import Boom from './src'

Boom.install = function (Vue) {
  Vue.component(Boom.name, Boom)
}

export default Boom
