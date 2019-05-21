<template>
    <div>
        <ul class="footer" :style="{background:bg}">
            <li><router-link to="/movie/movieList">电影</router-link></li>
            <li><router-link to="/music">新闻头条</router-link></li>
            <!--<li><router-link to="/photo">图片</router-link></li>-->
        </ul>
    </div>
</template>

<script>
    export default {
      props:['bg']
    }
</script>

<style  scoped>
.footer{
    position: fixed;
    bottom:0;
    width: 100%;
    height: 15vw;
    line-height: 15vw;
    background: lightblue;
    display: flex;
}
    .footer li{
        flex-grow: 1;
        text-align: center;
    }
  .footer a{
    color: #fff;
  }
</style>
