<template>
    <aside id="sidebar"
    	class="shadow fixed w-screen sm:w-screen h-screen sm:h-screen top-0 sm:top-0" 
    	:class="{
    		'active': activeSidebar
    	}">

    	<header class="items-center justify-end flex sm:flex md:flex lg:hidden xl:hidden 2xl:hidden px-2 w-auto close-button-container">
    		<button class="hamburger hamburger--collapse hamburger--accessible js-hamburger activeable"
	            type="button"
	            :class="{
	                'is-active': activeSidebar
	            }"
	            @click="$store.commit('sidebar/toggle')">
                <span class="hamburger-label align-middle uppercase ml-1 font-bold text-lg tracking-widest">
                    {{ $t('menu') }}
                </span>
	            <span class="hamburger-box align-middle">
	                <span class="hamburger-inner"></span>
	            </span>
	        </button>
    	</header>

        <section class="border-bottom px-4 user-info-container">
            <template v-if="!!logged">
                <div class="flex justify-between items-center pt-6 pb-2">
                    <vs-avatar size="50">
                        <img v-lazy="logged.avatar || `/default/user.jpg`" width="50" height="50" :alt="logged.name" />
                    </vs-avatar>
                    <h5 class="font-semibold text-lg tracking-widest flex items-center m-0">
                        {{ logged.name }}
                    </h5>
                </div>
                <div class="flex justify-between items-center py-2">
                    <span class="flex items-center">
                        <span class="flex items-center pr-4">
                            <i class="mdi mdi-currency-usd-circle-outline text-xl text-yellow-600 pr-1"></i>
                            {{ logged.coin }}
                        </span>
                        <span class="flex items-center">
                            <i class="mdi mdi-timelapse text-xl text-blue-600 pr-1"></i>
                            {{ logged.experience }}
                        </span>
                    </span>
                    <nuxt-link class="no-underline hover:underline flex items-center text-sm text-red-600"
                        :to="generateRoute({
                            name: 'logout'
                        })">
                        <i class="mdi mdi-exit-to-app text-xl pr-1"></i>
                        {{ $t('logout').toCapitalizePhrases() }}
                    </nuxt-link>
                </div>
            </template>
            <template v-else>
                <div class="flex justify-between items-center pt-6 pb-2">
                    <vs-avatar size="50">
                        <img v-lazy="`/default/user.jpg`" width="50" height="50" alt="default user avatar" />
                    </vs-avatar>
                    <h5 class="font-semibold text-lg tracking-widest flex items-center m-0">
                        {{ $t('unlogged').toCapitalizePhrases() }}
                    </h5>
                </div>
                <div class="flex justify-end items-center py-2">
                    <nuxt-link class="no-underline hover:underline flex items-center text-sm"
                        :to="generateRoute({
                            name: 'login'
                        })">
                        <i class="mdi mdi mdi-login-variant text-xl pr-1"></i>
                        {{ $t('login').toCapitalizePhrases() }}
                    </nuxt-link>
                </div>
            </template>
        </section>

        <nav class="nav-container overflow-y-auto">
            <ul class="m-0 p-0 list-none">
                <template v-if="!!logged">
                    <sidebar-item
                        :title="{
                            name: $t('my_account'),
                            icon: 'mdi-account-outline'
                        }"
                        :items="[
                            {
                                router: 'account/profile',
                                name: $t('profile')
                            },
                            {
                                router: 'account/study-logs',
                                name: $t('study_logs')
                            }
                        ]"/>
                    <sidebar-item
                        :title="{
                            name: $t('wordbooks'),
                            icon: 'mdi-book-open-variant'
                        }"
                        :items="[
                            {
                                router: 'wordbooks',
                                name: $t('my_wordbooks')
                            },
                            {
                                router: 'wordbooks/create',
                                name: $t('create_wordbook')
                            }
                        ]"/>
                    <sidebar-item
                        :title="{
                            name: $t('vocabulary_library'),
                            icon: 'mdi-library-shelves'
                        }"
                        :items="[
                            {
                                router: 'vocabulary-library',
                                name: $t('vocabulary_library_market')
                            },
                            {
                                router: 'vocabulary-library/mine',
                                name: $t('my_vocabulary_library')
                            }
                        ]"/>
                    <sidebar-item
                        :title="{
                            name: $t('examinations'),
                            icon: 'mdi-file-document-edit-outline'
                        }"
                        :items="[
                            {
                                router: 'exams/npee',
                                name: $t('npee')
                            },
                            {
                                router: 'exams/ielts',
                                name: $t('ielts')
                            }
                        ]"/>
                    <sidebar-item
                        :title="{
                            name: $t('feedbacks'),
                            icon: 'mdi-bug'
                        }"
                        :items="[
                            {
                                router: 'feedbacks/bugs',
                                name: $t('bugs')
                            },
                            {
                                router: 'feedbacks/accessibility',
                                name: $t('accessibility')
                            }
                        ]"/>
                </template>
            </ul>
        </nav>

        <footer class="flex items-center justify-center">
            <span class="text-xs">
                Copyright © {{ year }} {{ app.name }}
            </span>
        </footer>


    </aside>
</template>
<script type="text/javascript">
import { mapGetters } from 'vuex';
import SidebarItem from '@/components/layouts/sidebar-item';
import config from '@/config';
export default{
    components: {
        SidebarItem
    },
    computed: mapGetters({
        activeSidebar: 'sidebar/show'
    }),
    data(){
        return {
            app: config.app,
            year: (new Date).getFullYear()
        }
    }
}
</script>
