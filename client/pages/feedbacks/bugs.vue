<template>
	<main>
		<heading>
			<i class="mdi mdi-bug-outline text-4xl pr-4"></i>
			{{ $t('bugs').toCapitalizePhrases() }}
		</heading>
	</main>
</template>
<script type="text/javascript">
export default{
	head(){
		return {
			title: this.$t('bugs').toCapitalizePhrases()
		}
	}
}
</script>