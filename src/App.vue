<template>
  <div id="app">
    <transition name="page">
      <router-view :key="$route.fullPath" />
    </transition>
    <footer-component></footer-component>
    <cookie></cookie>
  </div>
</template>

<script>
  // @ is an alias to /src
  import 'swiper/dist/css/swiper.css'
  import FooterComponent from '@/components/footer-component';
  import Cookie from '@/components/cookie';

  export default {
    name: 'app',
    data(){
      return{
        title: 'Alaska',
        background: 'white'
      }
    },
    components:{Sidebar, FooterComponent, Cookie}
  }
</script>


<style lang="scss">

  @import '../node_modules/@metabolism/framework/scss/reset';
  @import '../node_modules/@metabolism/framework/vuejs/reset';

  @import 'environment';
  @import '../node_modules/@metabolism/framework/vuejs/on-scroll/style';

  @import url('https://fonts.googleapis.com/css?family=Cormorant:400,500,700|Nunito+Sans:300,400,600&display=swap');

  html{
    font-size: 10px;
    @include scrollbar(8px, #666, #e2e4eb, 0);
    @media #{$to-small}{ font-size: 9px }
    @media #{$to-phone}{ font-size: 8px }
    @media #{$from-large}{ font-size: 11px }
    @media #{$from-4k}{ font-size: 12px }
  }

  #app {
    font-family: 'Nunito Sans', Arial, sans-serif; font-size: $fz-text;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: $c-main;
    line-height: 1.5;
    letter-spacing: 0.05em;

    @media #{$to-tablet}{ width: 100%; height: 100%; overflow: hidden }
    @media #{$to-small}{ font-size: #{$fz-text - 1px}; }
    @media #{$to-phone}{ letter-spacing: 0.04em }
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
