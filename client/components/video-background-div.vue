<template>
    <component :is="tag"
        class="relative"
        ref="container">
        <div class="overflow-hidden absolute top-0 left-0 z-0 h-full w-full backdrop-filter-saturate">
            <video ref="video"
                autoplay
                muted
                loop
                :class="{
                    'w-full': needFullWidth,
                    'h-full': !needFullWidth
                }">
                <source :src="video" type="video/mp4" controls="false"/>
            </video>
        </div>
        <div class="w-full h-full backdrop-filter-saturate-blur">
            <slot></slot>
        </div>
    </component>
</template>
<script type="text/javascript">
export default{
    props: {
        video: {
            required: true
        },
        tag: {
            required: false,
            default: 'div',
            type: String
        }
    },
    data(){
        return {
            needFullWidth: true,
            listener: true
        }
    },
    created(){
        this.bootstrap();
    },
    destroy(){
        this.listener = false;
    },
    methods: {
        bootstrap(){
            if (process.client) {
                this.$nextTick(() => {
                    this.checkNeedFullWidth();
                    window.onresize = () => {
                        if (this.listener) this.checkNeedFullWidth();
                    };
                });
            }
        },
        checkNeedFullWidth(){
            try{
                let { height, width } = this.$refs.container.getBoundingClientRect(),
                    { videoHeight, videoWidth } = this.$refs.video;

                if (videoHeight && videoWidth) {
                    this.needFullWidth = (width / height) > (videoWidth / videoHeight);
                }
                else{
                    this.needFullWidth = window.innerWidth > window.innerHeight;
                }
            }catch(error){
                this.needFullWidth = window.innerWidth > window.innerHeight;
            }
        }
    }

}
</script>
