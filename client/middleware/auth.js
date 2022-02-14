import config from '@/config';

export default function ({ store, redirect }){
    if (!store.getters['auth/check']) {
        if (store.getters['locale/locale'] === config.locale.default) {
            redirect('/login');
        }
        else{
            return redirect(`/${store.getters['locale/locale']}/login`);
        }
    }
}
