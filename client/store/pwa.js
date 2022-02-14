export const namespace = true;

export const state = () => ({
    sw: {
        install: null,
        update: null,
    }
});

export const mutations = {
    sw(state, sw){
        state.sw = sw;
    }
};

export const actions = {
    init({ commit }){
        window.addEventListener('beforeinstallprompt', e => {
            e.preventDefault();
            commit('sw', { ...state.sw, install: e });
        });
    },
    async install({ commit, state }){
        let response = await state.sw.install.prompt();
    }
}
