Feature: Shopping cart

    As an user I want to:
    Go to homepage
    Search for black dress item
    Add the cart the first and the second dress
    Click on ‘​Proceed to checkout
    Change the quantity of second dress to ​‘2’
​    Remove the ​first dress from the cart
    Click on ‘Proceed to checkout
@smoke
Scenario: Shopping dresses without signing in
    Given I access the homepage of the application 
    Then I search for "black dress" product
    Then I add to cart the first dress from the list
    When I click on "Continue Shopping" on pop-up 
    When I add to cart the second dress
    Then I click in the page on "Proceed to checkout" button
    Then I change the quantity of the second dress 
    Then I delete the first dress
    Then I click on button "Proceed to checkout" in the shopping cart
    Then I check that I on Authentication Page

Scenario Outline: Shopping dresses with signing in
    Given I access the homepage of the application
    When I click on "Sign in" button
    Then I check that I on Authentication Page
    Then I login with an existing user account: <email>
    Then I search for "black dress" product
    Then I add to cart the first dress from the list
    When I click on "Continue Shopping" on pop-up 
    When I add to cart the second dress
    Then I click in the page on "Proceed to checkout" button
    Then I delete the first dress
    Then I click on button "Proceed to checkout" in the shopping cart
    Then I check that I on Address page step
Examples:
| email             |
| email87@yahoo.com |