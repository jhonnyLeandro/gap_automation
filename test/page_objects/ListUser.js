class ListUser {

    get createEmployee () { return $('a[href="/employees/new"]')}
    get rowUser(){ return $(`//td[text()="${process.env.TEST_LEADER}"]/..`)}
    get userName(){ return $(`//td[text()="${process.env.TEST_LEADER}"]/../td[1]`) }
    get userLastName(){ return $(`//td[text()="${process.env.TEST_LEADER}"]/../td[2]`) }
    get userIdentification() { return $(`//td[text()="${process.env.TEST_LEADER}"]/../td[3]`)}
    get dateStartedWorking() { return $(`//td[text()="${process.env.TEST_LEADER}"]/../td[5]`)}
    get deleteUserLink() { return $(`//td[ text() = "${process.env.TEST_LEADER}"]/../td[9]/a`)}
    
    clickCreateEmployee() {
        this.createEmployee.click ();
    }

    waitForRowUserDisapear () {
        this.rowUser.waitForDisplayed({reverse:true});
    }

    isRowUserVisible () {
        return this.rowUser.isDisplayed ();
    }

    getTextUserName(){
        return this.userName.getText ();
    }

    getTextLastName() {
        return this.userLastName.getText ();
    }

    getTextIdentification () {
        return this.userIdentification.getText ();
    }

    getTextDate () {
        return this.dateStartedWorking.getText ();
    }

    deleteUser(){
        this.deleteUserLink.waitUntil(function(){
            return this.isDisplayed ();
        });
        this.deleteUserLink.click ();
        browser.acceptAlert();

    }
}

export default new ListUser ();