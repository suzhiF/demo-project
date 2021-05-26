import Vue from 'vue';
import Vuex from 'vuex';
import request from './request/api';

Vue.use(Vuex);

export default new Vuex.Store({
    // 实体的状态字段
    state: {
        postData: {},
        postLoaded: false,
        postsData: [],
        postsLink: {},
        postsLoaded: false,
        categroy: {}
    },
    // 各个状态的「计算属性」
    getters: {
        getPostData(state) {
            return state.postData;
        },
        getPostLoaded(state) {
            return state.postLoaded;
        },
        getPostsData(state) {
            return state.postsData;
        },
        getPostsLink(state) {
            return state.postsLink;
        },
        getPostsLoaded(state) {
            return state.postsLoaded;
        },
        getCategroy(state) {
            return state.categroy;
        }
    },
    // 各个状态的更新逻辑（与 getters 对应的「setters」）
    mutations: {
        setPostData(state, post) {
            state.postData = post;
        },
        setPostLoaded(state, loaded) {
            state.postLoaded = loaded;
        },
        setPostsData(state, posts) {
            state.postsData = posts;
        },
        setPostsLink(state, links) {
            state.postsLink = links;
        },
        setPostsLoaded(state, loaded) {
            state.postsLoaded = loaded;
        },
        setCatagroy(state, categroy) {
            state.categroy = categroy;
        }
    },
    // 初始化不同状态值（真正编写业务逻辑对状态值进行初始化/更新的地方，支持异步操作，状态值的更新通过 commit 提交触发）
    actions: {
        loadPost(context, post) {
            request.getPost(post.path).then((res) => {
                post.content = res.data.data;
                context.commit('setPostData', post);
                context.commit('setPostLoaded', true);
            }).catch((err) => {
                console.log(err)
            })
        },
        loadPosts(context, name = null) {
            console.log(name)
            request.getAllPosts().then((res) => {
                context.commit('setPostsData', res.data);
                context.commit('setPostsLoaded', true);
            }).catch((err) => {
                console.log(err)
            })
        },
        loadMorePosts(context, url) {
            console.log(url);
        },
        loadCategroy(context) {
            request.getCategroy().then((res) => {
                context.commit('setCatagroy', res.data)
            }).catch((err) => {
                console.log(err)
            })
        }
    }
})