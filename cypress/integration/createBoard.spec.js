
import { loginPage } from "../page_objects/loginPOM";
import { faker } from "@faker-js/faker"

describe("create Board", () => {
    let boardData = {
        name: faker.name.title()
    }
    beforeEach('log into the application', () => {
        cy.visit('/login');
        loginPage.login('dijana.strbac@gmail.com', 'dijana123');
        cy.get('div[class="vs-c-my-organization__content"]').should('be.visible');
        cy.get('li[class="vs-c-my-organization__board vs-c-my-organization__board-new"]').should('be.visible');
        
})
it('test create new board', () => {
    cy.get('li[class="vs-c-my-organization__board vs-c-my-organization__board-new"]').click()
    cy.get('input[class="el-input__inner"]').click()
    cy.get('input[name="name"]').type(boardData.name)
    cy.get('button[name="next_btn"]').click()
    cy.get('span[name="type_scrum"]').click()
    cy.get('button[name="next_btn"]').click()
    cy.get('button[name="next_btn"]').click()
    cy.get('button[name="next_btn"]').click()
    cy.get('button[name="next_btn"]').click()
})
})