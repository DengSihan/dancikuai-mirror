<template>
    <section>
        <form :action="`${api}/auth/socials/${social.key}/authorizations`"
            method="POST"
            v-for="social in socials"
            :key="social.key"
            class="block w-full my-4">
            <button type="submit"
                class="block h-16 w-full flex items-center justify-center border-none"
                :style="{
                    'background': social.color
                }"
                v-waves>
                <i class="mdi text-3xl text-white text-base"
                    :class="`mdi-${social.icon}`"></i>
                <span class="pl-2 text-white text-base capitalize">
                    {{ $t('login_with', {social: social.name}) }}
                </span>
            </button>  
        </form>
    </section>
</template>
<script type="text/javascript">
import config from '@/config';
export default{
    data(){
        return {
            api: config.api.url,
            socials: config.social
        }
    }
}
</script>
