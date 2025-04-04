<template>
    <div>
      <h1>Resume</h1>
      <vue-pdf-embed :source="sourceFile" />
    </div>
  </template>
  
  <script>
  import VuePdfEmbed from 'vue-pdf-embed';
  export default {
      components: {
          VuePdfEmbed
      },
      data() {
          return {
              sourceFile: 'Matthew Lewis Resume.pdf'
          }
      }
  
  }
  </script>

<style>
</style>