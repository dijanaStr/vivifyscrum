export default class CreateBoardPage {
    get importBoard() {
        return cy.get('a[href="/import-board"]')
    }
    get choseOrganizationBtn() {
        return cy.get('i[xpath="1"]').click()
    }
    get importFromBtn() {
        return cy.get('i[css="2"]').click()
    }
    get importBoard() {
        return cy.get('div[class="vs-c-site-logo vs-u-cursor--pointer"]').click()
    }
}
export const createBoardPage = new CreateBoardPage();