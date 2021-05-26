import axios from 'axios'


export default {
    getAllPosts() {
        return axios.get('map.json');
    },

    getPost(path) {
        return axios.get(path);
    },

    getCategroy() {
        return axios.get('categroy.json');
    }
}