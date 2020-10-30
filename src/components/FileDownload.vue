<template>
    <div>
        <a href="http://any-site.com" @click.prevent="downloadItem()">Download file</a>
    </div>
</template>

<script>
    import axios from 'axios';
    export default {
        name: "FileDownload",
        data() {
            return {
                url: "http://localhost:8010/proxy/bird.png",
                name: "johnny"
            }
        },
        methods: {
            downloadItem () {
                axios.get(this.url, { responseType: 'blob' })
                    .then(response => {
                        const blob = new Blob([response.data], { type: 'image/png' })
                        //const link = document.createElement('a')
                        //link.href = URL.createObjectURL(blob)
                        //link.download = this.name
                        //link.click()
                        const link = URL.createObjectURL(blob)
                        window.open(link, '_blank')
                        URL.revokeObjectURL(link.href)
                    }).catch(console.error)
            }
        }
    }
</script>

<style scoped>

</style>
