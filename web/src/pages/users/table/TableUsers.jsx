import { Table, Button } from 'reactstrap';
import useTableUsers from './useTableUsers';
import ModalDeleteConfirm from '../../../components/ModalDeleteConfirm';
 
const TableUsers = ({ users, setUsers }) => {
    
    const { toggleConfirm, handleDelete, handleEdit, isModalOpen, toggleModal, message } = useTableUsers({ users, setUsers });

    return (
        <div className="table-responsive">
            <ModalDeleteConfirm isOpen={isModalOpen} toggle={toggleModal} message={message} toggleConfirm={toggleConfirm} />
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
                                    name="editar"
                                    color="info" 
                                    size="sm" 
                                    className="me-2"
                                    onClick={() => handleEdit(user.id)}
                                >
                                    <i className="fas fa-edit me-1"></i>
                                    Editar
                                </Button>
                                <Button 
                                    name="excluir"
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