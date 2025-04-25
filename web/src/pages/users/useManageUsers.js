import { useState, useEffect } from 'react';
import userService from '../../services/userService';
import { toast } from 'react-toastify';
const useUsers = () => {
    
    const [users, setUsers] = useState([]);
    
    useEffect(() => {        
        try {
            userService.getAll().then((response) => {
                setUsers(response.data);
                toast.success('Usuários carregados com sucesso');
            });
        } catch (error) {
            toast.error('Erro ao carregar usuários');
        }
    }, []);

    return { users, setUsers };
}

export default useUsers;