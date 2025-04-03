<template>
    <h1>My Projects</h1>
    <div v-if="isLoading">
        <img src="../assets/loading.gif" alt="Page is Loading........" width="250">
    </div>
    <div v-else>
        <h2 v-for="repos in repoData" :key="repos.id">{{ repos.id }} {{ repos.name }}

        </h2>

    </div>

</template>


<script>
import GithubService from '@/services/GithubService';
export default {
    data() {
        return {
            isLoading: true,
            repoData: [],
            hasError: false,
            error: 'Error Loading Page',
        }
    },
    created() {
        GithubService.getRepos()
        .then((response) => {
            console.log(response);
            this.repoData = response.data;
        })
        .catch((error) => {
            this.hasError= true;
            this.error = error;

        })
        .finally(() => {
            setTimeout(() => (this.isLoading = false), 1950);
        })
    }
}

</script>


<style>

</style>