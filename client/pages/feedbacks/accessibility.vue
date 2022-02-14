<template>
	<main>
		<heading>
			<i class="mdi mdi-human-wheelchair text-4xl pr-4"></i>
			{{ $t('accessibility').toCapitalizePhrases() }}
		</heading>
	</main>
</template>
<script type="text/javascript">
export default{
	head(){
		return {
			title: this.$t('accessibility').toCapitalizePhrases()
		}
	}
}
</script>