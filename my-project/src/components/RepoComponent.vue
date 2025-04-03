<template>
    <div class="project">
        <img :src="imgPath" alt="repo Image" class="image" @error="imageLoadError">
        <h2>{{ title }}</h2>
        <p>{{ id }}</p>
        <p><a :href="html_url" target="_blank">{{  html_url }}</a></p>
    </div>
</template>

<script>
export default {
    props: ['title', 'html url', 'id', 'image_url'],
    data() {
        return {
            error: false
        }
    },
    methods: {
        imageLoadError() {
            this.error = true;
        }
    },
    computed: {
        imgPath() {
            if (this.title.includes('portfolio')){
                return new URL("", import.meta.url);
            }
            if (this.title.includes('demo')){
                return new URL("", import.meta.url);
            }
            if (this.error){
                return new URL("", import.meta.url);
            }
            return new URL(this.image_url, import.meta.url);
        }
    }
}
</script>

<style>
</style>