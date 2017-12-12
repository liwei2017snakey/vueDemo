<template>
  <div id="app">
    <mt-header fixed title="啥啊不傻"></mt-header>
    <router-view/>
    <nav class="mui-bar mui-bar-tab">
      <router-link class="mui-tab-item mui-active" to="homePage">
        <span class="mui-icon mui-icon-home"></span>
        <span class="mui-tab-label">首页</span>
      </router-link>
      <router-link class="mui-tab-item" to="notice">
        <span class="mui-icon mui-icon-email"><span class="mui-badge">9</span></span>
        <span class="mui-tab-label">消息</span>
      </router-link>
      <router-link class="mui-tab-item" to="phoneList">
        <span class="mui-icon mui-icon-contact"></span>
        <span class="mui-tab-label">通讯录</span>
      </router-link>
      <router-link class="mui-tab-item" to="setting">
        <span class="mui-icon mui-icon-gear"></span>
        <span class="mui-tab-label">设置</span>
      </router-link>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 50px;
  margin-bottom: 50px;
}
html, body, div, span, h1, h2, h3, p, em, small, strong, dl, dt, dd, ol, ul, li {
  margin: 0;
  padding: 0;
  font-size: 100%;
}
.mint-header{
  font-size: 24px;
  line-height: 50px;
  height: 50px;
}
</style>
