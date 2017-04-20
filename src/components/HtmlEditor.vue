<template>
    <div>
        <textarea cols="30" rows="10" v-model="inputHtml" v-on:keyup="textChange"></textarea>
    </div>
</template>

<script>
    export default {
        name: 'html-editor',
        data() {
            return {
                inputHtml: ''
            }
        },
        methods: {
            textChange() {
                this.$emit('htmlChange', this.inputHtml);
            }
        }
    }

</script>