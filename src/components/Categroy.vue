<template>
    <post-list v-if="loaded" :posts="posts" :links="links" @loadMorePosts="getMorePosts"></post-list>
    <loading v-else></loading>
</template>

<script>
    import PostList from './common/PostList';
    import Loading from "./common/Loading";

    export default {
        components: {PostList, Loading},
        name: "categroy",
        data() {
            return {
                name: '',
                links: {},
            }
        },
        mounted() {
            if (!this.loaded) {
                this.updateCategoryName();
            }
        },
        watch: {
            '$route': 'updateCategoryName'
        },
        computed: {
            posts() {
                return this.$store.getters.getPostsData;
            },
            loaded() {
                return this.$store.getters.getPostsLoaded;
            }
        },
        methods: {
            updateCategoryName() {
                this.name = this.$route.params.name.toUpperCase();
                this.$store.dispatch('loadPosts', this.name);
            },
            getMorePosts(nextPageUrl) {
                console.log(nextPageUrl)
                // axios.get(nextPageUrl).then((resp) => {
                //     this.posts.push(...resp.data.data);
                //     this.links = resp.data.links;
                //     this.loaded = true;
                // }).catch((err) => {
                //     console.log(err);
                // })
            }
        }
    }
</script>

<style scoped>

</style>