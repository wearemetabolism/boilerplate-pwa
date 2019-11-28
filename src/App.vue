<template>
  <div id="app">
    <heading/>
    <div class="steps">
      <steps/>
      <router-view/>
    </div>
    <cart/>
  </div>
</template>

<script>
  // @ is an alias to /src
  import Cart from '@/components/Cart.vue'
  import Steps from '@/components/Steps.vue'
  import Heading from '@/components/Heading.vue'

  export default {
    name: 'app',
    components: {
      Cart,
      Steps,
      Heading
    },
    computed: {
      dico(){
        return this.$store.getters.dico();
      }
    }
  }
</script>


<style lang="scss">

  //@import '../node_modules/vue-form-generator/dist/vfg.css';

  @import '../node_modules/@metabolism/framework/scss/reset';
  @import '../node_modules/@metabolism/framework/scss/data-attribute/grid';

  @import '../node_modules/@metabolism/framework/vuejs/reset';

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  .steps{
    float: left; width: 75%;
  }

  input{ border: 1px solid }
  input[type=radio]{
    border: 1px solid; border-radius: 50%; width: 14px; height: 14px;
    &:checked{ background: #000 }
  }
  input[type=checkbox]{
    border: 1px solid; width: 14px; height: 14px;
    &:checked{ background: #000 }
  }
</style>
