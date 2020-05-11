import { When } from 'cucumber';
import loginPage from '../../page_objects/Login';
import user from '../../page_objects/CreateUser';
import listPage from '../../page_objects/ListUser'

When(/^I log in to the app$/,()=> {
    loginPage.logIn ();
});

When(/^I create a user$/, (datable) => {
    let employee = datable.rowsHash ();
    listPage.clickCreateEmployee();
    user.createUser(employee['name'],employee['lastName'],employee['email'],employee['identification'],
    employee['year'],  employee['month'], employee['day']);

    browser.employee = employee;
});

When(/^I delete the created user$/, () => {
    listPage.deleteUser ();
})