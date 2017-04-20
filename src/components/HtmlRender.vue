<template>
    <div style="background-color:aqua;" v-html="srcHtml">
        
    </div>
</template>

<script>
    export default {
        name: 'html-render',
        props: {
            srcHtml: {
                type: String,
                required: true
            }
        }
    }

</script>