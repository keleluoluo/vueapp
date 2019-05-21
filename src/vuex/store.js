import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


//vuex包含以下四部分
const state={
  //要改变的东西
  photoList:[]
};

const mutations={
  //通过一个方法来改变
   setPhotoList(state,status){
     state.photoList=status;
  }
};
//相当于computed
const getters={

};


//业务逻辑
const actions={
  setPhotoList({
    commit
    },status){
    commit('setPhotoList',status)
  }
};

export  default  new Vuex.Store({
  state,
  mutations,
  getters,
  actions
})
