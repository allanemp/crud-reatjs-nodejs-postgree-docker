import { useParams } from 'react-router-dom';

import FormUser from './form/FormUser';

const EditUserPage = () => {
    const { id } = useParams();
    
    return (
        <div>
            <h1>Editar Usuário</h1>
            <FormUser id={id} />
        </div>
    )
}

export default EditUserPage;