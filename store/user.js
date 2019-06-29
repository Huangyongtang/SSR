export const state=()=>{
    return {
        userInfo:{
            userName:'',
            user:{}
        }
    }
}
export const mutations={
    setUserInfo:(state,data)=>{
        state.userInfo=data
        console.log(state.userInfo);
    },
    clearUserInfo:(state,data)=>{
        state.userInfo={
            userName:'',
            user:{}
        }
    }
}
export const actions={
    login({commit},data){
      return  this.$axios({
            url:'/accounts/login',
            method:'POST',
            data
        }).then(res=>{
           
           commit('setUserInfo',res.data)
           Promise.resolve()
        })
    }
}