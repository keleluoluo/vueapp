<template>
    <div class="header" :style="{background:bg}">
        <a class="home">首页</a>
        <h2 class="title">
          <slot name='title'></slot>
        </h2>
    </div>
</template>

<script>
    export default {
      props:['bg']
    }
</script>

<style  scoped>
.header{
    height: 15vw;
    background: lightblue;
    position: fixed;
    width: 100%;
    line-height: 15vw;
}
    .home{
        color: #fff;
        padding: 4vw;
    }
    .title{
        position: absolute;
        top: 50%;
        left: 50%;
        /*在不知道宽高的情况下*/
        transform: translate(-50%,-50%);
        color: #fff;
    }
</style>



























