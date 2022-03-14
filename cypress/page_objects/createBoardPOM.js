export default class CreateBoardPage {
    get importBoard() {S
        return cy.get('a[href="/import-board"]')
    }
}