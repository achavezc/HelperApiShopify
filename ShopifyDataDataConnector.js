
const Shopify = require('./shopify-api-node');



//module.exports = require('./lib/mixpanel');
//mixpanel = require('./lib/mixpanel');


const shopify = new Shopify({
  shopName: 'alshopping',
  apiKey: '1d27b7ede1453ec10bfa360eab134478',
  password: 'ef0a6f9c267ff5498d1db4aae742273d'
});

shopify.order.list({ limit: 5 })
  .then(orders => console.log(orders))
  .catch(err => console.error(err));