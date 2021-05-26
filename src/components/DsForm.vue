<template>
    <div class="card col-8 post-form">
        <h3 class="text-center">发布新文章</h3>
        <hr>
        <form @submit.prevent="store" @keyup="form.errors.clear($event.target.name)">
            <div class="form-group">
                <label for="title">标题</label>
                <input type="text" ref="title" class="form-control" id="title" name="title" v-model="form.title">
                <div class="alert alert-danger" role="alert" v-show="form.errors.get('title')">
                    {{ form.errors.get('title') }}
                </div>
            </div>
            <div class="form-group">
                <label for="author">作者</label>
                <input type="text" ref="author" class="form-control" id="author" name="author" v-model="form.author">
                <div class="alert alert-danger" role="alert" v-show="form.errors.get('author')">
                    {{ form.errors.get('author') }}
                </div>
            </div>
            <div class="form-group">
                <label for="content">内容</label>
                <textarea class="form-control" ref="content" id="content" name="content" rows="5"
                          v-model="form.content"></textarea>
                <div class="alert alert-danger" role="alert" v-show="form.errors.get('content')">
                    {{ form.errors.get('content') }}
                </div>
            </div>
            <div class="form-group">
                <label for="content">内容2</label>
                <!--<Simditor @change="change"></Simditor>-->
                <div class="alert alert-danger" role="alert" v-show="form.errors.get('content')">
                    {{ form.errors.get('content') }}
                </div>
            </div>

            <button type="submit" class="btn btn-primary">立即发布</button>
            <div class="alert alert-success" role="alert" v-show="form.success">
                文章发布成功。
            </div>
        </form>
    </div>
</template>

<script>
    // import axios from 'axios'
    import Form from '../form/form'
    // import Simditor from './form/Simditor'

    export default {
        // components: {Simditor},
        name: "ds-from",
        props: ['username'],
        data() {
            return {
                form: new Form({
                    title: '',
                    author: this.username,
                    content: ''
                })
            }
        },
        mounted() {
            console.log(this.$user);
            this.form.author = this.$user.name;
        },
        methods: {
            change(val) {
                console.log(val)
            },
            store() {
                // 先清理错误消息
                // Object.entries(this.errors).forEach(error => {
                //     let [key] = error;
                //     this.errors[key] = "";
                // });

                // axios.post("/post", this.article).then(response => {
                //     // 请求处理成功
                //     this.published = true;
                //     console.log(response.data);
                // }).catch(error => {
                //     // 请求验证失败
                //     // 获取验证错误包
                //     let errorBag = error.response.data;
                //     // 错误包中每个字段的错误信息可能有多个
                //     Object.entries(errorBag.errors).forEach(bag => {
                //         let [field, errors] = bag;
                //         if (errors.length > 0) {
                //             this.errors[field] = errors.join('<br>');
                //         }
                //     })
                // })
                if (this.form.title == '') {
                    this.form.errors.set({title: '标题不能为空'});
                }

                this.form.post('/')
                    .then(data => console.log(data))    // 自定义表单提交成功处理逻辑
                    .catch(data => console.log(data));  // 自定义表单提交失败处理逻辑

                console.log(this.article);
            }
        }
    }
</script>

<style scoped>
    .post-form {
        margin: 50px auto;
        padding: 30px;
    }

    .alert {
        margin-top: 10px;
    }
</style>