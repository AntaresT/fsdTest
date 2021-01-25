module.exports = {

   'Search test'(browser){
      browser
         .url('http://testapp.axreng.com:4567/')
         .waitForElementVisible('body')
         .assert.containsText('body', 'Gatsby Default Starter')
         .end();
   }

 }