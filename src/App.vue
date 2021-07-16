<template>
<!-- 

  ref的使用：
    1.标签中直接编写 ref="xxxx"
    2.通过this.$refs.xxxx获取
    3.备注:
        1.若给html内置标签打ref，则获取到的是真实DOM节点
        2.若给组件标签打ref，则获取到的是组件实例对象。

 -->
  <div>
    <button ref="btn" @click="showData">点我获取焦点</button>
    <!-- <input type="text" v-model="keyWord" /> -->
    <!-- 给input标签打了一个ref，input标签是html内置的标签, 所以通过this.$ref获取的是真实的DOM节点 -->
    <input type="text" ref="keyWord" />
    <!-- 组件ref -->
    <school ref="xuexiao" :carName="carName"/>
  </div>
</template>

<script>
//引入School组件
import School from "./components/School.vue";
export default {
  //注册组建--局部注册
  components: {
    School,
  },
  //配置数据
  data() {
    return {
      carName:'马自达阿特兹',
    };
  },
  //配置方法
  methods: {
    showData() {
      // console.log(this.$refs.keyWord.value);
      // console.log(this.$refs.btn.innerText);
      console.log(this.$refs.xuexiao);
      //获取焦点
      this.$refs.keyWord.focus()
    },
  },
};
</script>

<style>
</style>