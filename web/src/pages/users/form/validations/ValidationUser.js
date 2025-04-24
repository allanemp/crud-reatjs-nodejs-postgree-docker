import { z } from 'zod';

const validationUser = z.object({
    name: z.string({ required_error: 'Nome é obrigatório' }).min(1, { message: 'Nome é obrigatório' }),
    email: z.string({ required_error: 'Email é obrigatório' }).email({ message: 'Email inválido' }),
});

export default validationUser;