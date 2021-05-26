<template>
    <div>
        <h3>feedback</h3>
        <DsForm v-bind:username="{}"></DsForm>
    </div>
</template>

<script>
    import DsForm from './DsForm'

    export default {
        components: {DsForm},
        name: "feedback"
    }
</script>

<style scoped>

</style>