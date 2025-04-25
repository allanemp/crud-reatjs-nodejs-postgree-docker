import { useParams } from 'react-router-dom';

import FormUser from './form/FormUser';
import { Card, CardHeader, CardBody } from 'reactstrap';
const EditUserPage = () => {
    const { id } = useParams();
    
    return (
        <Card className="shadow-sm">
            <CardHeader className="bg-primary text-white">
                <h4 className="mb-0">Editar Usuário</h4>
            </CardHeader>
            <CardBody>
                <FormUser id={id}/>
            </CardBody>
        </Card>
    )
}

export default EditUserPage;