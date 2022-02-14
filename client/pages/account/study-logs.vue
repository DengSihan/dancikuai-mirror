<template>
	<main>
		<h1 class="capitalize flex items-center font-semibold">
			<i class="mdi mdi-history text-4xl pr-4"></i>
			{{ $t('study_logs').toCapitalizePhrases() }}
		</h1>

		<div class="my-6 relative w-full h-64 flex">
			<canvas id="chart"></canvas>
		</div>

		<table class="my-6">
			<thead>
				<tr>
					<th v-for="item in [
							'date',
							'updated_at',
							'length_of_study',
							'number_of_learning',
							'average_familiarity',
							'number_of_new_words',
							'total_number_of_words'
						]"
						class="font-normal">
						{{ $t(item).toCapitalizePhrases() }}
					</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="(log, date) in logs">
					<td>
						{{ date }}
					</td>
					<td v-for="(item, index) in log">
						<template v-if="index === 0">
							<span class="text-sm">
								{{ unixTime2LocaleTime(item) }}
							</span>
						</template>
						<template v-else-if="index === 1">
							<span class="text-sm">
								{{ duratingCount(item).toCapitalizePhrases() }}
							</span>
						</template>
						<template v-else-if="index === 3">
							{{ (100*item/800).toFixed(2) }} %
						</template>
						<template v-else>
							{{ item }}
						</template>
					</td>
				</tr>
			</tbody>
		</table>
	</main>
</template>
<script type="text/javascript">
import Chart from 'chart.js';
export default{
	head(){
		return {
			title: this.$t('study_logs').toCapitalizePhrases()
		}
	},
	middleware: 'auth',
	async asyncData({ $axios }){
		let { data } = await $axios.get(`/study-logs`);
		return {
			logs: data
		}
	},
	mounted(){
		if (process.client) {
			this.$nextTick(() => {
				this.bootstrapChart();
			});
		}
	},
	updated(){
		if (process.client) {
			this.bootstrapChart();
		}
		
	},
	methods: {
		bootstrapChart(){
			let raw = {...this.logs};
			let keys = [],
				lengthOfStudy = [],
				averageFamiliarity = [],
				numberOfNewWords = [],
				totalNumberOfWords = [];

			for(let [key, value] of Object.entries(raw)){
                keys.push(key);
                lengthOfStudy.push(value[1]/60);
                averageFamiliarity.push((value[3]/8).toFixed(2));
                numberOfNewWords.push(value[4]);
                totalNumberOfWords.push(value[5]);
            }

            let config = {
				type: 'line',
				data: {
					labels: keys.reverse(),
					datasets: [
						{
							label: this.$t('length_of_study').toCapitalizePhrases(),
							backgroundColor: 'rgba(25, 91, 255)',
							borderColor: 'rgba(25, 91, 255)',
							data: lengthOfStudy.reverse(),
							fill: false
						},
						{
							label: this.$t('average_familiarity').toCapitalizePhrases(),
							backgroundColor: 'rgba(70, 201, 58)',
							borderColor: 'rgba(70, 201, 58)',
							data: averageFamiliarity.reverse(),
							fill: false,
						},
						{
							label: this.$t('number_of_new_words').toCapitalizePhrases(),
							backgroundColor: 'rgba(255, 186, 0)',
							borderColor: 'rgba(255, 186, 0)',
							data: numberOfNewWords.reverse(),
							fill: false,
						},
						{
							label: this.$t('total_number_of_words').toCapitalizePhrases(),
							backgroundColor: 'rgba(255, 71, 87)',
							borderColor: 'rgba(255, 71, 87)',
							data: totalNumberOfWords.reverse(),
							fill: false,
						}
					]
				},
				options: {
					responsive: true,
					maintainAspectRatio: false,
					title: {
						display: false
					},
					scales: {
						xAxes: [{
							display: true,
							scaleLabel: {
								display: true,
								labelString: this.$t('date').toCapitalizePhrases()
							}
						}]
					}
				}
			};

			let ctx = document.getElementById('chart').getContext('2d');
			new Chart(ctx, config);

		}
	}
}
</script>