export default {
    methods: {
        request(path, method, data) {
            return fetch('http://localhost:3001/' + path, {
                method: method,
                body: JSON.stringify(data)
            })
        }
    }
}