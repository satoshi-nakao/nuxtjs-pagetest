<template>
    <div>
    <h2>おはようございます</h2>
    <button @click="returnTop">最初のページに戻る</button>
    </div>
</template>

<script>
export default {
    methods: {
        returnTop() {
            this.$router.push('/')
        }
    }
}
</script>