<template>
	<header class="c-heading">
		<div class="inner">
			<h1>{{ __('header.quote')}}</h1>
			<div class="info">
				<h2>{{ __('header.need_a_specialist')}}</h2>
				<h3>{{ __('header.call_us')}}</h3>
				<small>{{ __('header.non_surcharged')}}</small>
			</div>
		</div>
	</header>
</template>

<script>
	export default {
		name: 'heading',
	}
</script>

<style lang="scss">
	.c-heading{
		background: blue; color: white;
	}
</style>
