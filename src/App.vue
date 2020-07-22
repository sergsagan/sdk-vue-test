<template>
    <div id="app">
        <router-view/>
    </div>
</template>

<script>
    import router from './router/router.js'

    export default {
        name: 'app',
        router
    }
</script>

