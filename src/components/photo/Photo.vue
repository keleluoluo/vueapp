<template>
  <div>
    <common-header bg="rgb(1,52,86)">
      <span slot="title">星座运势</span>
    </common-header>
    <router-view/>
    <common-footer bg="rgb(1,52,86)"></common-footer>
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
