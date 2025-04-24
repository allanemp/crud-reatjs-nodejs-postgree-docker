import axios from 'axios';

const userService = {
    getAll: () => {
        return axios.get('http://localhost:8080/users');
    },
    create: (user) => {
        console.log("Chegou no service", user);
        return axios.post('http://localhost:8080/users', user);
        
    },
    update: (id, user) => {
        return axios.put(`http://localhost:8080/users/${id}`, user);
    },
    delete: (id) => {
        return axios.delete(`http://localhost:8080/users/${id}`);
    },
    getById: (id) => {
        return axios.get(`http://localhost:8080/users/${id}`);
    }
}

export default userService;