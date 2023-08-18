import Module from './src/index.vue'
// 给组件定义install方法
Module.install = Vue => {
  Vue.component(Module.name, Module) //注意这里使用了组件中的name,
}
export default Module
