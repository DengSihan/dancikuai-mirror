<template>
	<main>
		<nav class="my-4 -mx-2 items-center flex font-semibold relative z-3">
			<nuxt-link :to="generateRoute({
					name: 'wordbooks'
				})"
				class="flex items-center justify-center mx-2 text-xl no-underline hover:underline">
				<i class="mdi mdi-book-open-page-variant-outline text-3xl pr-2"></i>
				{{ $t('my_wordbooks').toCapitalizePhrases() }}
			</nuxt-link>
			<i class="mdi mdi-chevron-right text-xl mx-2"></i>
			<span class="mx-2 text-xl">
				{{ $t('create_wordbook').toCapitalizePhrases() }}
			</span>
		</nav>
		<form @submit.prevent="createWordbook()">
			<section class="my-10">
				<wordbook-name-input v-model="wordbook.name" :errors="errors.name"/>
			</section>
			<section class="my-4 flex justify-end">
				<vs-button
					square
					size="large"
					type="submit"
					class="m-0">
					<span class="capitalize">
						{{ $t('create_wordbook') }}
					</span>
					<i class="mdi mdi-book-plus-outline text-lg pl-2"></i>	
				</vs-button>
			</section>
		</form>
	</main>
</template>
<script type="text/javascript">
import WordbookNameInput from '@/components/form/wordbook-name-input';
import axiosHandler from '@/mixins/axios-handler';
export default{
	scrollToTop: true,
	head(){
		return {
			title: this.$t('create_wordbook').toCapitalizePhrases()
		}
	},
	data(){
		return {
			wordbook: {
				name: ''
			},

			errors: {
				name: []
			}
		}
	},
	components: {
		WordbookNameInput
	},
	mixins: [
		axiosHandler
	],
	methods: {
		createWordbook(){
			let loading = this.$vs.loading({
				type: 'scale'
			});
			this.$axios.post(`/wordbooks`, {
					name: this.wordbook.name
				})
				.then(({ data }) => {

					// reset from data
					this.wordbook.name = '';
					this.errors.name = [];

					loading.close();

					// emit data to parent component
					this.$emit('addNewWordbook', data);

					this.notify({
						color: 'success',
						icon: `<i class="mdi mdi-check text-6xl"></i>`,
						title: this.$t('wordbook_created').toCapitalizePhrases()
					});
				})
				.catch(error => {
                    loading.close();
                    this.handleError(error);
                });
		}
	}
}
</script>