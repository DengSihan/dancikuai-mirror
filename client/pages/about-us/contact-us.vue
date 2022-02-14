<template>
	<main>
		<heading>
			<i class="mdi mdi-message-bulleted text-4xl pr-4"></i>
			{{ $t('contact_us').toCapitalizePhrases() }}
		</heading>
		<ul class="my-4">
			<li class="mb-4">
				<h5 class="my-4 text-xl">
					QQ
				</h5>
				<section class="flex items-center">
					<a href="https://qm.qq.com/cgi-bin/qm/qr?k=Mmd1gZbscH2dt038agsYkI0hKaAHbcaX&jump_from=webapi" target="_blank" :title="$t('join_qq_group')" class="cursor-pointer block pr-4">
						<img v-lazy="`/footage/qq-logo.svg`" width="75" alt="qq-logo" class="block mx-auto" />
						<img class="block pt-1" src="//pub.idqqimg.com/wpa/images/group.png" alt="单词块用户反馈群" title="单词块用户反馈群" />
					</a>
					<img v-lazy="`/footage/qq-join.png`" width="100" alt="qq-join" class="pr-4" />
				</section>
			</li>
			<li class="mb-4">
				<h5 class="my-4 text-xl">
					Email
				</h5>
				<section class="flex items-center">
					<i class="mdi mdi-email-send-outline text-4xl pr-4"></i>
					<a href="mailto:root@dsh.email" target="_blank" :title="$t('send_email')" class="no-underline hover:underline">
						{{ $t('send_email').toCapitalizePhrases() }}
					</a>
				</section>
			</li>
		</ul>
	</main>
</template>
<script type="text/javascript">
export default{
	head(){
		return {
			title: this.$t('contact_us').toCapitalizePhrases()
		}
	}
}
</script>