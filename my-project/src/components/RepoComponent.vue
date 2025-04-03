<template>
    <div class="project">

        <p>
            <a :href="image_url" target="_blank">
            {{ html_url }}
            </a>
        </p>
        <h2>{{ title }}</h2>
        <p>{{ id }}</p>
    </div>
</template>

<script>
export default {
    props: ['title', 'id', 'image_url'],
}
</script>

<style>
</style>