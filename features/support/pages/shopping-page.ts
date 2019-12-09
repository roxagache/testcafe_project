import { Selector, t} from 'testcafe';

const elementByXPath = Selector(xpath => {
    const iterator = document.evaluate(xpath, document, null, XPathResult.UNORDERED_NODE_ITERATOR_TYPE, null )
    const items = [];

    let item = iterator.iterateNext();

    while (item) {
        items.push(item);
        item = iterator.iterateNext();
    }

    return items;
});

class ShoppingPage{

 second_dress: Selector = Selector(elementByXPath('//ul[@class="product_list grid row"]/li[2]/div[@class="product-container"]'));
 second_dress_add_cart: Selector = Selector('li:nth-of-type(2) .right-block [rel] span');
 btn_proceed_to_checkout_in_search_page: Selector = Selector (elementByXPath("//div[@id = 'layer_cart']//span[contains(text() , 'Proceed to checkout')]"));
 btn_proceed_to_checkout_in_shopping_cart_page: Selector = Selector (elementByXPath("//p[@class = 'cart_navigation clearfix']//span[contains(text() , 'Proceed to checkout')]"));
 searchInput: Selector = Selector('#search_query_top');
 search_b: Selector = Selector('[name="submit_search"].btn.btn-default.button-search');
 image_st_dress: Selector = Selector('a.product_img_link');
 add_cart_st_dress: Selector = Selector('.button.ajax_add_to_cart_button.btn.btn-default[title="Add to cart"][data-id-product="5"]').find('span').withText('Add to cart');
 continueShopping_b: Selector = Selector('.continue.btn.btn-default.button.exclusive-medium[title="Continue shopping"]');
 change_quantity_ndDress: Selector = Selector('#cart_quantity_up_4_16_0_0').find('.icon-plus');
 delete_st_dress: Selector = Selector('[title="Delete"].cart_quantity_delete').find('.icon-trash');
 email_existing_user: Selector = Selector('#email');
 passw_existing_user: Selector = Selector('#passwd');
 submitLogin_b: Selector = Selector('#SubmitLogin');

 async SearchF(t,text){
    await t
    .expect(this.searchInput.visible).eql(true)
    .typeText(this.searchInput, text)
    .expect(this.search_b.visible).eql(true)
    .click(this.search_b);

    }
async AddFirstDress(t){
    await t
    .hover(this.image_st_dress)
    .click(this.add_cart_st_dress);
}
async ContinueShopping(t){
    await t
    .expect(this.continueShopping_b.visible).eql(true)
    .click(this.continueShopping_b.find('span').withText('Continue shopping'));

}
async AddSecondDress(t){
    await t
    .hover(this.second_dress)
    .expect((this.second_dress_add_cart).visible).eql(true)
    .hover(this.second_dress_add_cart)
    .click(this.second_dress_add_cart);
}
async ProceedCheckout(t){
    await t.click(this.btn_proceed_to_checkout_in_search_page);
    
}
async QuantityChangendDress(t){
    await t.click(this.change_quantity_ndDress);
}
async DeleteFirstDress(t){
    await t.click(this.delete_st_dress);
}
async ProceedCheckoutShopCart(t){
    await t.click(this.btn_proceed_to_checkout_in_shopping_cart_page);
}
async LoginExistingUser(t,text){
    await t
    .expect(this.email_existing_user.visible).eql(true)
    .typeText(this.email_existing_user, text)
    .expect(this.passw_existing_user.visible).eql(true)
    .typeText(this.passw_existing_user,'testpassw1')
    .click(this.submitLogin_b)
}
}

export default ShoppingPage

