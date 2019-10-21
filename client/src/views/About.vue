<template>
  <div class="about">
    <h1>This is an about page</h1>

    <form method="post" onsubmit="return false">
      <input type="text" autocomplete="off" ref="name">
      <input type="submit" @click.prevent="submit()">
    </form>
  </div>
</template>

<script>
  export default{
    methods: {
      submit(){
        this.axios.post('api/test',{
          name:this.$refs.name.value
        })
      }
    }
  }
</script>
