<template>
    <h1>Hello from component</h1>
</template>

<script>
export default {
    name: 'App Name',

    mounted(){
        console.log('a')
    }
}
</script>

<style scoped>
h1 {
    color: red;
}
</style>