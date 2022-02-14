<template>
	<header class="heading">
		<nav class="my-4" v-if="navs.length">
			<span v-for="(nav, index) in navs">
				<nuxt-link :to="generateRoute(nav.router)">
					{{ (nav.title).toCapitalizePhrases() }}
				</nuxt-link>
				<span v-if="index !== (navs.length - 1)">
					>
				</span>
			</span>
		</nav>
		<h1 class="capitalize text-center text-lg sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl flex items-center justify-center sm:justify-center md:justify-center lg:justify-start my-4 font-semibold">
			<slot></slot>
		</h1>
	</header>
</template>
<script type="text/javascript">
export default{
	props: {
		navs: {
			type: Array,
			require: false,
			default: () => {
				return [];
			}
		}
	}
}
</script>