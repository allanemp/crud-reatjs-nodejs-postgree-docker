/**
 * NavbarComponent
 * 
 * Componente de navegação principal da aplicação.
 * Responsável por exibir os links de navegação e o título da aplicação.
 */
import { Navbar, NavbarBrand, Nav, NavItem, Button } from 'reactstrap';
import { Link } from 'react-router-dom';

const NavbarComponent = () => {
    return (
        // Barra de navegação com fundo escuro e sombra suave
        <Navbar className="bg-dark mb-6 navbar-expand-lg shadow-sm">
            <div className="container">                
                {/* Links de navegação alinhados à direita */}
                <Nav className="ms-auto d-flex align-items-center m-2">
                    {/* Link para a página inicial */}
                    <NavItem className="mx-2">
                        <Link to="/" className="text-white text-decoration-none hover-effect">
                            <i className="fas fa-home me-1"></i>Home
                        </Link>
                    </NavItem>
                    {/* Link para gerenciamento de usuários */}
                    <NavItem className="mx-2">
                        <Link to="/manage-users" className="text-white text-decoration-none hover-effect">
                            <i className="fas fa-users me-1"></i>Gerenciar Usuários
                        </Link>
                    </NavItem>
                    {/* Link para adicionar novo usuário */}
                    <NavItem className="mx-2">
                        <Link to="/add-user" className="text-white text-decoration-none hover-effect">
                            <i className="fas fa-user-plus me-1"></i>Adicionar Usuário
                        </Link>
                    </NavItem>
                </Nav>
            </div>
        </Navbar>
    )
}

export default NavbarComponent;