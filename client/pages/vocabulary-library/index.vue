<template>
	<main>
		<heading>
			<i class="mdi mdi-library-shelves text-4xl pr-4"></i>
			{{ $t('vocabulary_library_market').toCapitalizePhrases() }}
		</heading>
	</main>
</template>
<script type="text/javascript">
export default{
	head(){
		return {
			title: this.$t('vocabulary_library_market').toCapitalizePhrases()
		}
	}
}
</script>