<template>
	<ul class="list-none p-0 -mx-2 flex">
		<li v-for="locale in locales"
			class="flex items-center">
			<nuxt-link
				:key="locale"
				:to="getFullPath(locale)"
				class="capitalize flex items-center mx-2 no-underline hover:underline text-sm"
				:lang="locale"
				translate="no">
				<img v-lazy="`/flags/${locale}.webp`" height="15" width="25" :alt="`${locale}-flag`" class="pr-2">
				{{ $i18n.getLocaleMessage(locale).locale }}
			</nuxt-link>
		</li>
	</ul>
</template>
<script type="text/javascript">
import config from '@/config';
export default{
	data(){
		return {
			locales: config.locale.available
		}
	},
	methods: {
		getOtherLocaleVersionRoute(locale){
            return this.generateRoute({
                name: this.$route.name,
                query: this.$route.query,
                params: {
                    locale: locale,
                }
            });
        },
        getFullPath(locale){
            return this.$router.resolve(this.getOtherLocaleVersionRoute(locale)).href;
        }
	}
}
</script>