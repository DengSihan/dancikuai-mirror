export default{
    data(){
        return {
            loading: null,
            from: this.$route.query.from
        }
    },
    methods: {
        handleToken(data){
            this.$nuxt.$loading.increase(50);
            // save the token.
            this.$store.dispatch('auth/saveToken', {
                token: data.access_token,
                remember: this.remember
            });

            // fetch the user.
            this.$store.dispatch('auth/fetchUser').then(() => {
                this.$nuxt.$loading.finish();
                this.loading ? this.loading.close() : true;
                this.$router.push(this.logged ?  this.from || '/' : this.$route.path);
            });
        }
    }
}
