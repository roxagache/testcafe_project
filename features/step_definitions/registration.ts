import RegistrationPage from '../support/pages/registration-page'
import {Selector,t} from 'testcafe'



const RegP = new RegistrationPage();

const {Given, When, Then} = require('cucumber');
const assert = require('assert');
const emailInput = Selector('#email_create');
const err_messages_top = Selector('div#center_column > div')
const err_try = Selector('ol > li:nth-of-type(2)');



Given ('I access the homepage of the application', async (t) =>{
     await t.navigateTo(RegP.url);
});

When ('I click on "Sign in" button', async (t) => {
    await t.click(RegP.signIN_b);
});

Then ('I check that I on Authentication Page' , async(t)=> {
    await t.expect(Selector('h1.page-heading').textContent).contains('Authentication');
    
});

When (/I enter (.+) in the email address/, async(t,[text])=> {
    await t.typeText(emailInput,text);
});

Then ('I click on Create an account button' , async(t)=> {
    await t.click(RegP.createAccount_b);
});

Then ('I check that registration form is displayed', async(t)=> {
    await t.expect(RegP.registration_form.visible).eql(true);
});

Then ('I check the radio button for "Mrs"',async(t) =>{
    RegP.MrButtonCheck(t);

});

Then (/I enter (.+) as firstname/, async(t,[firstname1]) => {
    RegP.EnterText(t,firstname1,RegP.firstnameInput);
});
        
Then (/I enter (.+) as lastname/, async(t,[lastname1]) => {
    RegP.EnterText(t,lastname1,RegP.lastnameInput);
});
        
        
Then (/I enter (.+) as password/, async(t,[passw]) => {
    RegP.EnterText(t,passw,RegP.passwordInput);
});
        
Then ('I enter {string} the day of Birth',async(t,[text]) => {
    RegP.SelFromDropD(t,text,RegP.days_dropD);

});

Then ('I enter {string} the month of Birth', async(t,[text]) => {
    RegP.SelFromDropD(t,text,RegP.month_dropD);
});
        
Then ('I enter {string} the year of Birth', async(t,[text]) => {
    RegP.SelFromDropD(t,text,RegP.year_dropD);
});

Then ('I sign up to the newsletter', async(t) =>{
    RegP.CheckBoxElem(t);
});

Then ('I subscribe to special offers', async(t) => {
    await t
    .expect(Selector('#optin').visible).eql(true)
    .click(Selector("#optin"))
});
        
Then ('I add the company', async(t) => {
    RegP.AddCompany(t);
});

Then ('I enter {string} as address to address field', async(t,[text]) => {
    RegP.EnterText(t,text,RegP.addressInput);
    await t.typeText(Selector('#address2'),'Address 2')
});
        
Then ('I enter {string} as city', async(t,[text]) => {
    RegP.EnterText(t,text,RegP.cityInput);
});
        
Then ('I enter {string} as state', async(t,[text])=>{
    RegP.SelFromDropD(t,text,RegP.state_dropD);
});
        
Then ('I enter {string} as zip code', async(t,[text]) =>{
    RegP.EnterText(t,text,RegP.postcodeInput);
});

Then ('I enter {string} as country', async(t,[text]) => {
    RegP.AddCountry(t,text);
});
Then ('I add some Additional Info',async(t)=>{
    RegP.AdditionalInform(t);
});
Then ('I add the Home phone number', async(t) =>{
    RegP.AddPhoneHo(t);
});

Then ('I enter the mobile phone {string}',async(t,[text]) => {
    RegP.EnterText(t,text,RegP.phoneMobileInput);
});
        
Then ('I assign {string} as my future reference address', async(t,[text]) => {
    RegP.EnterText(t,text,RegP.aliasInput);;
}); 
  
When ('I click on Register button', async(t) => {
    RegP.SubmitRegistration(t);
});

Then ('I see the "registration complete" message', async(t) => {
    await t
    .expect(Selector('h1.page-heading').textContent).contains('My account')
    .expect(Selector('p.info-account').textContent).contains('Welcome to your account.');
}); 

Then (/I see the message (.+) displayed/, async(t,[text])=>{
    await t.expect(Selector(err_messages_top).visible).eql(true);
    const tui = await t.eval(()=> document.getElementsByClassName('alert alert-danger')[0].textContent.replace(/\n/g,'').trim().replace ('\t',' ' ).replace( /\t/g, ''));
    await t.expect(tui).eql(text);
});

Then ('I logout from the account', async(t)=>{
    RegP.Logout(t);
});

Then (/I see the error message (.+) displayed/, async(t,[message]) =>{
    await t
    .expect(Selector('#create_account_error').visible).eql(true)
    .expect(Selector('#create_account_error').textContent).contains(message);
})
