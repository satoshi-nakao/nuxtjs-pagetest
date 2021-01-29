export const state = () => ({
    message: "Hello Vuex!"
})

export const mutations = {
    updataMessage: function(state, payload){
        state.message = payload
    }
}

export const actions ={
    updataMessageAction(context, payload) {
        context.commit('updataMessage', payload)
    }
}

//モジュールモードの書き方