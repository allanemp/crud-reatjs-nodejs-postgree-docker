import { useState, useEffect } from 'react';
import UserService from '../../../services/userService';
import { useNavigate } from 'react-router-dom';

const useTableUsers = ({ users, setUsers }) => {
    const navigate = useNavigate();


    const handleDelete = (id) => {
        //exibir confirmacao usando reactstrap
        const confirm = window.confirm('Tem certeza que deseja deletar este usuário?');
        if (confirm) {
            UserService.delete(id).then(() => {
                setUsers(users.filter((user) => user.id !== id));
            });
        }
    };

    const handleEdit = (id) => {
        navigate(`/edit-user/${id}`);
    };

    return { users, handleDelete, handleEdit };
}

export default useTableUsers;