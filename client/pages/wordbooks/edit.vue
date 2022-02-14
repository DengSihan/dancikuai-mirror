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
			<nuxt-link :to="generateRoute({
					name: 'wordbooks/show'
				})"
				class="mx-2 text-xl no-underline hover:underline">
				{{ rawBook.name }}
			</nuxt-link>
			<i class="mdi mdi-chevron-right text-xl mx-2"></i>
			<span class="mx-2 text-xl">
				{{ $t('edit') }}
			</span>
		</nav>

		<fieldset class="rounded-sm p-2 border-primary bg-primary my-4">
			<legend class="text-primary px-2 font-semibold">
				{{ $t('update_wordbook').toCapitalizePhrases() }}
			</legend>
			<form @submit.prevent="updateWordbook" class="pb-2 px-2">
				<section class="my-4">
					<wordbook-name-input v-model="book.name" :errors="errors.name"/>
				</section>
				<section class="mt-4 flex justify-end">
					<vs-button
						square
						size="large"
						color="primary"
						type="submit"
						class="m-0">
						<span class="capitalize">
							{{ $t('update_wordbook').toCapitalizePhrases() }}
						</span>
						<i class="mdi mdi-book-edit-outline text-lg pl-2"></i>	
					</vs-button>
				</section>
			</form>
		</fieldset>

		<fieldset class="rounded-sm p-2 border-danger bg-danger my-4">
			<legend class="text-danger px-2 font-semibold">
				{{ $t('delete_wordbook').toCapitalizePhrases() }}
			</legend>
			<form @submit.prevent="showDeleteConfirm = true" class="pb-2 px-2 flex justify-end">
				<vs-button
					square
					size="large"
					color="danger"
					type="submit"
					class="m-0">
					<span class="capitalize">
						{{ $t('delete_wordbook') }}
					</span>
					<i class="mdi mdi-book-off-outline text-lg pl-2"></i>	
				</vs-button>
			</form>
		</fieldset>


		<vs-dialog v-model="showDeleteConfirm"
			blur
			square>
			<template #header>
				<h4 class="m-0 p-4 capitalize text-2xl">
					{{ $t('delete_wordbook') }}
				</h4>
			</template>
			<p class="capitalize text-center text-lg">
				{{ $t('are_you_sure_to_delete') }}
			</p>
			<template #footer>
				<div class="footer-dialog flex justify-between p-2">
					<vs-button
						type="button"
						color="success"
						square
						size="large"
						@click="showDeleteConfirm = false">
						{{ $t('cancel').toCapitalizePhrases() }}
					</vs-button>

					<vs-button
						type="button"
						color="danger" 
						square
						size="large"
						@click="deleteWordbook">
						{{ $t('sure').toCapitalizePhrases() }}
					</vs-button>
				</div>
			</template>
		</vs-dialog>
	</main>
</template>
<script type="text/javascript">
import axiosHandler from '@/mixins/axios-handler';
import WordbookNameInput from '@/components/form/wordbook-name-input';
export default{
	scrollToTop: true,
	mixins: [
		axiosHandler
	],
	components: {
		WordbookNameInput
	},
	props: {
		id: {
			required: true,
			type: String
		},
		books: {
			required: true,
			type: Array
		}
	},
	head(){
		return {
			title: this.rawBook.name || this.$t('unnamed').toCapitalizePhrases()
		}
	},
	data(){
		let book = this.books.find(book => {return book.id === this.id});
		return {
			rawBook: book,
			book: book,
			showDeleteConfirm: false,
			errors: {
				name: []
			}
		}
	},
	methods: {
		updateWordbook(){
			let loading = this.$vs.loading({
				type: 'scale'
			});
			this.$axios.patch(`/wordbooks/${this.id}`, {
					...this.book
				})
				.then(({ data }) => {

					loading.close();

					// emit data to parent component
					this.$emit('updateWordbook', data);
					this.rawBook = data;
					this.errors = {
						name: []
					};

					this.notify({
						color: 'success',
						icon: `<i class="mdi mdi-check text-6xl"></i>`,
						title: this.$t('wordbook_updated').toCapitalizePhrases()
					});
				})
				.catch(error => {
                    loading.close();
                    this.handleError(error);
                });
		},
		deleteWordbook(){
			let loading = this.$vs.loading({
				type: 'scale'
			});
			this.$axios.delete(`/wordbooks/${this.id}`)
				.then(({ data }) => {

					loading.close();
					this.showDeleteConfirm = false;

					// emit data to parent component
					this.$emit('removeWordbook', this.id);

					this.$router.push(this.generateRoute({
						name: 'wordbooks'
					}));

					this.notify({
						color: 'success',
						icon: `<i class="mdi mdi-check text-6xl"></i>`,
						title: this.$t('wordbook_deleted').toCapitalizePhrases()
					});
				})
				.catch(error => {
                    loading.close();
                    this.showDeleteConfirm = false;
                    this.handleError(error);
                });
		}
	}
	// middleware({ nuxtState, error }) {

	// 	// let { book } = nuxtState.data[0];

	// 	// console.log(book)

	// 	console.log(nuxtState)

	// 	// if (!book) {
	// 	// 	return error({
	// 	// 		statusCode: 404,
	// 	// 		message: 'Not Found'
	// 	// 	});
	// 	// }
 //    },

	// async asyncData({ nuxtState, error, next }) {
	// 	console.log(nuxtState)

	// 	return next();
	// 	// try {
	// 	// 	const { data } = await axios.get(
	// 	// 	`https://jsonplaceholder.typicode.com/posts/${params.id}`
	// 	// 	);
	// 	// 	return { title: data.title };
	// 	// } catch {
	// 	// 	error({ statusCode: 404, message: "Post not found" });
	// 	// }
	// },
}
</script>