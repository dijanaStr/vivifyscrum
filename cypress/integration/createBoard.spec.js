import { createBoardPage } from "../page_objects/createBoardPOM";
import { loginPage } from "../page_objects/loginPOM";
import { faker } from "@faker-js/faker"

describe("create board", () => {
    let ownerId;
    let boardData = {
        name: faker.name.title()
    }
    beforeEach('log into the application', () => {
        cy.visit('/login');
        loginPage.login(Cypress.env('testUserEmail'), Cypress.env('testUserPass'));
        cy.get('div[class="vs-c-my-organization__content"]').should('be.visible');
        cy.wait(1000);
        cy.get('li[class="vs-c-my-organization__board vs-c-my-organization__board-new"]').should('be.visible');
       
    })

    it('test create new organization', () => {
        cy.intercept({
            method: 'POST',
            url: 'https://cypress-api.vivifyscrum-stage.com/api/v2/boards '
        }).as('boardsCreation');

        cy.visit('/boards');
        
        createBoardPage.createBoard(boardData.name);
       cy.get('div[class="vs-c-task-card__author"]').should('be.visible')
        cy.wait('@boardsCreation').then((interception) => {
            console.log('ID', interception.response.body.id);
            expect(interception.response.statusCode).eq(201);
           ownerId = interception.response.body.id;

            cy.visit('/boards/${ownerId}');
        })
    })
})