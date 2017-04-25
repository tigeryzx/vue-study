<template>
    <div>
        <html-Editor @htmlChange="htmlChange"></html-Editor>
        <div style="background-color:aqua;" v-html="srcHtml"></div>
    </div>
</template>

<script>
    import htmlEditor from '../components/HtmlEditor'
    import * as types from '../vuex/types'

    export default {
        name: 'editor',
        computed: {
            srcHtml() {
                return this.$store.state.b.srcHtml;
            }
        },
        methods: {
            htmlChange(html) {
                this.$store.commit(types.SET_SRCHTML, { html: html });
            }
        },
        components: {
            'html-Editor': htmlEditor
        }
    }

</script>