<template>
    <div>
    <h2>{{ message }}</h2>
    <!-- <button @click="toAisatu">aisatuのページに戻る</button> -->
    <button @click="returnTop">最初のページに戻る</button>
    <button @click="toAisatu">aisatuのページにいく</button>
    <hr>
    <a href="/">最初のページに戻る</a>
    </div>
</template>

<script>
export default {
    data() {
        return{
            message: "おはよう"
        }
    },
     methods: {
        returnTop() {
            this.$router.push('/')
        },
         toAisatu() {
            this.$router.push({ path: "aisatu" });
   }
    }
}
</script>