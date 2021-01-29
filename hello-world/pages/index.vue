<template>
  <div class="container">
    <h2 v-text="message"> </h2>
    <h3>{{message}}</h3>
    <hr>
    <button @click="toOhayo">ohayoのページにいく</button>
    <hr>
    <button @click="toAisatu">aisatuのページにいく</button>
    <hr>
    <NuxtLink to="greeting">~~~ヾ(＾∇＾)おはよー♪のページに行く</NuxtLink>
    <hr>
    <hr>
    <router-link :to="{ path: 'greeting' }">~~~ヾ(＾∇＾)おはよー♪のページに行く</router-link>
    <hr>
    <NuxtLink to="newpage">新しいページ</NuxtLink>
  </div>
</template>

<script>
export default {
 data(){
   return {
     message:"hello world!"
   }
 },
 methods: {
   toOhayo() {
     this.$router.push("ohayo");
   },
   toAisatu() {
     this.$router.push("Aisatu");
   }
 }
}
</script>

