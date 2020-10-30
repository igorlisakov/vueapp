<template>
    <div>
        <a href="http://any-site.com" @click.prevent="previewFile()">Preview file</a>
    </div>
</template>

<script>
    export default {
        name: "Home",
        methods: {
            previewFile() {
                let routeData = this.$router.resolve({name: 'download'});
                window.open(routeData.href, '_blank');
            }
        }
    }
</script>

<style scoped>

</style>
