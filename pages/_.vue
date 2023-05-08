<template>
    <div class="browse">
        <iframe
            :src="iframeSrc"
            border="none"
            style="width: 100%; height: 100%"
        ></iframe>
        <edit-button />
    </div>
</template>

<script>
export default {
    data: () => ({
        iframeSrc: null,
        srcBase: 'http://localhost:8080/external/raw.githubusercontent.com/EOEPCA/open-science-catalog-metadata-testing/from-csvs',
        firstLoadDone: false
    }),
    mounted() {
        this.iframeSrc = `${this.srcBase}${this.$route.path}.json`
        console.log(this.iframeSrc)
        window.addEventListener('message', (evt) => {
            if (evt.data && evt.data.navigate && this.firstLoadDone) {
                const stringToReplace = '/external/raw.githubusercontent.com/EOEPCA/open-science-catalog-metadata-testing/from-csvs'
                const parsedPath = evt.data.navigate.replace(stringToReplace, '').replace('.json', '')
                history.replaceState({}, null, parsedPath)
            } else {
                this.firstLoadDone = true
            }
        })
    }
}
</script>

<style scoped>
.browse {
    width: 100%;
    height: 100%;
}
</style>