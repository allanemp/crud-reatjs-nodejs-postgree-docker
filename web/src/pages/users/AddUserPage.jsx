import FormUser from './form/FormUser';
import { Card, CardHeader, CardBody } from 'reactstrap';

const AddUserPage = () => {
    return (
        <Card className="shadow-sm">
            <CardHeader className="bg-primary text-white">
                <h4 className="mb-0">Adicionar Usuário</h4>
            </CardHeader>
            <CardBody>
                <FormUser />
            </CardBody>
        </Card>
    )
}

export default AddUserPage;