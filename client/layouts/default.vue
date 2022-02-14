<template>
    <fragment>
        <sidebar/>
        <custom-nuxt/>
    </fragment>
</template>
<script type="text/javascript">
import CustomNuxt from '@/components/layouts/custom-nuxt';
import Sidebar from '@/components/layouts/sidebar';
import layout from '@/mixins/layout';
export default{
    mixins: [
        layout
    ],
    components: {
        CustomNuxt,
        Sidebar
    }
}
</script>

