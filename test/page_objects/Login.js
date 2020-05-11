class Login {

    get emailInput(){ return $('#user_email')}
    get passwordInput(){ return $('#user_password')}
    get signInButton() {return $('.submit')}

    open (){
        browser.url ('https://vacations-management.herokuapp.com/users/sign_in')
    }

    logIn(){
        
        this.emailInput.waitUntil (function () {
            return this.isDisplayed ();
        });
        this.emailInput.setValue(process.env.TEST_USER);
        this.passwordInput.setValue(process.env.TEST_PASSWORD);
        this.signInButton.click ();
    }

}

export default new Login ()