import config from '@/config';
import { mapGetters } from 'vuex';
export default{
    head(){
        return {
            titleTemplate: `%s | ${this.$t('header.description')}`,
            htmlAttrs: {
                lang: this.locale
            },
            bodyAttrs: {
                class: `${this.realTheme} ${this.realTheme === 'dark' ? 'mode-dark' : ''}`.trim(),
                'vs-theme': this.realTheme
            }
        }
    },
    data(){
        return {
            systemTheme: this.getSystemTheme(),
            realTheme: null
        }
    },
    mounted(){
        this.bootstrapTheme();
    },
    computed: mapGetters({
        theme: 'theme/theme',
        locale: 'locale/locale'
    }),
    watch: {
        theme: {
            handler(value){
                if (process.client) {
                    value === 'system' ? this.bootstrapListener() : this.destroyListener();
                    this.bootstrapTheme();
                }
            }
        },
        systemTheme: {
            handler(value){
                if (this.theme === 'system') {
                    this.realTheme = value;
                }
            }
        },
        realTheme: {
            handler(value){
                this.$store.commit('theme/setRealTheme', value);
            }
        }
    },
    methods: {
        getSystemTheme(){
            if (process.client) {
                return (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) ? 'dark' : 'light';
            }
            else{
                return config.theme.default;
            }
        },
        bootstrapListener(){
            let self = this;
            window.matchMedia('(prefers-color-scheme: dark)').addListener(e => {
                self.systemTheme = e.matches ? 'dark' : 'light';
            });
        },
        destroyListener(){
            window.matchMedia('(prefers-color-scheme: dark)').removeEventListener();
        },
        bootstrapTheme(){
            if (this.theme === 'system') {
                this.realTheme = this.getSystemTheme();
                this.bootstrapListener();
            }
            else{
                this.realTheme = this.theme;
            }
        }
    }
}
