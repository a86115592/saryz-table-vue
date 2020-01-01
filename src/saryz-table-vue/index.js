import SaryzTableVueComponent from './saryz-table-vue'
import './saryz-table-vue.css'
SaryzTableVueComponent.install = function (Vue) {
  console.log(SaryzTableVueComponent.name)
  Vue.component(SaryzTableVueComponent.name, SaryzTableVueComponent)
}
// export default SaryzTableVueComponent
const components = [
  SaryzTableVueComponent
]

// 定义 install 方法
const install = function (Vue) {
  console.log(567)
  if (install.installed) return
  install.installed = true
  // 遍历并注册全局组件
  console.log(666)
  components.map(component => {
    console.log(component.name)
    Vue.component(component.name, component)
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  // 导出的对象必须具备一个 install 方法
  install,
  // 组件列表
  ...components
}
