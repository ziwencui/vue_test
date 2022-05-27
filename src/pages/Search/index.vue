<template>
  <div>
      <h1>params参数-------{{$route.params.keyWord}}=========={{keyWord}}</h1>
  </div>
</template>

<script>
export default {
    name: '',
    //路由组件可以传递props
    props:['keyWord','k']
}
</script>

<style scoped>

</style>