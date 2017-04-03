
const Shopify = require('./shopify-api-node');

const shopify = new Shopify({
  shopName: 'alshopping',
  apiKey: '1d27b7ede1453ec10bfa360eab134478',
  password: 'ef0a6f9c267ff5498d1db4aae742273d'
});


lastUpdated = {
  created_at_min : '2017-01-30',
  created_at_max : '2017-04-01'
}

function getOrders(lastUpdated) {
    shopify.order.list({ created_at_min: lastUpdated.created_at_min, created_at_max: lastUpdated.created_at_max})
    .then(function(orders) {
        //console.log(orders);
        return orders;
    })
    .catch(function(err) {
        //Call Retry
        console.log(err);
    });
}

function getEvents(lastUpdated) {
    shopify.event.list({ created_at_min: lastUpdated.created_at_min, created_at_max: lastUpdated.created_at_max})
    .then(function(events) {
        return events;
    })
    .catch(function(err) {
        //Call Retry
        console.log(err);
    });
}

function getArticles(lastUpdated) {
    shopify.article.list({ created_at_min: lastUpdated.created_at_min, created_at_max: lastUpdated.created_at_max})
    .then(function(articles) {
        console.log(articles);
        //return articles;
    })
    .catch(function(err) {
        //Call Retry
        console.log(err);
    });
}

function getCustomCollections(lastUpdated) {
    shopify.customCollection.list({ created_at_min: lastUpdated.created_at_min, created_at_max: lastUpdated.created_at_max})
    .then(function(customCollections) {
        return customCollections;
    })
    .catch(function(err) {
        //Call Retry
        console.log(err);
    });
}

function getComments(lastUpdated) {
    shopify.comment.list({ created_at_min: lastUpdated.created_at_min, created_at_max: lastUpdated.created_at_max})
    .then(function(comments) {
        return comments;
    })
    .catch(function(err) {
        //Call Retry
        console.log(err);
    });
}

function getProducts(lastUpdated) {
    shopify.product.list({ created_at_min: lastUpdated.created_at_min, created_at_max: lastUpdated.created_at_max})
    .then(function(products) {
        return products;
    })
    .catch(function(err) {
        //Call Retry
        console.log(err);
    });
}

function getCustomers(lastUpdated) {
    shopify.customer.list({ created_at_min: lastUpdated.created_at_min, created_at_max: lastUpdated.created_at_max})
    .then(function(customers) {
        return customers;
    })
    .catch(function(err) {
        //Call Retry
        console.log(err);
    });
}

function getCustomerAddress(lastUpdated) {
    shopify.customerAddress.list({ created_at_min: lastUpdated.created_at_min, created_at_max: lastUpdated.created_at_max})
    .then(function(customerAddresss) {
        console.log(customerAddresss);
        //return customerAddresss;
    })
    .catch(function(err) {
        //Call Retry
        console.log(err);
    });
}

function getTransactions(lastUpdated) {
    shopify.transaction.list({ created_at_min: lastUpdated.created_at_min, created_at_max: lastUpdated.created_at_max})
    .then(function(transactions) {
        return transactions;
    })
    .catch(function(err) {
        //Call Retry
        console.log(err);
    });
}

getArticles(lastUpdated);
//getCustomerAddress(lastUpdated)
