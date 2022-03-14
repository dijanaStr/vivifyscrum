import { loginPage } from '../page_objects/loginPOM';

describe("login test POM", () => {

    before("visit app", () => {
        cy.visit("/login");
        cy.url().should("contains", "/login")

    });

    it("login with valid credentials", () => {
        cy.intercept({
            method: 'POST',
            url: 'https://cypress-api.vivifyscrum-stage.com/api/v2/login'
        }).as('loginRequest');
        loginPage.login('dijana.strbac@gmail.com', 'dijana123');
        cy.wait('@loginRequest').then((interceptObj) => {
            console.log(interceptObj);
        })
    })
})