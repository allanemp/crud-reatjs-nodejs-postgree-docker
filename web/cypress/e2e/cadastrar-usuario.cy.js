
describe('Cadastrar Usuário', () => {
    it('Deve cadastrar um usuário com sucesso', () => {
        //criar email aleatorio
        const email = Math.random().toString(36).substring(2, 15) + '@example.com';
        const name = Math.random().toString(36).substring(2, 15);

        cy.visit('http://localhost:3000/add-user');
        cy.get('input[name="name"]').type(name);
        cy.get('input[name="email"]').type(email);
        cy.get('button[type="submit"]').click();
        cy.contains('sucesso').should('be.visible');
    });
});

describe('Editar Usuário', () => {
    it('Deve editar um usuário com sucesso', () => {
        const email = Math.random().toString(36).substring(2, 15) + '@example.com';
        const name = Math.random().toString(36).substring(2, 15);

        cy.visit('http://localhost:3000/manage-users');
        cy.get('button[name="editar"]').first().click();
        cy.get('input[name="name"]').clear().type(name);
        cy.get('input[name="email"]').clear().type(email);
        cy.get('button[type="submit"]').click();
        cy.contains('sucesso').should('be.visible');
    });
});

describe('Deletar Usuário', () => {
    it('Deve deletar um usuário com sucesso', () => {
        cy.visit('http://localhost:3000/manage-users');
        cy.get('button[name="excluir"]').first().click();
        cy.contains('Tem certeza que deseja deletar este usuário?').should('be.visible');
        cy.get('button[name="delete"]').click();
        cy.contains('sucesso').should('be.visible');
    });
});