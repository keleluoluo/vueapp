<template>
    <div class="list">
        <ul>
          <li v-for='(item,index) in movieList' :key='item.movieId' @click="goDetail(item.movieId)">
            <img :src="item.pic_url" alt=""/>
            <div class="title">
                <span v-text='item.movieName'></span>
            </div>
          </li>
        </ul>
    </div>
</template>

<script>
    import Axios from 'axios'
    export default {
        name:'MovieList',
        data:function() {
            return{
                movieList:''
            }
        },
        created:function() {
            this.getMovie()
        },
        methods:{
            getMovie:function(){
                var that=this;
                Axios.get(API_PROXY+'http://v.juhe.cn/movie/movies.today?key=9d0a3e089bc372f3d28e473c7486aa7f&limit=10&offset=0&cityid=26')
                        .then(function(response){
                            console.log(response);
                            that.movieList=response.data.result;
                            console.log(that.movieList)
                        })
                        .catch(function(error){
                            console.log(error);
                        });
            },
          goDetail:function(movieId){
             this.$router.push('/movie/movieDetail/'+movieId)
          }
        }
    }
</script>

<style>
  .list{overflow: hidden;padding: 0 5vw;}
  .list ul{margin-top: 15vw;}
  .list ul li{margin: 3vw auto;overflow: hidden;}
  .list img{float: left;}
  .list .title{text-align: center;}
</style>
