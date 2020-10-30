<template>
    <p>Will never be displayed</p>
</template>

<script>
    export default {
        name: "FileDownload",
        data() {
            return {
                url: "http://localhost:8010/proxy/some.pdf",
                name: "johnny"
            }
        },
        mounted() {
            window.location.href = this.url
        }
    }
</script>

<style scoped>

</style>
