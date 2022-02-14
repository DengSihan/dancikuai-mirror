<template>
    <main class="mx-auto container">
        <h1 class="capitalize">
            {{ $t('account')}}
        </h1>
    </main>
</template>
<script type="text/javascript">
export default{
    head(){
        return {
            title: this.$t('account').toCapitalizePhrases()
        }
    },
    middleware: 'auth'
}
</script>
