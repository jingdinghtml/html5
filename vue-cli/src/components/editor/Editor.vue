<template>
    <div>
      {{value}}
      <textarea @input="cc" v-model="contentA" name="" id="" cols="30" rows="10" ></textarea>
    </div>
</template>

<script>
    export default {
      data () {
        return {
          contentA: ''
        }
      },
      props: {
        value: {
//          type: String
        }
      },
//      /*dom init 1次*/
      mounted () {
        this.contentA = this.value
      },
      watch: {
        value (newValue, oldValue) {
          this.contentA = newValue
        }
      },
      methods: {
        cc () {
          this.$emit('input', this.contentA)
//          this.$emit('change', this.contentA)
        }
      }
    }
</script>

<style scoped>

</style>
