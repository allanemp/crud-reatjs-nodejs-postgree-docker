import axios from 'axios';

const userService = {
    getAll: () => {
        try {
            return axios.get('http://localhost:8080/users');
        } catch (error) {
            console.error("Error getting all users:", error);
            throw error;
        }
    },
    create: (user) => {
        try {
            return axios.post('http://localhost:8080/users', user);
        } catch (error) {
            console.error("Error creating user:", error);
            throw error;
        }
    },
    update: (id, user) => {
        try {
            return axios.put(`http://localhost:8080/users/${id}`, user);
        } catch (error) {
            console.error("Error updating user:", error);
            throw error;
        }
    },
    delete: (id) => {
        try {
            return axios.delete(`http://localhost:8080/users/${id}`);
        } catch (error) {
            console.error("Error deleting user:", error);
            throw error;
        }
    },
    getById: (id) => {
        try {
            return axios.get(`http://localhost:8080/users/${id}`);
        } catch (error) {
            console.error("Error getting user by id:", error);
            throw error;
        }
    }
}

export default userService;