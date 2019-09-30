<template>
  <aside class="c-cart">
    <h3>{{ __('sidebar.your_quote') }}</h3>
    <small>{{ __('sidebar.your_informations_will_appear') }}</small>
  </aside>
</template>

<script>
export default {
  name: 'cart',
}
</script>

<style lang="scss">
.c-cart{
  width: 25%; float: left;
}
</style>
