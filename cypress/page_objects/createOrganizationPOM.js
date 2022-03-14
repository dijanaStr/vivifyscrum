export default class CreateOrganizationPage {
   
   
    get addNewOrganization() {
        return cy.get('div[class="vs-c-my-organization vs-c-my-organization--add-new not-sortable"]').click({ force: true })
    }
    get organizationName() {
        return cy.get('input[name="name"]')
    }
    get nextBtn() {
        return cy.get('button[name="next_btn"]')
    }
    get createBtn() {
        return cy.get('button[name="next_btn"]')
    }
    createOrganization(organizationName) {
        this.addNewOrganization
        cy.get('input').type(' ')
        this.organizationName.type(organizationName);
        this.nextBtn.click()
        this.createBtn.click()
    }
}
export const createOrganizationPage = new CreateOrganizationPage();