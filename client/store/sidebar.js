export const namespace = true;

export const state = () => ({
    show: false
});

export const getters = {
	show: state => state.show
};

export const mutations = {
    showSidebar(state){
        state.show = true;
    },
    hideSidebar(state){
        state.show = false;
    },
    toggle(state){
    	state.show = !state.show;
    }
};
