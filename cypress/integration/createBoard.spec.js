import CreateBoardPage, { createBoardPOM } from "../page_objects/createBoardPOM"
import { loginPage } from "../page_objects/loginPOM";

describe("create Board", () => {
    beforeEach('log into the application', () => {
        cy.visit('/login');
        loginPage.login('dijana.strbac@gmail.com', 'dijana123');
        cy.get('div[class="vs-c-my-organization__content"]').should('be.visible');
})
it('test create new board', () => {
    cy.intercept({
        method: 'POST',
        url: 'https://cypress.vivifyscrum-stage.com/import-board'
    }).as('boardCreation');

    cy.visit('/my-boards');
    
    createBoardPage.createBoard
    
    cy.wait('@boardCreation').then((interception) => {
        console.log('ID', interception.response.body.id);
        expect(interception.response.statusCode).eq(201);
       ownerId = interception.response.body.id;

        cy.visit('/import-board/${ownerId}');
    })
})
})


