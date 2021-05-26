import axios from 'axios'

class Form {
    constructor(data) {
        this.originData = data;

        for (let field in data) {
            this[field] = data[field]
        }

        this.errors = new Errors();
        this.success = false
    }

    data() {
        let data = {};

        for (let field in this.originData) {
            data[field] = this[field]
        }
        return data;
    }

    reset() {
        for (let field in this.originData) {
            delete this[field];
        }
        this.errors.clearAll()
    }

    post(url) {
        return this.submit(url, 'post')
    }

    put(url) {
        return this.submit(url, 'put')
    }

    submit(url, method) {
        return new Promise((resolve, reject) => {
            axios[method](url, this.data())
                .then(response => {
                    // this.onSuccess(response.data);
                    // this.success = true;
                    resolve(response.data);
                })
                .catch(error => {
                    // this.onFail(error.response.data.errors);
                    reject(error.response.data);
                });
        });
    }

    onSuccess(data) {
        console.log(data);
        this.reset();
    }


    /**
     * 处理表单提交失败
     *
     * @param {object} errors
     */
    onFail(errors) {
        this.errors.set(errors);
    }
}

class Errors {
    constructor() {
        this.errors = {};
    }

    get(field) {
        if (this.errors[field]) {
            return this.errors[field];
        }
    }

    clear(field) {
        if (field) {
            delete this.errors[field];
            return;
        }
        this.errors = {};
    }

    set(errors) {
        this.errors = errors;
    }
}

export default Form;