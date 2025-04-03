import axios from "axios";

const http = axios.create({
    baseURL: 'https://api.github.com/users/gitmoredone/repos'
});

export default {
    getRepos(){
        return http.get();
    }
}