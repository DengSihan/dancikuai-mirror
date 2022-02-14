<template>
    <main>
        <h1 class="mt-24 mb-4 flex items-center justify-center">
            <span class="text-5xl font-semibold pr-10">
                {{ error.statusCode }}
            </span>
            <span class="text-xl font-normal">
                {{ message }}
            </span>
        </h1>
    </main>
</template>
<script type="text/javascript">
export default {
    head(){
        return {
            title: `${this.error.message} ${ this.message }`
        }
    },
    props: {
        error: {
            required: true
        }
    },
    data(){
        return {
            message: this.error.isAxiosError ? this.error.response.statusText : this.error.message
        }
    },
    mounted(){
        this.$nextTick(() => {
            document.querySelectorAll('.vs-tooltip').forEach(el => el.remove());
        });
    }
}
</script>
