<template>
    <section>
　　　<h1>{{ message }}</h1>
      <p>id: {{ this.$route.params.id }}</p>
    </section>
</template>

<script>
export default {
    data() {
        return {
            message:"/users/_id.vueを表示中"
        }
    },
    validate({ params }){
        return /^\d+$/.test(params.id)
    }
    //validatteは値のチェックをする/^\d+$/は正規表現で数字を抽出する
    //「/^\d+$/」はjavascriptの表現でチェックしたい箇所を//で囲み
    //^は先頭、$は末尾を意味する。\dは数字
}
</script>