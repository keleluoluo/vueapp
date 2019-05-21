<template>
  <div>
    <common-header bg="rgb(0,155,250)">
      <span slot="title">新闻头条</span>
    </common-header>
    <router-view/>
    <common-footer bg="rgb(0,155,250)"></common-footer>
  </div>
</template>

<script>
  import CommonHeader from '../common/Header'
  import CommonFooter from '../common/Footer'
  export default {
    components:{
      CommonHeader,
      CommonFooter
    }
  }
</script>

<style  scoped>

</style>
