import Vue from 'vue/dist/vue.js'
import App from './App.vue'

Vue.config.productionTip = false  //关闭生产提示

new Vue({

  /*
    vue.runtime.common.js利lue.js有何区别?
    vue.runtime.common.js（项目中用的多）:
         1.不包含模板解析器，打包后体积小
         2.配置项中的不能写template，要用render: h => h(App)代替
    vue.js :
          1.包含解模板析器,打包后体积大2.配置可以写template
  */
  // render: h => h(App),
  components:{App},
  template:`<App/>`
}).$mount('#app')
