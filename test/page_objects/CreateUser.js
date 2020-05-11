class CreateUser {

    get firstNameInput () { return $('#employee_first_name')}
    get lastNameInput () { return $('#employee_last_name')}
    get emailInput () { return $('#employee_email')}
    get identificationInput () { return $('#employee_identification')}
    get leaderNameInput () { return $('#employee_leader_name')}
    get yearSelect () { return $('#employee_start_working_on_1i')}
    get monthSelect () {return $('#employee_start_working_on_2i')}
    get daySelect () { return $('#employee_start_working_on_3i')}
    get createEmployeeButton () { return $('input[type="submit"]')}

    get employeeSuccessfullyCreated () { return $('#notice')}

    createUser(firstName, lastName, email, identification, year, month, day){
        this.firstNameInput.waitUntil (function () {
            return this.isDisplayed ();
        });
        this.firstNameInput.setValue(firstName);
        this.lastNameInput.setValue (lastName);
        this.emailInput.setValue (email);
        this.identificationInput.setValue(identification);
        this.leaderNameInput.setValue (process.env.TEST_LEADER);
        this.yearSelect.selectByAttribute('value', year);
        this.monthSelect.selectByAttribute('value',month);
        this.daySelect.selectByAttribute ('value', day);
        this.createEmployeeButton.click ();
    }

    isEmployeeCreated() {
        return this.employeeSuccessfullyCreated.waitUntil (function(){
            return this.isDisplayed ();
        });
    }
}

export default new CreateUser ();