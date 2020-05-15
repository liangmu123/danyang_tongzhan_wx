const load = {
    state:{
        loading:false
    },
    mutations:{
        SET_LOAD : (state,loading)=>{
            state.loading = loading
        }
    },
    actions:{
        SET_LOAD_MUTATIONS({commit},{loading}){
            return new Promise(resolve => {
                commit('SET_LOAD',loading)
                resolve()
            })
        }
    }
}
export default load