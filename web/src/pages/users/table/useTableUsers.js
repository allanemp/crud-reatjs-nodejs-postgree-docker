import { useState, useEffect } from 'react';
import UserService from '../../../services/userService';
import { useNavigate } from 'react-router-dom';
import {  toast } from 'react-toastify';
import ModalDeleteConfirm from '../../../components/ModalDeleteConfirm';
const useTableUsers = ({ users, setUsers }) => {
    const navigate = useNavigate();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [idToDelete, setIdToDelete] = useState(null);
    const [message, setMessage] = useState('');

    const handleDelete = (id) => {
        setIsModalOpen(true);
        setIdToDelete(id);
        setMessage(`Tem certeza que deseja deletar este usuário?`);
    }

    const toggleConfirm = () => {
        UserService.delete(idToDelete).then(() => {
            setUsers(users.filter((user) => user.id !== idToDelete));
            toast.success('Usuário deletado com sucesso');
            setIsModalOpen(false);
        });        
    }

    const toggleModal = () => {
        setIsModalOpen(false);
    }

    const handleEdit = (id) => {
        navigate(`/edit-user/${id}`);
    };

    return { users, handleDelete, handleEdit, isModalOpen, toggleModal, message, toggleConfirm };
}

export default useTableUsers;