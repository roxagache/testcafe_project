import { Selector,t} from 'testcafe';

class RegistrationPage {
        url= 'http://automationpractice.com/index.php';
        email: Selector = Selector('#email_create');
        emailInput: Selector = Selector('#email_create');
        err_messages_top: Selector = Selector('div#center_column > div')
        err_try: Selector = Selector('ol > li:nth-of-type(2)');
        signIN_b: Selector = Selector('a').withText("Sign in");
        createAccount_b: Selector = Selector('span').withText("Create an account");
        registration_form: Selector = Selector('#account-creation_form');
        Mr_radio_b: Selector = Selector('#id_gender1');
        firstnameInput: Selector = Selector('#customer_firstname');
        lastnameInput: Selector = Selector('#customer_lastname');
        passwordInput: Selector = Selector('#passwd');
        days_dropD: Selector = Selector('#days');
        month_dropD: Selector = Selector('#months');
        year_dropD: Selector = Selector('#years');
        newsletter_checkb: Selector = Selector('#newsletter');
        offer_checkb: Selector = Selector('#optin');
        companyInput: Selector = Selector('#company');
        addressInput: Selector = Selector('#address1');
        cityInput: Selector = Selector('#city');
        state_dropD: Selector = Selector('#id_state');
        postcodeInput: Selector = Selector('#postcode');
        country_dropD: Selector = Selector('#id_country');
        additionalInfoInput: Selector = Selector('#other');
        phoneInput: Selector = Selector('#phone');
        phoneMobileInput: Selector = Selector('#phone_mobile');
        aliasInput: Selector = Selector('#alias');
        submitAccount_b: Selector = Selector('#submitAccount');
        logout_b: Selector = Selector('a.logout');
    
        async MrButtonCheck (t:TestController) {
                await t
                .expect(this.Mr_radio_b.visible).eql(true)
                .click(this.Mr_radio_b);
        }
        
        async EnterText(t:TestController,txt,htmlElem){
                await t
                .expect(htmlElem.visible).eql(true)
                .typeText(htmlElem,txt);
        }

        async SelFromDropD(t:TestController,txt, htmlElem){
                await t
                .expect(htmlElem.visible).eql(true)
                .click(htmlElem)
                .click(htmlElem.find('option').withText(txt));
        }
        async CheckBoxElem(t:TestController){
                await t
                .expect(this.newsletter_checkb.visible).eql(true)
                .click(this.newsletter_checkb)

        }
        async AddCompany(t:TestController){
                await t
                .expect(this.companyInput.visible).eql(true)
                .typeText(this.companyInput,"Company");
        }
        async AddCountry(t:TestController,text){
                await t
                .expect(this.country_dropD.visible).eql(true)
                .click(this.country_dropD.withText(text));
        }
        async AddPhoneHo(t){
                await t
                .expect(this.phoneInput.visible).eql(true)
                .typeText(this.phoneInput,"9876543210");
        }
        async AdditionalInform(t){
                await t
                .expect(this.additionalInfoInput.visible).eql(true)
                .typeText(this.additionalInfoInput,"Additional Info is added here");
        }
        async SubmitRegistration(t){
                await t
                .expect(this.submitAccount_b.visible).eql(true)
                .click(this.submitAccount_b)
        }
        async Logout(t){
                await t
                .expect(this.logout_b.visible).eql(true)
                .click(this.logout_b);
        }
}
export default RegistrationPage

