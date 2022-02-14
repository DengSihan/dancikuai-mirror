<template>
	<li class="thin-border-bottom sidebar-item-container">
		<vs-button
            class="rounded-none h-12 m-0 w-full"
            color="#757575"
            flat
            transparent
            size="large"
            type="button"
            @click="show = !show"
            square>
            <nav class="flex items-center justify-between w-full">
            	<h4 class="capitalize m-0 flex items-center">
            		<i class="mdi text-2xl pr-3" :class="title.icon"></i>
	                <span class="text-base font-normal capitalize">
                        {{ title.name.toCapitalizePhrases() }}
                    </span>
	            </h4>
            	<i class='mdi mdi-chevron-down theme text-xl'
	                :class="{
	                    'open': show
	                }"></i>
            </nav>
        </vs-button>
        <slide-up-down
            tag="ul"
            :active="show"
            :duration="200"
            :use-hidden="true"
            class="p-0 m-0 list-none">
            <li
                class="sidebar-item-sub-link relative"
                v-for="item in items"
                :key="`sidebar-nav-${item.router}`"
                v-waves>
                <nuxt-link :to="generateRoute({
	                	name: item.router
	                })"
	                class="no-underline block h-full w-full flex items-center"
                    :title="item.name.toCapitalizePhrases()">
                	<span class="pl-6 text-sm">
                        {{ item.name.toCapitalizePhrases() }}
                    </span>
                </nuxt-link>
            </li>
        </slide-up-down>
	</li>
</template>
<script type="text/javascript">
import SlideUpDown from 'vue-slide-up-down';
export default{
    components: {
        SlideUpDown
    },
	props: {
		title: {
			type: Object
		},
		items: {
			type: Array
		}
	},
	data(){
		return {
			show: false
		}
	}
}
</script>