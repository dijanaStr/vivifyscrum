export default class LoginPage {

    get email() {
        return cy.get('input[type="email"]');
    }

    get password() {
        return cy.get('input[type="password"]');
    }

    get loginBtn() {
        return cy.get('button[class="vs-c-btn vs-c-btn--primary vs-c-btn--spaced vs-u-font-weight-bold vs-c-btn-auth--top-gap vs-c-btn--lg"]');
    }

    get logoutBtn() {
        return cy.get('button[class="vs-c-btn vs-c-btn--link vs-c-btn--danger"]');
    }

    login(email, password) {
        this.email.type(email);
        this.password.type(password);
        this.loginBtn.click();
    }
}

export const loginPage = new LoginPage();