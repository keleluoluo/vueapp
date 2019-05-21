<template>
  <div class="newtop">
    <ul>
      <li v-for="item in newList">
        <a :href="item.url">
          <h3 v-text="item.title"></h3>
          <p v-text="item.date"></p>
          <img :src="item.thumbnail_pic_s" alt=""/>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
  import Axios from 'axios'
  export default {
    name:'MusicList',
    data:function() {
      return{
        newList:''
      }
    },
    created:function() {
      this.getNews()
    },
    methods:{
      getNews:function(){
        var that=this;
        Axios.get(API_PROXY+'http://v.juhe.cn/toutiao/index?key=f9937b0cd85f6f1de1acce821dac8056')
                .then(function(response){
                  console.log(response);
                  that.newList=response.data.result.data;
                  console.log(that.newList)
                })
                .catch(function(error){
                  console.log(error);
                });
      }
    }
  }
</script>

<style scoped>
.newtop{padding: 5vw;overflow: hidden;}
  .newtop ul{margin-top: 15vw;}
  p{margin: 3vw auto;}
  li{margin-bottom: 5vw;}
  a{width: 100%;height: 100%;}
</style>
