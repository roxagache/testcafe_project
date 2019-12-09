Feature: Registration tests

    As new user I want to successfully create a new account so that I can buy things
    @complete
    Scenario Outline: Registration of a new user - mandatory fields
        Given I access the homepage of the application
        When I click on "Sign in" button
        Then I check that I on Authentication Page
        When I enter <email> in the email address
        Then I click on Create an account button
		Then I check that registration form is displayed
        Then I enter <firstname1> as firstname
        Then I enter <lastname1> as lastname
        Then I enter <password1> as password
        Then I enter "5" the day of Birth 
        Then I enter "February" the month of Birth 
        Then I enter "2003" the year of Birth 
        Then I enter "Street Saturn" as address to address field
        Then I enter "City" as city
        Then I enter "Iowa" as state
        Then I enter "12345" as zip code
        Then I enter "United States" as country 
        Then I enter the mobile phone "123456789"
        Then I assign "my_address" as my future reference address 
        When I click on Register button
        Then I see the "registration complete" message     
        Then I logout from the account

    Examples:
    |email              | firstname1    | lastname1     | password1 |
    |email95@yahoo.com  | test testD    | LastN         | testpassw1|
   
    Scenario Outline: Registration of a new user - all fields
        Given I access the homepage of the application
        When I click on "Sign in" button
        Then I check that I on Authentication Page
        When I enter <email> in the email address
        Then I click on Create an account button
		Then I check that registration form is displayed
        Then I check the radio button for "Mrs"
        Then I enter <firstname1> as firstname
        Then I enter <lastname1> as lastname
        Then I enter <password1> as password
        Then I enter "5" the day of Birth 
        Then I enter "February" the month of Birth 
        Then I enter "2003" the year of Birth 
        Then I sign up to the newsletter
        Then I subscribe to special offers
        Then I add the company
        Then I enter "Street Saturn" as address to address field
        Then I enter "City" as city
        Then I enter "Iowa" as state
        Then I enter "12345" as zip code
        Then I enter "United States" as country 
        Then I add some Additional Info
        Then I add the Home phone number
        Then I enter the mobile phone "123456789"
        Then I assign "my_address" as my future reference address 
        When I click on Register button
        Then I see the "registration complete" message     
        Then I logout from the account

    Examples:
    |email               | firstname1    | lastname1     | password1 |
    |email014@yahoo.com  | test testD    | LastN         | testpassw1|

    Scenario Outline: Registration of a new user - check error messages when FirstName and LastName are not correct
        Given I access the homepage of the application
        When I click on "Sign in" button
        Then I check that I on Authentication Page
        When I enter <email> in the email address
        Then I click on Create an account button
		Then I check that registration form is displayed
        Then I enter <firstname1> as firstname
        Then I enter <lastname1> as lastname
        Then I enter <password1> as password
        Then I enter "5" the day of Birth 
        Then I enter "February" the month of Birth 
        Then I enter "2003" the year of Birth 
        Then I enter "Street Saturn" as address to address field
        Then I enter "City" as city
        Then I enter "Iowa" as state
        Then I enter "12345" as zip code
        Then I enter "United States" as country 
        Then I enter the mobile phone "123456789"
        Then I assign "my_address" as my future reference address 
        When I click on Register button
        Then I see the message <error_message> displayed
    Examples:
    |email               | firstname1    | lastname1     | password1 |error_message|
    |email12@yahoo.com   | test test2    | LastN2        | testpassw2|There are 2 errors lastname is invalid.firstname is invalid.|

    Scenario Outline: Registration of a new user-error when no mandatory fields are filled-in
        Given I access the homepage of the application
        When I click on "Sign in" button
        Then I check that I on Authentication Page
        When I enter <email> in the email address
        Then I click on Create an account button
		Then I check that registration form is displayed
        When I click on Register button
        Then I see the message <error_message> displayed 
     Examples:
    |email               | error_message    |
    |email12@yahoo.com   | There are 8 errors You must register at least one phone number.lastname is required.firstname is required.passwd is required.address1 is required.city is required.The Zip/Postal code you've entered is invalid. It must follow this format: 00000This country requires you to choose a State.|

@smoke
    Scenario Outline: Registration of a new user-error when an already registered email address is entered
        Given I access the homepage of the application
        When I click on "Sign in" button
        Then I check that I on Authentication Page
        When I enter <email> in the email address
        Then I click on Create an account button
        Then I see the error message <error_message> displayed 
     Examples:
    |email               | error_message    |
    |email89@yahoo.com   | An account using this email address has already been registered. Please enter a valid password or request a new one. |


