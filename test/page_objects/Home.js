class Home {
    
    get logo(){ return $('#logo')}
    get signedSuccessfullyBanner () { return $('.flash_notice')}
    get userInformation() { return $('#user_information') }

    get employeesInformation () { return $('a[href="/employees"]')}

    isLogoVisible () {
        this.logo.waitUntil (function () {
            return this.isDisplayed ();
        });
        return this.logo.isDisplayed ();
    }

    isSignedSuccessfullyBannerVisible() {
        this.signedSuccessfullyBanner.waitUntil (function () {
            return this.isDisplayed ();
        });
        return this.signedSuccessfullyBanner.isDisplayed ();
    }

    isUserInformationVisible () {
        this.userInformation.waitUntil (function () {
            return this.isDisplayed ();
        });
        return this.userInformation.isDisplayed ();
    }

    clickEmployeesInformation(){
        this.employeesInformation.click ();
    }

}

export default new Home ();