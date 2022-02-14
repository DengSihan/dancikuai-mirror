<template>
	<main ref="container">
		<h1 class="capitalize flex items-center font-semibold my-4">
			<i class="mdi mdi-account-outline text-4xl pr-4"></i>
			{{ $t('profile').toCapitalizePhrases() }}
		</h1>
		<form class="my-4" @submit.prevent="updateProfile()">
			<section class="my-4 flex justify-between items-center">
				<span class="flex items-center">
					<i class="mdi mdi-identifier text-2xl pr-4"></i>
					<span class="uppercase text-lg font-semibold">
						{{ $t('identifier') }}
					</span>		
				</span>
				<span class="font-bold text-lg">
					{{ profile.id }}
				</span>
			</section>
			<section class="my-4 flex justify-between items-center">
				<span class="flex items-center">
					<i class="mdi mdi-currency-usd-circle-outline text-yellow-600 text-2xl pr-4"></i>
					<span class="uppercase text-lg font-semibold">
						{{ $t('coin') }}
					</span>		
				</span>
				<span class="font-bold text-lg">
					{{ profile.coin }}
				</span>
			</section>
			<section class="my-4 flex justify-between items-center">
				<span class="flex items-center">
					<i class="mdi mdi-timelapse text-blue-600 text-2xl pr-4"></i>
					<span class="uppercase text-lg font-semibold">
						{{ $t('experience') }}
					</span>		
				</span>
				<span class="font-bold text-lg">
					{{ profile.experience }}
				</span>
			</section>
			<section class="my-4 flex justify-between items-center">
				<span class="flex items-center">
					<i class="mdi mdi-account-plus-outline text-2xl pr-4"></i>
					<span class="uppercase text-lg font-semibold">
						{{ $t('registration_time') }}
					</span>		
				</span>
				<span class="font-normal text-sm">
					{{ unixTime2LocaleTime(profile.created_at) }}
				</span>
			</section>
			<section class="my-10">
				<name-input v-model="profile.name" :errors="errors.name"/>
			</section>
			<section class="my-4 flex justify-end">
				<vs-button
					square
					size="large"
					type="submit"
					class="m-0">
					<span class="capitalize">
						{{ $t('update_profile') }}
					</span>
					<i class="mdi mdi-send text-lg pl-2"></i>	
				</vs-button>
			</section>
		</form>

		<fieldset class="my-6 text-red-700 border-red-500 bg-red-100 rounded-sm p-4">
			<legend class="px-2">{{ $t('delete_account').toCapitalizePhrases() }}</legend>
			<form @submit.prevent="deleteAccount">
				<vs-button type="submit" color="danger" square class="ml-auto">
                    {{ $t('delete').toCapitalizePhrases() }}<i class="mdi mdi-delete text-2xl pl-2"></i>
                </vs-button>
			</form>
		</fieldset>
	</main>
</template>
<script type="text/javascript">
import NameInput from '@/components/auth/form/name-input';
import axiosHandler from '@/mixins/axios-handler';
export default{
	head(){
		return {
			title: this.$t('profile').toCapitalizePhrases()
		}
	},
	middleware: 'auth',
	components: {
		NameInput
	},
	mixins: [
		axiosHandler
	],
	data(){
		return {
			errors: {
				name: []
			}
		}
	},
	async asyncData({ $axios }){
		let { data } = await $axios.get(`/auth/user`);
		return {
			profile: data
		}
	},
	methods: {
		updateProfile(){
			let loading = this.$vs.loading({
				type: 'scale'
			});
			this.$axios.patch(`/auth/user`, {
					name: this.profile.name
				})
				.then(({ data }) => {
					this.$store.dispatch('auth/updateUser', {user: {...data}});
					this.profile = data;
					loading.close();
					this.notify({
						color: 'success',
						icon: `<i class="mdi mdi-check text-6xl"></i>`,
						title: this.$t('profile_updated').toCapitalizePhrases()
					});
				})
				.catch(error => {
                    loading.close();
                    this.handleError(error);
                });
		},
		deleteAccount(){
			if (confirm(this.$t('are_you_sure_to_delete').toCapitalizePhrases())) {
				let loading = this.$vs.loading({
					type: 'scale'
				});
				this.$axios.delete(`/auth/user`)
					.then(() => {
						this.$store.commit('auth/logout');
						this.$router.push(this.generateRoute({
							name: 'login'
						}));
					})
					.catch(error => {
	                    this.handleError(error);
	                })
	                .finally(() => {
	                	loading.close();
	                });
			}
		}
	}
}
</script>