<template>
    <div>
      <editor v-model="contentAA"></editor>
     <!-- <textarea v-model="content" name="" id="" cols="30" rows="10"></textarea>-->
      <input type="button" value="提交" >
      <input type="button" value="reset" @click="reset">
      <div>{{contentAA}}</div>
    </div>
</template>

  <script>
    import Editor from './Editor.vue'
    export default {
      data () {
        return {
          contentAA: '222111'
        }
      },
      components: {
        Editor
      },
      methods: {
        reset () {
          this.contentAA = 'new value'
        }
      }
    }
  </script>

<style scoped>

</style>
