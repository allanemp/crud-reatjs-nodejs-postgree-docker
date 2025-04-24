import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import validationUser from './validations/ValidationUser';
import { Controller } from 'react-hook-form';
import UserService from '../../../services/userService';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

const useFormUser = ({ id }) => {
    const navigate = useNavigate();

    const { handleSubmit, control, formState: { errors }, setValue } = useForm({
        resolver: zodResolver(validationUser),
    });

    useEffect(() => {
        const fetchUser = async () => {
            if (id) {
                const response = await UserService.getById(id);
                setValue('name', response.data.name);
                setValue('email', response.data.email);
            }
        };
        fetchUser();
    }, [id]);

    const onSubmit = async (data) => {
        if (id) {
            try {
                await UserService.update(id, data);
                navigate('/manage-users');
            } catch (error) {
                alert(error.response.data.message);
            }
            return;
        } 
        
        try {
            await UserService.create(data);
            navigate('/manage-users');
        } catch (error) {
            alert(error.response.data.message);
        }
        
    }

    return { handleSubmit, onSubmit, control, Controller, errors };
}

export default useFormUser;