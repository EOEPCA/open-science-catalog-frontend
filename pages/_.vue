<template>
    <iframe
        src="http://localhost:8081/external/constantinius.github.io/osc-demo/collection.json"
        border="none"
        style="width: 100%; height: 100%"
    ></iframe>
</template>

<script>
export default {
    mounted() {
        window.addEventListener('message', (evt) => {
            if (evt.data.status) {
                // const match = ['projects', 'products']
                // console.log(this.$route.path)
                // for (const type of match) {
                //     if (this.$route.path.includes(`/${type}`)) {
                //         const curr = this.$route.path.replace(`/${type}/`, '')
                //         if (type === 'products') {
                //             // actually need to go deeper here
                //         }
                //         document.querySelector('iframe').contentWindow.postMessage({
                //             navigate: true,
                //             type,
                //             id: curr
                //         }, '*')
                //     }
                // }
                if (!this.$route.path.includes('browse')) {
                    document.querySelector('iframe').contentWindow.postMessage({
                        navigate: true,
                        id: this.$route.path
                    }, '*')
                }
            } else if (evt.data && evt.data.navigate) {
                if (`/${evt.data.id}` !== this.$route.path) {
                    this.$router.replace(`/${evt.data.id}`)
                }
            }
        })
    }
}
</script>