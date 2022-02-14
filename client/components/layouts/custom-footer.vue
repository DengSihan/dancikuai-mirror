<template>
    <footer id="main-footer">


		<ul class="list-none p-0 my-4 mx-0 block sm:block md:grid lg:grid-cols-4 lg:gap-2 md:grid-cols-2 md:gap-1 container mx-auto w-auto px-2 sm:px-2 md:px-3 lg:px-4">
			<li>
				<h5 class="capitalize text-2xl mb-3 mt-0 p-0">
					{{ $t('account') }}
				</h5>
				<ul class="my-3">
					<li class="mb-2">
						<nuxt-link :to="generateAuthRoute({
							name: 'account'
						})" class="capitalize no-underline hover:underline">
							{{ $t('account') }}
						</nuxt-link>
					</li>
				</ul>
			</li>
			<li>
				<h5 class="capitalize text-2xl mb-3 mt-0 p-0">
					{{ $t('about_us') }}
				</h5>
				<ul class="my-3">
					<li class="mb-2">
						<nuxt-link :to="generateRoute({
							name: 'about-us/privacy-policy'
						})" class="capitalize no-underline hover:underline">
							{{ $t('privacy_policy') }}
						</nuxt-link>
					</li>
					<li class="mb-2">
						<nuxt-link :to="generateRoute({
							name: 'about-us/contact-us'
						})" class="capitalize no-underline hover:underline">
							{{ $t('contact_us') }}
						</nuxt-link>
					</li>
					<li class="mb-2">
						<nuxt-link :to="generateRoute({
							name: 'about-us/open-sources'
						})" class="capitalize no-underline hover:underline">
							{{ $t('open_sources') }}
						</nuxt-link>
					</li>
				</ul>
			</li>
		</ul>
		
        <section class="flex justify-between items-center my-4 container mx-auto w-auto px-2 sm:px-2 md:px-3 lg:px-4">
        	<locale-selector/>
        	<theme-selector/>
        </section>

        <ul class="list-none p-0 my-4 mx-0 block sm:block md:grid lg:grid-cols-3 lg:gap-2 md:grid-cols-2 md:gap-1 container mx-auto w-auto px-2 sm:px-2 md:px-3 lg:px-4">
        	<li class="mb-2">
        		<form method="GET" :action="mobile.ios">
					<vs-button
						class="flex items-center m-0 font-bold"
			        	square
			        	block
			        	border
			        	type="submit"
						color="tumblr">
						<i class="mdi mdi-apple text-2xl pr-2"></i>
						{{ $t('download_on_the_apple_app_store') }}
					</vs-button>
        		</form>
        	</li>
        	<li class="mb-2">
        		<form method="GET" :action="mobile.android">
					<vs-button
						class="flex items-center m-0 font-bold"
			        	square
			        	block
			        	border
			        	type="submit"
						color="pinterest">
						<i class="mdi mdi-google-play text-2xl pr-2"></i>
						{{ $t('download_on_the_google_play') }}
					</vs-button>
        		</form>
        	</li>
        	<li class="mb-2">
        		<form @submit.prevent="installPWA()">
        			<vs-button
			        	class="flex items-center capitalize m-0 font-bold"
			        	square
			        	block
			        	border
			        	type="submit">
			        	<i class="mdi mdi-google-chrome pr-2 text-2xl"></i>
			        	{{ $t('install_pwa') }}
			        </vs-button>
        		</form>
        	</li>
        </ul>

        <footer class="w-full py-3 mt-4 text-center text-xs" :translate="'no'" lang="zh-CN">
        	{{ case_number }} Copyright © {{ year }} {{ app.name }}
        </footer>
    </footer>
</template>
<script type="text/javascript">
import ThemeSelector from '@/components/selectors/theme';
import LocaleSelector from '@/components/selectors/locale';
import config from '@/config';
export default{
	components: {
		ThemeSelector,
		LocaleSelector
	},
	data(){
		return {
			mobile: config.mobile,
			case_number: config.case_number,
			app: config.app,
			year: (new Date).getFullYear()
		}
	},
	mounted(){
		this.$store.dispatch('pwa/init');
	},
	methods: {
		installPWA(){
			this.$store.dispatch('pwa/install');
		}
	}
}
</script>
