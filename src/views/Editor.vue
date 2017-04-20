<template>
    <div>
        <html-Editor @htmlChange="htmlChange"></html-Editor>
        <html-Render :srcHtml="srcHtml"></html-Render>
    </div>
</template>

<script>
    import htmlEditor from '../components/HtmlEditor'
    import htmlRender from '../components/HtmlRender'
    import * as types from '../vuex/types'

    export default {
        name: 'editor',
        data () {
            return {
                srcHtml:''
            }
        },
        computed: {
            srcHtml(){
                this.$store.state.srcHtml;
            }
        },
        methods: {
            htmlChange(html) {
                this.$store.commit(types.SET_SRCHTML, { html: html });
            }
        },
        components: {
            'html-Editor': htmlEditor,
            "html-Render": htmlRender
        }
    }

</script>