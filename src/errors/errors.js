class Errors {
    constructor() {
        this.errors = []
    }

    get(field) {
        if (this.errors[field]) {
            return this.errors[field];
        }
    }

    clear(field) {
        this.errors[field] = ''
    }

    clearAll() {
        this.errors = []
    }

    set(errors) {
        this.errors = errors
    }
}

export default Errors;