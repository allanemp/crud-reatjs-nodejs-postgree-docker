/**
 * ManageUsers
 * 
 * Componente responsável por exibir e gerenciar a lista de usuários.
 * Utiliza o hook useManageUsers para obter os dados dos usuários.
 */
import useManageUsers from './useManageUsers';
import TableUsers from './table/TableUsers';
import { Card, CardHeader, CardBody, Button } from 'reactstrap';
import { Link } from 'react-router-dom';

const ManageUsers = () => {
    // Obtém a lista de usuários e a função para atualizar a lista
    const { users, setUsers } = useManageUsers();

    return (
        // Card principal com sombra suave
        <Card className="shadow-sm">
            {/* Cabeçalho do card com título e botão de adicionar */}
            <CardHeader className="bg-primary text-white d-flex justify-content-between align-items-center">
                <h4 className="mb-0">Gerenciar Usuários</h4>
                {/* Botão para adicionar novo usuário */}
                <Link to="/add-user">
                    <Button color="light" size="sm">
                        <i className="fas fa-user-plus me-1"></i>
                        Adicionar Usuário
                    </Button>
                </Link>
            </CardHeader>
            {/* Corpo do card contendo a tabela de usuários */}
            <CardBody>
                <TableUsers users={users} setUsers={setUsers} />
            </CardBody>
        </Card>
    )
}

export default ManageUsers;
