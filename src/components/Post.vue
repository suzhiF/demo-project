<template>
    <Content :post="post" v-if="loaded"></Content>
    <loading v-else></loading>
</template>

<script>
    import Content from './common/Content'
    import Loading from "./common/Loading";

    export default {
        components: {Content, Loading},
        name: "post",
        created() {
            this.$store.dispatch('loadPost', this.$route.params.post)
        },
        computed: {
            post() {
                return this.$store.getters.getPostData
            },
            loaded() {
                return this.$store.getters.getPostLoaded
            }
        }
    }
</script>

<style scoped>

</style>