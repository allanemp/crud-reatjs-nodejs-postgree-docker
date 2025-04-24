import { Table, Button } from 'reactstrap';
import UserService from '../../../services/userService';
import useTableUsers from './useTableUsers';

const TableUsers = ({ users, setUsers }) => {
    
    const { handleDelete, handleEdit } = useTableUsers({ users, setUsers });

    return (
        <div className="table-responsive">
            <Table hover className="align-middle">
                <thead className="table-light"> 
                    <tr>
                        <th>Nome</th>
                        <th>Email</th>
                        <th className="text-end">Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user.id}>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td className="text-end">
                                <Button 
                                    color="info" 
                                    size="sm" 
                                    className="me-2"
                                    onClick={() => handleEdit(user.id)}
                                >
                                    <i className="fas fa-edit me-1"></i>
                                    Editar
                                </Button>
                                <Button 
                                    color="danger" 
                                    size="sm"
                                    onClick={() => handleDelete(user.id)}
                                >
                                    <i className="fas fa-trash me-1"></i>
                                    Excluir
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    )
}

export default TableUsers;