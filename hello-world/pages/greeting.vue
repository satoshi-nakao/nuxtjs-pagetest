<template>
　　<div>
    <h1>{{ message }}</h1>
    <button @click="returnTop">最初のページに戻る</button>
    <hr>
    <p>下記は「button @click="returnTop"」と同じ操作</p>
    <NuxtLink to="/">最初のページに戻る</NuxtLink>
　　</div>
</template>

<script>
export default {
    data() {
        return{
            message:"~~~ヾ(＾∇＾)おはよー♪"
        }
    },
    methods: {
        returnTop() {
            this.$router.push('/')
        }
    }
}
</script>