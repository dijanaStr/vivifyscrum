import { createOrganizationPage } from "../page_objects/createOrganizationPOM";
import { loginPage } from "../page_objects/loginPOM";
import { faker } from "@faker-js/faker"

describe("createOrganization test", () => {
   let ownerId;
    let organizationData = {
        name: faker.name.title()
    }
    beforeEach('log into the application', () => {
        cy.visit('/login');
        loginPage.login('dijana.strbac@gmail.com', 'dijana123');
        cy.get('div[class="vs-c-my-organization__content"]').should('be.visible');
    })


    it('test create new organization', () => {
        cy.intercept({
            method: 'POST',
            url: 'https://cypress-api.vivifyscrum-stage.com/api/v2/organizations'
        }).as('organizationsCreation');

        cy.visit('/my-organizations');
        
        createOrganizationPage.createOrganization(organizationData.name);
       
        cy.wait('@organizationCreation').then((interception) => {
            console.log('ID', interception.response.body.id);
            expect(interception.response.statusCode).eq(201);
           ownerId = interception.response.body.id;

            cy.visit('/organizations/${ownerId}');
        })
    })
})