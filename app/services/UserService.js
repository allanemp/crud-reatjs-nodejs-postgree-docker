import User from "../models/User.js";

User.sync();

const UserService = {
    getAllUsers: async () => {
        const users = await User.findAll();
        return users;
    },

    getUserById: async (id) => {
        const user = await User.findByPk(id);
        return user;
    },

    createUser: async (user) => {
        const newUser = await User.create(user);
        return newUser;
    },

    updateUser: async (id, user) => {
        const updatedUser = await User.update(user, { where: { id } });
        return updatedUser;
    },

    deleteUser: async (id) => {
        const deletedUser = await User.destroy({ where: { id } });
        return deletedUser;
    }
}
export default UserService;