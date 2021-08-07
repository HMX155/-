<template>
  <div>
    <div class="box">
      <h1 style="text-align: center">一劳永逸</h1>

      <h3>状态选择（基本状态）</h3>
      <select v-model.number="location">
        <option value="1">在家</option>
        <option value="2">在校</option>
        <option value="3">在外地实习</option>
        <option value="4">其他</option></select
      >&nbsp;

      <select v-model.number="status">
        <option value="0">良好</option>
        <option value="1">发烧 咳嗽 乏力</option>
        <option value="2">被隔离</option>
        <option value="3">被确诊</option></select
      >&nbsp;

      <select v-model.number="temp">
        <option value="0">正常</option>
        <option value="1">低烧</option>
        <option value="2">高烧</option></select
      >&nbsp;

      <select v-model.number="contact">
        &nbsp;
        <option value="0">无相关情况</option>
        <option value="1">接触过疑似病人</option>
        <option value="2">接触过确诊病人</option></select
      >&nbsp;
      <h3>地区代码（下方查询链接，只保留前六位）</h3>
      省：<input type="text" v-model="province" placeholder="请输入省代码" />
      市：<input type="text" v-model="city" placeholder="请输入市代码" />
      区（县）：<input
        type="text"
        v-model="country"
        placeholder="请输入区（县）代码"
      />
      <br />
      <h3>经纬度坐标（手机指南针即可获取，记得转换后再使用，保留四位小数）</h3>
      纬度：<input type="text" v-model="dimension" placeholder="请输入纬度" />
      经度<input type="text" v-model="longitude" placeholder="请输入经度代码" />

      <h3>抓包token（从抓包工具获取自己的token）</h3>
      token：<input
        type="text"
        v-model="token"
        placeholder="请输入纬度"
        style="width: 300px"
      />
      <br />
      <br />
      <br />

      <button class="btn" @click="go">执行</button>&nbsp;
      <button class="btn" @click="close">结束</button>&nbsp;
    </div>

    <h3>便捷通道</h3>
    1.<a href="http://www.minigps.net/fc.html" target="_blank">经纬度转换</a>
    <br />
    <br />
    <br />
    2.<a href="https://xingzhengquhua.bmcx.com/" target="_blank"
      >国家行政区代码查询</a
    >
    <br />
    <br />
    <br />
    3.<a
      href="https://www.telerik.com/fiddler/fiddler-everywhere"
      target="_blank"
      >抓包工具下载</a
    >
  </div>
</template>

