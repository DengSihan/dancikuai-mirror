<template>
	<div>
		<vs-button
			type="button"
			size="large"
			square
			transparent
			block
			class="m-0"
			@click="show = !show">
			<span class="capitalize flex items-center">
				<i class="mdi mdi-theme-light-dark text-2xl pr-2"></i>{{ $t('theme') }}
			</span>
		</vs-button>
		<section>
			<vs-dialog
				square
				blur
				not-padding
				v-model="show">
				<form class="py-2 px-10">
					<section class="my-6"
						v-for="theme in ['system', 'light', 'dark']"
						:key="theme">
						<label>
				            <input class="checkbox"
				                type="checkbox"
				                :checked="theme === currentTheme"
				                @change="$store.commit('theme/setTheme', theme)">
				            <span class="capitalize text-base">
				                {{ $t(theme) }}
				            </span>
				        </label>		
					</section>
				</form>
			</vs-dialog>
		</section>
	</div>
</template>
<script type="text/javascript">
import { mapGetters } from 'vuex';
export default{
	computed: mapGetters({
		currentTheme: 'theme/theme'
	}),
	data(){
		return {
			show: false
		}
	}
}
</script>