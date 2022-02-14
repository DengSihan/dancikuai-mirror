<template>
	<main :class="$route.name === 'wordbooks' ? containerClass : ''">
		<template v-if="books.length > 0">
			<transition-group
				tag="ul"
				name="wordbook-list"
				class="m-0 p-0 list-none flex flex-wrap books-container"
				:class="{
					'display-as-raw': $route.name !== 'wordbooks',
					'display-as-column': $route.name === 'wordbooks',
				}">
				<li v-for="(book, index) in books"
					:key="`wordbook-${book.id}`"
					class="book-container relative">
					<div class="book"
						:class="{
							'in-raw': $route.name !== 'wordbooks',
							'in-column': $route.name === 'wordbooks',
						}">
						<div class="book__cover front">
							<h3 class="book__detail overflow-x-hidden font-semibold text-base pl-2 pt-6 text-gray-900">
								{{ book.name }}
							</h3>
						</div>
						<div class="book__cover back"></div>
						<div class="book__page flex items-center justify-center">
							<nuxt-link :to="generateRoute({
									name: 'wordbooks/show',
									params: {
										id: book.id
									}
								})"
								class="hand-writing-fonts no-underline hover:underline text-black text-3xl" :lang="$store.getters['locale/locale']">
								{{ $t('edit').toCapitalizePhrases() }}
							</nuxt-link>
						</div>
					</div>
					<transition name="fade">
						<div class="book-info"
							v-if="$route.name === 'wordbooks'">
							<h3 class="mt-0 mb-2 font-semibold text-right">
								<template v-if="!!book.name">
									{{ book.name }}
								</template>
								<template v-else>
									<span class="opacity-50 capitalize">
										{{ $t('unnamed').toCapitalizePhrases() }}
									</span>	
								</template>
							</h3>
							<p class="my-2 text-right">
								{{ book.count.toString() }} {{ $t('words').toCapitalizePhrases() }}
							</p>
							<small class="text-sm block my-2 text-right">
								{{ $t('average_familiarity') }} 
								<br>
								{{ book.familiarity ? (100*book.familiarity/800).toFixed(2) : '0' }} %
							</small>
							<small class="text-sm block my-2 text-right">
								{{ $t('created_at').toCapitalizePhrases() }}
								<br>
								{{ unixTime2LocaleTime(book.created_at) }}
							</small>
						</div>
					</transition>
				</li>
			</transition-group>
		</template>
		<template v-else>
			<div class="border rounded-sm p-4 bg-gray-2 my-8">
				<p class="flex items-center">
					{{ $t('you_dont_have_any_wordbook') }}
					<nuxt-link :to="generateRoute({
							name: 'wordbooks/create'
						})"
						class="flex items-center pl-4 hover:underline no-underline">
						<i class="mdi mdi-book-plus-outline text-lg pr-2"></i>	
						{{ $t('create_wordbook').toCapitalizePhrases() }}
					</nuxt-link>
				</p>
			</div>
		</template>

		<router-view
			:books="books"
			@addNewWordbook="addWordbook"
			@removeWordbook="removeWordbook"
			@updateWordbook="updateWordbook"/>
	</main>
</template>
<script type="text/javascript">
export default{
	head(){
		return {
			titleTemplate: `%s | ${this.$t('my_wordbooks').toCapitalizePhrases()} | ${this.$t('header.title')}`
		}
	},
	async asyncData({ $axios, route }){
		let { data } = await $axios.get(`/wordbooks`);
		return {
			books: data
		}
	},
	middleware: 'auth',
	methods: {
		addWordbook(book){
			this.books.push(book);
		},
		removeWordbook(id){
			this.books = [...this.books.filter(book => {
				return book.id !== id;
			})];
		},
		updateWordbook(newBookData){
			let books = [];
			this.books.some(book => {
				if (book.id === newBookData.id) {
					books.push(newBookData);
				}
				else{
					books.push(book);
				}
			});
			this.books = books;
		}
	}
}
</script>
<style lang="scss">

.wordbook-list-move {
	transition: transform .8s var(--time-function);
}

.book-container{
	height: 250px;

	--border-radius: 2px 10px 10px 2px;
	--height: 200px;
	--width: 150px;

	transition: all .5s var(--time-function);

	.book{
		height: var(--height);
		width: var(--width);

		transition: .2s ease-in-out;
		border-radius: var(--border-radius);
		transform-origin: left center 0px;
		display: inline-block;
		position: absolute;
		z-index: 2;
		top: 50%;
		right: 50%;
		transform: translate(100%, -50%) scale(.75) rotateZ(-5deg);

		&:not(.in-raw):hover{
			cursor: pointer;
			.book__cover {
				transform: rotateY(-180deg);
				box-shadow: 10px 5px 25px rgba(0,0,0,0.2);
				&.front{
					z-index: 2;
				}
				&.back{
					z-index: 3;
				}
			}
		}

		&__cover {
			height: var(--height);
			width: var(--width);
			position: absolute;
			border-radius: var(--border-radius);
			box-shadow: 0 0 5px 1.5px rgba(0, 0, 0, 0.25);
			z-index: 10;
			transition: .5s linear;
			transform-style: preserve-3d;
			transform-origin: left center 0px;
			background-size: var(--width) var(--height);
			background-image: url('/footage/notebook-cover.jpg');
			&.front{
				z-index: 3;
			}
			&.back{
				z-index: 2;
			}
		}
		&__page {
			height: 100%;
			width: var(--width);
			position: absolute;
			background-color: #fbfae8;
			z-index: 0;
			box-shadow: 0 0 5px 1.5px rgba(0, 0, 0, 0.25);
			border-radius: var(--border-radius);
			overflow: hidden;
			background: linear-gradient(to bottom, #fbfae8 9px, #e4e4e4 1px);
			background-size: 100% 10px;
		}
	}

	.book-info{
		width: 50%;
		height: 200px;
		position: absolute;
		z-index: 1;
		top: 50%;
		right: 55%;
		transform: translate(0%, -50%) scale(.9);
		transition: .2s ease-in-out;
	}
}

.display-as-raw{
	&>.book-container{
		width: 50px;
		.book-info{
			opacity: 0;
		}
	}
}
.display-as-column{
	&>.book-container{

		width: 100%;
		@media (min-width: 640px) {
			width: 100%;
		}
		@media (min-width: 768px) {
			width: 50%;
		}
		@media (min-width: 1024px) {
			width: calc(100% / 3);
		}

		
		.book{
			&:hover{
				transform: translate(120%, -50%) scale(1) rotateZ(0deg);
			}
		}
		.book-info{
			opacity: 1;
		}
	}
}
</style>