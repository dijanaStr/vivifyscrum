export default class CreateBoardPage {
    get addBoard() {
        return cy.get('li[class="vs-c-my-organization__board vs-c-my-organization__board-new"]')
    }
    get choseOrganizationBtn() {
        return cy.get('input[class="el-input__inner"]')
    }
    get choseOrganizationSelector() {
        return cy.get('li[class=["el-select-dropdown__item vs-c-select-dropdown__item vs-c-new-board-dropdown selected"]')
    }
    get choseSelector() {
        return cy.get('li[class="el-select-dropdown__item vs-c-select-dropdown__item vs-c-new-board-dropdown selected hover"]')
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
        this.addBoard
        this.choseOrganizationBtn
        this.choseOrganizationSelector.select('vivify')
        cy.get('input').type(' ')
        this.boardTitle.type(boardTitle)
        this.nextBtn.click()
    }
    
}
export const createBoardPage = new CreateBoardPage();