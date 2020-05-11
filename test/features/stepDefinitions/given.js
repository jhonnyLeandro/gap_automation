import { Given } from 'cucumber';
import loginPage from '../../page_objects/Login';

Given(/^I am in vacations management app$/, () => {
    loginPage.open ();
});