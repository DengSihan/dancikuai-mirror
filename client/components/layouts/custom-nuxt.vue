<template>
    <main class="relative">
        <custom-header/>
        <main class="overflow-x-hidden">
            <transition
                mode="out-in"
                :name="transitionName"
                @beforeLeave="beforeLeave"
                @enter="enter"
                @afterEnter="afterEnter">
                <component :is="!!nuxt.err ? 'error-view' : 'router-view'"
                    :error="nuxt.err"
                    :class="containerClass"
                    default-class="min-h-screen container mx-auto w-auto px-2 sm:px-2 md:px-3 lg:px-4 relative"/>
            </transition>
        </main>
        <custom-footer/>
    </main>
</template>
<script type="text/javascript">
import Vue from 'vue';
import transition from '@/mixins/transition';
import CustomHeader from '@/components/layouts/custom-header';
import CustomFooter from '@/components/layouts/custom-footer';
export default{
    mixins: [
        transition
    ],
    components: {
        CustomHeader,
        CustomFooter
    },
    beforeCreate () {
        Vue.util.defineReactive(this, 'nuxt', this.$root.$options.nuxt);
    }
}
</script>
