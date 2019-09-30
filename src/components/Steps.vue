<template>
  <nav class="c-steps">

    <router-link to="/" class="step">
      <span>1</span> {{ __('steps.profil') }}
    </router-link>

    <router-link to="/step-2" class="step">
      <span>2</span> {{ __('steps.needs') }}
    </router-link>

    <router-link to="/step-3" class="step">
      <span>3</span> {{ __('steps.proposal') }}
    </router-link>

    <router-link to="/step-4" class="step">
      <span>4</span> {{ __('steps.options') }}
    </router-link>

  </nav>
</template>

<script>

  export default {
    name: 'steps'
  }
</script>

<style lang="scss">
  .c-steps{
    .step{
      &.router-link-active{ background: green; color: white }
    }
  }
</style>