<script>
export default {
  /*
  默认：韩明轩
  2:程坤
  3：宋婕
  */
  name: "jiankangTest",
  data() {
    return {
      //维度
      dimension: 35.22361, // 维度
      dimension2: 34.78694, // 维度
      dimension3: 33.42916, // 维度
      /********************************************************** */
      //经度
      longitude: 113.44776, // 经度
      longitude2: 113.63027, // 经度
      longitude3: 113.59944, // 经度
      /********************************************************** */
      //省代码
      province: 410000, //省代码
      province2: 410000, //省代码
      province3: 410000, //省代码
      /********************************************************** */
      //市代码
      city: 410800, //省代码    
      city2: 410100, //省代码   
      city3: 411100, //省代码   
      /********************************************************** */
      //区县代码
      country: 410821, // 区、县代码   
      country2: 410105, // 区、县代码  
      country3: 411121, // 区、县代码  
      /********************************************************** */
      //在哪里
      location: 1, // 1在家  2在校   3在外地实习    4其他
      location2: 1, // 1在家  2在校   3在外地实习    4其他
      location3: 1, // 1在家  2在校   3在外地实习    4其他

      /********************************************************** */
      //token
      token: "bce8f1ea-323d-43b7-becf-97f7c3f47bd0", //e47c03f1-b877-4c65-95ac-97fc4c4b39e8
      token2: "e47c03f1-b877-4c65-95ac-97fc4c4b39e8", //e47c03f1-b877-4c65-95ac-97fc4c4b39e8
      token3: "f589c3e7-ff49-46fd-a368-76e8a37c9a41", //e47c03f1-b877-4c65-95ac-97fc4c4b39e8

      status: 0, //  没病就不用改
      temp: 0, //  没病就不用改
      contact: 0, //  没病就不用改

      timer: null,
    };
  },
  methods: {
    //post请求
    //韩明轩
    sendData() {
      var data = `pcc=${this.province}%2C${this.city}%2C${this.country}&gps=${this.dimension}%2C${this.longitude}&location=${this.location}&status=${this.status}&temp=${this.temp}&contact=${this.contact}`;

      var config = {
        method: "post",
        url: "/",
        headers: {
          Accept: "application/json, text/plain, */*",
          appid: "1",
          guest:
            "b2w4YlB2N2ssMTE3OTcsaTU3NUFOV0YsMTYyNzgxNDI2MC45ODksTVVGZV82dlhMSXIwLGZjZDM2YmI3OTdiOWI3MGUwMGZmNmE4OGYxNDIxYjM2",
          token: this.token,
        },
        data: data,
      };

      this.$axios(config)
        .then(function (response) {
          console.log(JSON.stringify(response.data));
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    //程坤
    sendData2() {
      var data = `pcc=${this.province2}%2C${this.city2}%2C${this.country2}&gps=${this.dimension2}%2C${this.longitude2}&location=${this.location2}&status=${this.status}&temp=${this.temp}&contact=${this.contact}`;

      var config = {
        method: "post",
        url: "/",
        headers: {
          Accept: "application/json, text/plain, */*",
          appid: "1",
          guest:
            "b2w4YlB2N2ssMTE3OTcsaTU3NUFOV0YsMTYyNzgxNDI2MC45ODksTVVGZV82dlhMSXIwLGZjZDM2YmI3OTdiOWI3MGUwMGZmNmE4OGYxNDIxYjM2",
          token: this.token2,
        },
        data: data,
      };

      this.$axios(config)
        .then(function (response) {
          console.log(JSON.stringify(response.data));
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    //宋婕
    sendData3() {
      var data = `pcc=${this.province3}%2C${this.city3}%2C${this.country3}&gps=${this.dimension3}%2C${this.longitude3}&location=${this.location3}&status=${this.status}&temp=${this.temp}&contact=${this.contact}`;

      var config = {
        method: "post",
        url: "/",
        headers: {
          Accept: "application/json, text/plain, */*",
          appid: "1",
          guest:
            "b2w4YlB2N2ssMTE3OTcsaTU3NUFOV0YsMTYyNzgxNDI2MC45ODksTVVGZV82dlhMSXIwLGZjZDM2YmI3OTdiOWI3MGUwMGZmNmE4OGYxNDIxYjM2",
          token: this.token3,
        },
        data: data,
      };

      this.$axios(config)
        .then(function (response) {
          console.log(JSON.stringify(response.data));
        })
        .catch(function (error) {
          console.log(error);
        });
    },

    //开启
    go() {
      if (this.timer) {
        console.log("服务已经在运行中，不必重复执行");
      } else {
        console.log("服务开启成功！", new Date());
        this.timer = setInterval(() => {
          if (new Date().getHours() === 1) {
            this.sendData();
            this.sendData2();
            this.sendData3();
          } else {
            console.log(
              "主人~，时机还未到达，暂时还不能上报哟！小的会在凌晨1点钟为你上报"
            );
          }
        }, 3600000);
        //3600000
      }
    },

    //关闭
    close() {
      clearInterval(this.timer);
      this.timer = null;
      console.log("服务结束成功！", new Date());
    },
  },
};
</script>

<style>
.box {
  padding: 20px;
  background-color: skyblue;
}
.btn {
  width: 80px;
  height: 50px;
  border: none;
}
.btn:hover {
  background-color: orange;
}
</style>