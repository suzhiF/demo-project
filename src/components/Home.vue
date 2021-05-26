<template>
    <div>
        <PostList v-if="loaded" :posts="posts" :links="links" @loadMorePosts="getMorePosts"></PostList>
        <Loading></Loading>
    </div>
</template>

<script>
    import PostList from './common/PostList'
    import Loading from '../components/common/Loading'

    export default {
        components: {PostList, Loading},
        name: "home",
        data() {
            return {
                // posts: [],
                links: {},
                // loaded: false
            }
        },
        created() {
            this.$store.dispatch('loadPosts');
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
            getAllPosts() {
                this.$axios.get('map.json').then((res) => {
                    console.log(res);
                    this.posts = res.data;
                    this.loaded = true
                });
            },
            getMorePosts(nextPageUrl) {
                console.log(nextPageUrl);
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