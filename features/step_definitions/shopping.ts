import ShoppingPage from '../support/pages/shopping-page'
import { Selector,t} from 'testcafe';

const {Given, When, Then} = require('cucumber');
const assert = require('assert');

const ShopP = new ShoppingPage()

Then ('I search for {string} product', async(t,[text])=>{
    ShopP.SearchF(t,text);
});

Then  ('I add to cart the first dress from the list',async(t) =>{
    ShopP.AddFirstDress(t);
});

When ('I click on "Continue Shopping" on pop-up',async(t)=>{
    ShopP.ContinueShopping(t)
});

When ('I add to cart the second dress', async(t)=>{
    ShopP.AddSecondDress(t);
});

Then ('I click in the page on "Proceed to checkout" button', async(t)=>{
    ShopP.ProceedCheckout(t);
});

Then ('I change the quantity of the second dress', async(t)=> {
   ShopP.QuantityChangendDress(t);
});

Then ('I delete the first dress',async(t)=>{
    ShopP.DeleteFirstDress(t);
});

Then ('I click on button "Proceed to checkout" in the shopping cart', async(t)=> {
    ShopP.ProceedCheckoutShopCart(t);
});
Then (/I login with an existing user account: (.+)/, async(t,[text])=>{
    ShopP.LoginExistingUser(t,text);
});
Then ('I check that I on Address page step',async(t)=>{
    await t.expect(Selector('#id_address_delivery').visible).eql(true);
});