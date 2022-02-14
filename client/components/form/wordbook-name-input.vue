<template>
    <vs-input
        :state="errors.length ? 'danger' : ''"
        square
        class="my-6"
        :value="value"
        @input="$emit('input', $event)"
        autocomplete="false"
        type="text"
        name="text"
        :required="required"
        :label-placeholder="$t('wordbook_title').toCapitalizePhrases()">
        <template #icon>
            <i class='mdi mdi-book-open-variant text-xl'></i>
        </template>
        <template #message-danger v-if="errors.length">
            <ul class="pl-4 my-4">
                <li v-for="error in errors">
                    {{ error }}
                </li>
            </ul>
        </template>
    </vs-input>
</template>
<script type="text/javascript">
export default{
    props: {
        value: {
            type: String
        },
        errors: {
            type: Array
        },
        required: {
            default: true,
            required: false
        }
    }
}
</script>
