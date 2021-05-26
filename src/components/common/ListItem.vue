<template>
    <div class="border w-full lg:flex mb-5">
        <div class="h-48 lg:w-48 flex-none bg-cover text-center overflow-hidden opacity-75"
             :style="'background-image: url(' + post.image_url  +')'" :title="post.title">
        </div>
        <div class="bg-white px-4 flex flex-col justify-between leading-normal pt-2 pb-2">
            <div>
                <div class="mt-3 md:mt-0 text-gray-700 font-bold text-2xl mb-2">
                    <router-link :to="{ name: 'post', params: { post: post }}">
                        {{ post.title }}
                    </router-link>
                </div>
                <p class="text-gray-700 text-base">
                    {{ post.abstract }}
                </p>
            </div>
            <div class="flex mt-3">
                <div>
                    <p class="text-gray-600 text-xs"> {{ post.created_at }} </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "list-item",
        props: ['post'],
    }
</script>

<style scoped>

</style>