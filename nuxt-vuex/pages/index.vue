<template>
  <div class="container">
    <div>
     <!-- <p>{{ $store.state.message }}</p> -->
　　　<!--上記がクラシックモードの書き方-->
　　　<p>{{ $store.state.hello.message }}</p>
     <!--<button @click="$store.commit('updataMessage')">Update</button>-->
     <!-- <button @click="$store.commit('updataMessage', 'Commit with payload')">Update</button> -->
     <!-- <button @click="$store.dispatch('updataMessageAction')">Dispatch</button> -->
     <!-- <button @click="$store.dispatch('updataMessageAction', 'Dispatch with payload')">Dispatch</button> -->
     <button @click="$store.dispatch('hello/updataMessageAction', 'Dispatch with payload')">Dispatch</button>
     
    </div>
  </div>
</template>

<script>
export default {}
</script>

