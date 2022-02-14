import Cookie from 'js-cookie';

export const namespace = true;

export const state = () => ({
    theme: 'system',
    realTheme: null
});

export const getters = {
    theme: state => state.theme,
    realTheme: state => state.realTheme
};

export const mutations = {
    setTheme(state, theme){
        state.theme = theme;
        Cookie.set('theme', theme, 365);
    },
    setRealTheme(state, realTheme){
    	state.realTheme = realTheme;
    }
};
