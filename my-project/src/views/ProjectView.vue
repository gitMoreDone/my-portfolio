<template>
    <div>
        <h1>My Projects</h1>
        <div v-if="hasError">{{ error }}</div>
        <div v-if="isLoading">
            <img src="../assets/loading.gif" alt="Page is Loading........" width="250">
        </div>
        <div v-else>
            <div class="repos">
                <RepoComponent v-for="repo in repoData" v-bind:key="repo.id"
                :title="repo.name"
                :html_url="repo.html_url"
                :id="repo.id"
                :image_url="`../assets/images/${repo.name}.png`"
                class="column"
                >
            </RepoComponent>

            </div>

        </div>
    </div>

</template>


<script>
import GithubService from '@/services/GithubService';
import RepoComponent from '@/components/RepoComponent.vue';
export default {
    components: {
        RepoComponent
    },
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
            setTimeout(() => (this.isLoading = false), 1100);
        })
    }
}

</script>


<style>

</style>