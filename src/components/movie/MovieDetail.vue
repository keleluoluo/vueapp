<template>
  <div class="detail">
    <div class="detail-top">
      <div class="detail-img">
        <img :src="movieDetail.poster" alt=""/>
      </div>
      <div class="detail-info">
          <span class="title" v-text="'片名：'+movieDetail.title"></span>
          <span class="title" v-text="'语言：'+movieDetail.language"></span>
          <span class="title" v-text="'主演：'+movieDetail.actors"></span>
          <span class="title" v-text="'年份：'+movieDetail.year"></span>
          <span class="title" v-text="'导演：'+movieDetail.directors"></span>
          <span class="title" v-text="'时长：'+movieDetail.runtime"></span>
          <span class="title" v-text="'类型：'+movieDetail.genres"></span>
      </div>
    </div>
    <div class="detail-bottom">
      <p v-text="'简介：'+movieDetail.plot_simple"></p>
    </div>
  </div>
</template>

<script>
  import Axios from "axios"
  export default {
    name: 'MovieaDetail',
    data: function () {
      return {
        movieDetail: ''
      }
    },
    mounted: function () {
      this.getDetail()
    },
    methods: {
      getDetail: function () {
        var that = this;
        Axios.get(API_PROXY + 'http://v.juhe.cn/movie/query?key=9d0a3e089bc372f3d28e473c7486aa7f&movieid=' + that.$route.params.movieId)
          .then(function (response) {
            console.log(response);
            that.movieDetail = response.data.result;
            console.log(that.movieDetail)
          })
          .catch(function (error) {
            console.log(error);
          });
      }
    }
  }
</script>

<style>
  .detail{overflow: hidden;}
.detail-top{
  margin-top: 15vw;;
  padding: 5vw 8vw;
  background: rgba(0,0,0,.5);
  overflow: hidden;
}
  .detail-img{width: 30vw;float: left;}
  .detail-img img{width: 100%;height: 100%;}
  .detail-info{float: left;margin-left: 5vw;width: 48vw;}
  .detail-info .title{color: #fff;display: block;}
  .detail-bottom{padding: 5vw;}
</style>
