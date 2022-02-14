<template>
	<main>
		<heading>
            <i class="mdi mdi-github text-4xl pr-4"></i>
            {{ $t('open_sources').toCapitalizePhrases() }}
        </heading>
        <p class="my-4">
        	<template v-if="locale === 'zh-CN'">
        		单词块主要基于以下开源项目：
    		</template>
    		<template v-else-if="locale === 'en'">
    			The Wordblock is mainly based on the following open source projects:
    		</template>
    		<template v-else-if="locale === 'ja'">
    			Wordblock は、主に次のオープンソースプロジェクトに基づいています:
    		</template>
        </p>
        <ul class="my-4 flex flex-wrap list-none px-4 -mx-4">
        	<li class="mx-4 flex items-center">
        		<a href="https://laravel.com/"
        			target="_blank"
        			title="laravel">
    				<img v-lazy="`/footage/laravel.svg`" alt="laravel-logo" class="h-12"/>
    			</a>
        	</li>
        	<li class="mx-4 flex items-center">
        		<a href="https://nuxtjs.org/"
        			target="_blank"
        			title="Nuxtjs">
    				<img v-lazy="`/footage/nuxt.svg`" alt="nuxtjs-logo" class="h-24"/>
    			</a>
        	</li>
        	<li class="mx-4 flex items-center">
        		<a href="https://vuesax.com/"
        			target="_blank"
        			title="vuesax">
    				<img v-lazy="`/footage/vuesax.svg`" alt="vuesax-logo" class="h-10"/>
    			</a>
        	</li>
        </ul>
        <a href="/_nuxt/LICENSES" target="_blank" class="text-sm no-underline hover:underline block text-right font-semibold">
        	FULL LICENSES
        </a>
        <ul class="my-4 border-top">
        	<li>
        		<h4>
        			<a href="https://github.com/DengSihan/dancikuai-front-end"
        				target="_blank"
        				title="DengSihan/dancikuai-front-end"
        				class="no-underline hover:underline">
        				DengSihan/dancikuai-front-end
    				</a>
        		</h4>
        		<p>
        			<template v-if="locale === 'zh-CN'">
	        			单词块项目的前端工程
	        		</template>
	        		<template v-else-if="locale === 'en'">
	        			The front-end project of Wordblock
	        		</template>
	        		<template v-else-if="locale === 'ja'">
	        			Wordblock のフロントエンドプロジェクト
	        		</template>
        		</p>
        	</li>
        	<li>
        		<h4>
        			<a href="https://github.com/DengSihan/bootstrap"
        				target="_blank"
        				title="DengSihan/bootstrap"
        				class="no-underline hover:underline">
        				DengSihan/bootstrap
    				</a>
        		</h4>
        		<p>
        			<template v-if="locale === 'zh-CN'">
	        			单词块项目的基础
	        		</template>
	        		<template v-else-if="locale === 'en'">
	        			The basis of Wordblock
	        		</template>
	        		<template v-else-if="locale === 'ja'">
	        			Wordblock の基礎
	        		</template>
        		</p>
        	</li>
        	<li>
        		<h4>
        			<a href="https://github.com/DengSihan/laravel-ubuntu-installer"
        				target="_blank"
        				title="DengSihan/laravel-ubuntu-installer"
        				class="no-underline hover:underline">
        				DengSihan/laravel-ubuntu-installer
    				</a>
        		</h4>
        		<p>
        			<template v-if="locale === 'zh-CN'">
	        			单词块项目的运行环境搭建
	        		</template>
	        		<template v-else-if="locale === 'en'">
	        			Building the running environment of the Wordblock
	        		</template>
	        		<template v-else-if="locale === 'ja'">
	        			Wordblock の実行環境を構築する
	        		</template>
        		</p>
        	</li>
        </ul>
	</main>
</template>
<script type="text/javascript">
import { mapGetters } from 'vuex';
export default{
	head(){
		return {
			title: this.$t('open_sources').toCapitalizePhrases()
		}
	},
	computed: mapGetters({
        locale: 'locale/locale'
    })
}
</script>