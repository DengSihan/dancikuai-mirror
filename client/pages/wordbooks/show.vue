<template>
	<main>
		<nav class="my-4 -mx-2 items-center flex font-semibold relative">
			<nuxt-link :to="generateRoute({
					name: 'wordbooks'
				})"
				class="flex items-center justify-center mx-2 text-xl no-underline hover:underline">
				<i class="mdi mdi-book-open-page-variant-outline text-3xl pr-2"></i>
				{{ $t('my_wordbooks').toCapitalizePhrases() }}
			</nuxt-link>
			<i class="mdi mdi-chevron-right text-xl mx-2"></i>
			<span class="mx-2 text-xl">
				{{ book.name }}
			</span>
		</nav>

		<nuxt-link :to="generateRoute({
				name: 'wordbooks/edit',
				params: {
					id: book.id
				}
			})"
			class="hover:underline no-underline flex items-center justify-end">
			<i class="mdi mdi-book-edit-outline text-2xl pr-2"></i>
			{{ $t('edit') }}
		</nuxt-link>
		

		<table class="my-6">
			<thead>
				<tr>
					<th></th>
					<th v-for="item in [
							'familiarity',
							'length_of_study',
							'last_tested_at',
							'error_rate',
							'like'
						]"
						class="font-normal">
						{{ $t(item).toCapitalizePhrases() }}
					</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="(data, word) in words">
					<td class="text-base" lang="en" translate="no">
						{{ word }}
					</td>
					<td>
						{{ ((100*data[0]/800).toFixed(2)).toString() }} %
					</td>
					<td>
						{{ duratingCount(data[8]).toCapitalizePhrases() }}
					</td>
					<td class="text-sm">
						{{ unixTime2LocaleTime(data[2]) }}
					</td>
					<td>
						{{ (100*data[10].toFixed(2)).toString() }} %
					</td>
					<td>
						<template v-if="!!data[12]">
							<i class="mdi text-2xl text-danger mdi-cards-heart"></i>
						</template>
					</td>
				</tr>
			</tbody>
		</table>

	</main>
</template>
<script type="text/javascript">
import axiosHandler from '@/mixins/axios-handler';
export default{
	scrollToTop: true,
	mixins: [
		axiosHandler
	],
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
	async asyncData({ $axios, params }){
		let { data } = await $axios.get(`/wordbooks/${params.id}/words`);
		return {
			words: data
		};
	},
	head(){
		return {
			title: this.book.name || this.$t('unnamed').toCapitalizePhrases()
		}
	},
	data(){
		return {
			book: this.books.find(book => {return book.id === this.id}),
			startPage: 1
		}
	}
}
</script>