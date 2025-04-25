import { Modal, ModalHeader, ModalBody, Button } from 'reactstrap';

const ModalDeleteConfirm = ({ isOpen, toggle, message, toggleConfirm }) => {
    return (
        <Modal isOpen={isOpen} toggle={toggle}>
            <ModalHeader>Deletar Usuário</ModalHeader>
            <ModalBody>
                <p>{message}</p>
                <Button color="danger" name="delete" onClick={toggleConfirm}>Deletar</Button>
                <Button color="secondary" name="cancel" onClick={toggle}>Cancelar</Button>
            </ModalBody>
        </Modal>
    )
}

export default ModalDeleteConfirm;  