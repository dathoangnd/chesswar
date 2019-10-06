export default {
    methods: {
        request(path, method, data) {
            return fetch('/' + path, {
                method: method,
                body: JSON.stringify(data)
            })
        }
    }
}