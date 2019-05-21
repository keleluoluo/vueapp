<template>
    <div class="star">

    </div>
</template>

<script>
    import Axios from 'axios'
    export default {
        data:function() {
            return{
                items:''
            }
        },
        created:function() {
            this.getNews()
        },
        methods:{
            getNews:function(){
                var that=this;
                Axios.get(API_PROXY+'http://web.juhe.cn:8080/constellation/getAll',{
                    //?key=b07e944c58e969cb077f3333263a3d2b&consName="处女座"&type=today
                    params:{
                        consName:'处女座',
                        type:'today',
                        key:'b07e944c58e969cb077f3333263a3d2b'
                    }
                })
                        .then(function(response){
                            console.log(response);
                            that.items=response.data.result;
                            console.log(that.items)
                        })
                        .catch(function(error){
                            console.log(error);
                        });
            }
        }
    }
</script>

<style scoped>

</style>
