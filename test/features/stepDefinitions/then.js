import { Then } from 'cucumber';
import homePage from '../../page_objects/Home';
import user from '../../page_objects/CreateUser';
import listUser from '../../page_objects/ListUser';

Then (/^I expect to see home page$/, () => {
    expect(homePage.isLogoVisible (), 'the logo is not visible').to.be.true;
    expect(homePage.isUserInformationVisible(), 'user information is not visible').to.be.true;
    expect(homePage.isSignedSuccessfullyBannerVisible(), 'banner is no t visible').to.be.true;
});

Then (/^I expect to see the user created$/, () => {
    expect (user.isEmployeeCreated ()).to.be.true;
    homePage.clickEmployeesInformation();
    expect(listUser.isRowUserVisible (), 'row is not visible').to.be.true;
    expect(browser.employee.name == listUser.getTextUserName(), 'user name is incorrect').to.be.true;
    expect(browser.employee.lastName == listUser.getTextLastName(), 'last name is incorrect').to.be.true;
    expect(browser.employee.identification == listUser.getTextIdentification (), 'identification is incorrect').to.be.true;
    let date = `0${browser.employee.month}/${browser.employee.day}/${browser.employee.year}`

    console.log (`${date} == ${listUser.getTextDate ()}`);
    expect(date == listUser.getTextDate (), 'date is incorrect').to.be.true;
});

Then (/^I expect to not see it$/, () => {
    listUser.waitForRowUserDisapear ();
    expect(!listUser.isRowUserVisible ()).to.be.true;
})