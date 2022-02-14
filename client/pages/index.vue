<template>
    <fragment>

        <video-background-div
            :video="`/footage/learning-english.mp4`"
            tag="section">
            <div class="relative z-1 mx-auto w-auto px-2 py-24 sm:w-auto sm:px-2 sm:py-24 md:w-3/4 md:py-20 lg:w-2/3 lg:py-18 xl:w-1/2 xl:py-16 flex items-center">
                <img v-lazy="`/logo.png`" alt="logo" width="100" height="100" class="rounded" />
                <span class="pl-16">
                    <h1 class="text-md sm:text-md md:text-2xl lg:text-3xl pt-6 pb-2 m-0 font-semibold">
                        <span class="p-2 capitalize shadow-2xl bg-theme">
                            {{ $t('header.title') }}
                        </span>
                    </h1>
                    <h2 class="text-base sm:text-base md:text-lg lg:text-xl py-4 m-0 font-normal">
                        <span class="p-2 capitalize shadow-2xl bg-theme">
                            {{ $t('header.description') }}
                        </span>
                    </h2>
                </span>
            </div>
        </video-background-div>

        <main class="min-h-full overflow-x-hidden container mx-auto w-auto px-2 sm:px-2 md:px-3 lg:px-4">
            <figure class="pt-4 pb-10 m-0">
                <blockquote>
                    <client-only>
                        <hand-writing text="Of the learners" :font-size="25" :delay="1000"/>
                        <hand-writing text="By the learners" :font-size="25" :delay="4000"/>
                        <hand-writing text="For the learners" :font-size="25" :delay="7000"/>
                    </client-only>
                </blockquote>
                <figcaption>
                    <client-only>
                        <hand-writing text="Wordblock" :font-size="40" :delay="10000"/>
                    </client-only>
                </figcaption>
            </figure>
        </main>
    </fragment>
</template>
<script type="text/javascript">
import VideoBackgroundDiv from '@/components/video-background-div';
import HandWriting from '@/components/hand-writing';
export default{
    head(){
        return {
            title: `${this.$t('header.title')} | ${this.$t('header.description')}`,
            titleTemplate: null
        }
    },
    components: {
        VideoBackgroundDiv,
        HandWriting
    }
}
</script>
