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
        // const match = ['projects', 'products']
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
        // window.addEventListener('message', (evt) => {
        //     if (evt.data && evt.data.navigate) {
        //         this.$router.replace(`/${evt.data.type}/${evt.data.id}`)
        //     }
        // })
    }
}
</script>