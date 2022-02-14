<template>
	<vs-avatar :size="size">
		<template v-if="user.avatar">
			<img v-lazy="user.avatar" :alt="user.name">
		</template>
		<template v-if="!user.avatar" #text>
          	{{ user.name }}
        </template>
		<slot></slot>
	</vs-avatar>
</template>
<script type="text/javascript">
export default{
	props: {
		user: {
			required: true
		},
		size: {
			default: '35',
			required: false
		}
	}
}
</script>