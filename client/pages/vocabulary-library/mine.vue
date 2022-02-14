<template>
	<main>
		<heading>
			<i class="mdi mdi-library text-4xl pr-4"></i>
			{{ $t('my_vocabulary_library').toCapitalizePhrases() }}
		</heading>
	</main>
</template>
<script type="text/javascript">
export default{
	head(){
		return {
			title: this.$t('my_vocabulary_library').toCapitalizePhrases()
		}
	},
	middleware: 'auth'
}
</script>