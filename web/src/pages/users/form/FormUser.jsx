import useFormUser from './useFormUser';
import { Input, Button, Form, Label, Col, Row, FormGroup} from 'reactstrap';

const FormUser = ({ id }) => {
    const { handleSubmit, onSubmit, control, Controller, errors } = useFormUser({ id });

    return (    
        <Form onSubmit={handleSubmit(onSubmit)}>
            <Row className="mb-3">
                <Col md={12}>
                    <FormGroup>
                        <Label htmlFor="name" className="fw-bold">Nome</Label>
                        <Controller
                            control={control}
                            name="name"
                            render={({ field }) => (
                                <Input
                                    {...field}
                                    className="form-control-lg"
                                    placeholder="Digite o nome do usuário"
                                />
                            )}
                        />
                        {errors?.name && <p className="text-danger">{errors.name.message}</p>}
                    </FormGroup>
                </Col>
            </Row>
            <Row className="mb-4">
                <Col md={12}>
                    <FormGroup>
                        <Label htmlFor="email" className="fw-bold">Email</Label>
                        <Controller
                            control={control}
                            name="email"
                            render={({ field }) => (
                                <Input
                                    {...field}
                                    type="email"
                                    className="form-control-lg"
                                    placeholder="Digite o email do usuário"
                                />
                            )}
                        />
                        {errors?.email && <p className="text-danger">{errors.email.message}</p>}
                    </FormGroup>
                </Col>
            </Row>
            <Row>
                <Col>
                    <div className="d-flex justify-content-end">
                        <Button
                            className="btn-lg px-4"
                            color="primary"
                            type="submit"
                        >
                            <i className="fas fa-save me-2"></i>
                            Salvar
                        </Button>
                    </div>
                </Col>
            </Row>
        </Form>
    )
}

export default FormUser;