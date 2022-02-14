<template>
    <main>
        <heading>
            <i class="mdi mdi-login-variant text-4xl pr-4"></i>
            {{ $t('login').toCapitalizePhrases() }}
        </heading>
        <social class="my-10 mx-auto sm:w-auto md:w-2/3 lg:w-1/3 xl:w-1/4 2xl:w-1/5"/>
    </main>
</template>
<script type="text/javascript">
import Social from '@/components/auth/social';
export default{
    head(){
        return {
            title: this.$t('login').toCapitalizePhrases()
        }
    },
    components: {
        Social
    },
    middleware: 'guest'
}
</script>
