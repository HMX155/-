<template>
  <div>
      <h2 class="name">学校名称:{{name}}</h2>
      <h2 class="address">学校地址:{{address}}</h2>
      <h4>我收到的信息是--{{carName}}</h4>
  </div>
</template>

<script>
export default {
    
    //配置数据
    data(){
    console.log("School",this);
        return {
            name:"南阳理工学院",
            address:"南阳市宛城区"
        }
    },
    //声明接收props ---最完整的写法----限制了类型、控制了必要性、指定了默认值
    // props:{
    //     carName:{
    //         type:String,  //类型
    //         required:true, //必要性
    //         default:"奔驰"  // 默认值
    //     }
    // }

    //声明接受props ---限制类型
    // props:{
    //     carName:String
    // }

    //声明接受props---精简写法 ---啥都不限制
    props:['carName']

}
</script>

<style>
    .name{
        background-color: #bfa;
    }
    .address{
        color:aqua
    }
</style>