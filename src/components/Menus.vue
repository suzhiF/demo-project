<template>
    <aside class="w-1/5 pt-8">
        <section class="mb-10">
            <ul class="list-reset">
                <h1 class="mb-4">
                    <img src="/images/logo.png" alt="vue"/>
                </h1>
                <li class="leading-loose">
                    <router-link to="/">Home</router-link>
                </li>
                <li class="leading-loose" v-for="ca in categories" :key="ca.path">
                    <router-link :to="{ name: 'category', params: { name: ca.path }}">{{ ca.title }}</router-link>
                </li>
                <li class="leading-loose">
                    <router-link to="/about">About</router-link>
                </li>
                <li class="leading-loose">
                    <router-link to="/feedback">Feedback</router-link>
                </li>
            </ul>
        </section>
    </aside>
</template>

<script>
    export default {
        name: "categroy-list",
        created() {
            this.$store.dispatch('loadCategroy')
        },
        computed: {
            categories() {
                return this.$store.getters.getCategroy;
            }
        }
    }
</script>

<style scoped>

</style>