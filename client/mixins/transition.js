import ErrorView from '@/layouts/error';
export default{
    components: {
        ErrorView
    },
    data() {
        return {
            prevHeight: 0,
            transitionName: 'fade'
        };
    },
    created() {
        this.$router.beforeEach((to, from, next) => {
            let transitionName = to.meta.transitionName || from.meta.transitionName;
            if (transitionName === 'slide') {
                const toDepth = to.path.split('/').length;
                const fromDepth = from.path.split('/').length;
                transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left';
            }
            this.transitionName = transitionName || 'fade';
            next();
        });
    },
    methods: {
        beforeLeave(el) {
            this.prevHeight = getComputedStyle(el).height;
        },
        enter(el) {
            const { height } = getComputedStyle(el);
            el.style.height = this.prevHeight;
            setTimeout(() => {
                el.style.height = height;
            }, 0);
        },
        afterEnter(el) {
            el.style.height = 'auto';
        }
    }
}
