<template>
    <header class="sticky border-bottom">

        <section class="flex items-center justify-between h-full mx-auto w-auto px-2 sm:px-2 md:px-3 lg:px-4 2xl:px-8">
            <button class="hamburger hamburger--collapse hamburger--accessible js-hamburger activeable"
                type="button"
                :class="{
                    'is-active': activeSidebar
                }"
                @click="$store.commit('sidebar/toggle')"
                :aria-label="activeSidebar ? $t('close_sidebar') : $t('open_sidebar')">
                <span class="hamburger-box align-middle">
                    <span class="hamburger-inner"></span>
                </span>
                <span class="hamburger-label align-middle uppercase ml-1 font-bold text-lg tracking-widest">
                    {{ $t('menu') }}
                </span>
            </button>
            <nuxt-link :to="generateRoute({
                    name: 'index'
                })"
                class="flex items-center no-underline">
                <img src="/logo-small.jpg" class="rounded-sm" width="40" height="40" alt="logo">
                <span class="pl-4 text-xl font-semibold">
                    {{ $t('header.title') }}
                </span>     
            </nuxt-link>
        </section>
        
    </header>
</template>
<script type="text/javascript">
import { mapGetters } from 'vuex';
export default{
    computed: mapGetters({
        activeSidebar: 'sidebar/show'
    }),
    watch: {
        '$route.name'(value){
            if (['xs', 'sm', 'md'].includes(this.getScreenType())) {
                this.$store.commit('sidebar/hideSidebar');
            }
        }
    },
    methods: {
        getScreenType(){
            if (process.client) {
                let width = window.innerWidth;
                if (width <= 640) {
                    return 'xs';
                }
                else if(width <= 768){
                    return 'sm';
                }
                else if(width <= 1024){
                    return 'md';
                }
                else if(width <= 1280){
                    return 'lg';
                }
                else if(width <= 1536){
                    return 'xl';
                }
                else{
                    return '2xl';
                }

            }
        }
    }
}
</script>
