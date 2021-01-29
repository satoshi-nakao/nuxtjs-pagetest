// import { create } from "core-js/fn/object"
// import Vuex from "vuex"

export const state = () => ({
    counter: 0
  })
  
  export const mutations = {
    countUp: function(state){
      state.counter++
    },
    reset: function(state){
      state.counter = 0
    }
  }

//   export const mutions = {
//       reset: function(state){
//           state.couter = 0
//       }
//   }
//   const createStore = () => {
//     return new Vuex.Store({
//       state: function(){
//           return {
//               message: "Counter App",
//               count: 0
//           }
//       },
      // data() {
  //   return {
  //     number: 0
  //   }
  // },
//   computed: {
//     count() {
//       return $store.state.count;
//       // this.number+= 1;
//       //this.number++;
//     }
//   },
//   methods: {
//     increment() {
//         $store.state.count+= 1;
//     }
//   },
//     actions ={
//     updataMessageAction(context, payload) {
//         context.commit('updataMessage', payload)
//     }
// }
//     })
    
// }
// export default createStore
