<template>
	<p :id="id" class="hand-writing"></p>
</template>
<script type="text/javascript">
import Vara from 'vara';
import { getRandomString } from '@/utils';

export default{
	props: {
		text: {
			type: String
		},
		fontSize: {
			type: Number,
			required: false,
			default: 30
		},
		delay: {
			type: Number,
			required: false,
			default: 0
		}
	},
	data(){
		return {
			id: `blackboard-${getRandomString()}`
		}
	},
	mounted(){
		if (process.client) {
			this.$nextTick(() => {
				new Vara(`#${this.id}`, '/footage/font.json', [{
					text: this.text,
					textAlign: 'center',
					y: 3,
					delay: this.delay
				}],{
					fontSize: this.fontSize
				});
			});
		}
	}
}
</script>
<style lang="scss">
	.hand-writing svg path:not([transform="translate(0,0)"]){
		stroke: rgba(var(--vs-text), 1);
		stroke-width: 2;
		stroke-miterlimit: 10;
	}
</style>