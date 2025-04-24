import userService from "../services/UserService.js";

const UserController = {
    getAllUsers: async (req, res) => {
        try {
            const users = await userService.getAllUsers();
            res.status(200).json(users);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    getUserById: async (req, res) => {
        try {
            const user = await userService.getUserById(req.params.id);
            res.status(200).json(user);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    createUser: async (req, res) => {
        try {
            const user = await userService.createUser(req.body);
            res.status(201).json(user);
        } catch (error) {
            if(error.name === 'SequelizeUniqueConstraintError') {
                const errors = error.errors.map(err => err.path);

                if(errors.includes('email')) {
                    res.status(409).json({ message: 'Email já cadastrado' });
                }

                return;
            }
            res.status(500).json({ message: error.message }); 
        }
    },

    updateUser: async (req, res) => {
        try {
            const user = await userService.updateUser(req.params.id, req.body);
            res.status(200).json(user);
        } catch (error) {
            if(error.name === 'SequelizeUniqueConstraintError') {
                const errors = error.errors.map(err => err.path);

                if(errors.includes('email')) {
                    res.status(409).json({ message: 'Email já cadastrado' });
                }

                return;
            }
            res.status(500).json({ message: error.message }); 
        }
    },

    deleteUser: async (req, res) => {
        try {
            const user = await userService.deleteUser(req.params.id);
            res.status(200).json(user);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}

export default UserController;