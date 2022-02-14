<template>
	<main>
		<heading>
			<img v-lazy="`/footage/npee-logo.png`" height="30" alt="npee-logo">
			<span class="pl-4">
				{{ $t('npee').toCapitalizePhrases() }}
			</span>
		</heading>
	</main>
</template>
<script type="text/javascript">
export default{
	head(){
		return {
			title: this.$t('npee').toCapitalizePhrases()
		}
	}
}
</script>