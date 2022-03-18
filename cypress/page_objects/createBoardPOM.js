export default class CreateBoardPage {

    get addNew() {
        return cy.get('div[class="vs-c-list__btn vs-c-list-btn--add-new el-tooltip"]')
    }
    get addBoardBtn() {
        return cy.get('li').contains('Add New')
    }
    get addBoardBtnClick() {
        return cy.get('div[class="el-tooltip__popper is-light el-tooltip-sidebar"]')
    }

    get boardTitle() {
        return cy.get('input[name="name"]')
    }
    get nextBtn() {
        return cy.get('button[name="next_btn"]')
    }

    get boardType() {
        return cy.get('span[name="type_scrum"]')
    }
  
    createBoard(boardTitle) {
        this.addNew.click()
        this.addBoardBtn.contains('Add New').click({force : true})
        this.addBoardBtnClick.click()
        cy.get('div[class="vs-c-modal vs-c-modal--starter vs-c-modal--create-board"]').should('be.visible')
        this.boardTitle.type(' ')
        this.boardTitle.type(boardTitle)
        this.nextBtn.click()
        this.boardType.click({force: true})
        this.nextBtn.click()
        this.nextBtn.click()
        this.nextBtn.click()
        this.nextBtn.click()
    }
    
}
export const createBoardPage = new CreateBoardPage();