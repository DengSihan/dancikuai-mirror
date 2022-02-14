<template>
	<main>
		<heading>
			<img v-lazy="`/footage/ielts-logo.svg`" height="30" alt="ielts-logo">
			<span class="pl-4">
				{{ $t('ielts').toCapitalizePhrases() }}
			</span>
		</heading>
	</main>
</template>
<script type="text/javascript">
export default{
	head(){
		return {
			title: this.$t('ielts').toCapitalizePhrases()
		}
	}
}
</script>