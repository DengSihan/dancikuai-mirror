import Vue from 'vue';
import { mapGetters } from 'vuex';
import config from '@/config';
import UserAvatar from '@/components/user/avatar';
import Heading from '@/components/heading';

import dayjs from 'dayjs';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import duration from 'dayjs/plugin/duration';
import relativeTime from 'dayjs/plugin/relativeTime';
import 'dayjs/locale/zh-cn';
import 'dayjs/locale/en';
import 'dayjs/locale/ja';

dayjs.extend(localizedFormat);
dayjs.extend(duration);
dayjs.extend(relativeTime);

Vue.mixin({
    httpHeaders:() => ({
        'X-Frame-Options': 'SAMEORIGIN'
    }),
    components: {
        UserAvatar,
        Heading
    },
    data(){
        return {
            containerClass: 'min-h-screen container mx-auto w-auto px-2 sm:px-2 md:px-3 lg:px-4 relative'
        }
    },
    destroyed(){
        try{
            for (let tooltip of document.getElementsByClassName('vs-tooltip')) {
                tooltip.remove();
            }
        }catch(e){
            console.error(e);
        }
    },
    computed: mapGetters({
        logged: 'auth/user'
    }),
    methods: {
        notify(options){
            this.$vs.notification({
                square: true,
                position: 'bottom-right',
                color: 'primary',
                progress: 'auto',
                duration: 6000,
                ...options
            });
        },
        // add locale to route
        generateRoute(route){
            if (route.params) {
                if (route.params.locale) {
                    if (route.params.locale === config.locale.default) {
                        delete route.params.locale
                    }
                }
                else{
                    if (this.$store.state.locale.locale !== config.locale.default) {
                        route.params = {
                            locale: this.$store.state.locale.locale,
                            ...route.params,
                        };
                    }
                }
            }
            else{
                if (this.$store.state.locale.locale !== config.locale.default) {
                    route.params = {
                        locale: this.$store.state.locale.locale
                    };
                }
            }
            return route;
        },
        generateAuthRoute(route){
            if (!this.logged) {
                let targetUrl = this.$router.resolve(this.generateRoute(route)).href;
                return this.generateRoute({
                    name: 'login',
                    query: {
                        from: targetUrl
                    }
                });
            }
            else{
                return this.generateRoute(route);
            }
        },

        unixTime2LocaleTime(timestampe){
            let time = dayjs.unix(timestampe);
            return time.locale(this.$store.getters['locale/locale'].toLowerCase()).format('LLL');
        },
        duratingCount(time){
            let duration = dayjs.duration(time, 'seconds');
            return duration.locale(this.$store.getters['locale/locale'].toLowerCase()).humanize();
        }
    }
});
