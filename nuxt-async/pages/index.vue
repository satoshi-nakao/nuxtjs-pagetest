<template>
  <div class="container">
    <div>
      <!--{{ users[0].id }},{{ users[0].name }}-->
      <p class="title">下記に「https://jsonplaceholder.typicode.com/users」のデータを表示させる</p>
      <ol>
        <li v-for="user in users" :key="user.id" class="OrederedList">
          {{ user.id }},{{ user.name }},{{ user.company.name }}
        </li>
      </ol>
    </div>
  </div>
</template>

<script>
const axios = require('axios')
let url = 'https://jsonplaceholder.typicode.com/users'

export default {
  asyncData({ params, error }){
    return axios.get(url)
     .then((res) => {
       return { users: res.data }
      })
     .catch((e => {
       console.log(e.response.status)
      error({ users:e.response.status, message: "エラーだよ！" })
     }))
  }
}
</script>


<style>
.title {
  color: blueviolet;
}
.OrederedList {
  color:red
}



</style>
