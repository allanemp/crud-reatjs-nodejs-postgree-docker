import { useState, useEffect } from 'react';
import userService from '../../services/userService';

const useUsers = () => {
    
    const [users, setUsers] = useState([]);
    
    useEffect(() => {        
        try {
            userService.getAll().then((response) => {
                console.log("response", response.data);
                setUsers(response.data);
            });
        } catch (error) {
            console.error("Error fetching users:", error);
        }
    }, []);

    return { users, setUsers };
}

export default useUsers;