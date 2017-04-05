
const Shopify = require('./shopify-api-node');

const shopify = new Shopify({
  shopName: 'alshopping',
  apiKey: '1d27b7ede1453ec10bfa360eab134478',
  password: 'ef0a6f9c267ff5498d1db4aae742273d'
});


lastUpdated = {
  created_at_min : '01/01/2017 4:52:48 PM',
  timezone : 'GMT-11:00'
}

function toTimeZone(time, zone) {
    return  new Date(time + ' ' +  zone).toISOString();
}

function getTimeZone() {
    var resultEvent = {};
    resultEvent.Result = {}
    resultEvent.Result.Success = false;
    shopify.shop.get({ })
    .then(function(shop) {
        resultEvent.TimeZone  = shop.timezone;
        resultEvent.Result.Success = true;
        return resultEvent;
    })
    .catch(function(err) {
        resultEvent.Result.Success = false;
        resultEvent.Result.Error = err;
        return resultEvent;
    });
}

function getOrders(lastUpdated) {
    var resultEvent = {};
    resultEvent.Result = {}
    resultEvent.Result.Success = false;
    var date = toTimeZone(lastUpdated.created_at_min,lastUpdated.timezone);
    shopify.order.list({ created_at_min: date})
    .then(function(orders) {
        resultEvent.Orders  = orders;
        resultEvent.Result.Success = true;
        console.log(resultEvent);
        return resultEvent;
    })
    .catch(function(err) {
        resultEvent.Result.Success = false;
        resultEvent.Result.Error = err;
        return resultEvent;
    });
}

function getEvents(lastUpdated) {
     var date = toTimeZone(lastUpdated.created_at_min,lastUpdated.timezone);
    shopify.event.list({ created_at_min: date})
    .then(function(events) {
        return events;
    })
    .catch(function(err) {
        //Call Retry
        console.log(err);
    });
}

function getArticles(lastUpdated) {
    var date = toTimeZone(lastUpdated.created_at_min,lastUpdated.timezone);
    var articleList = [];
    shopify.blog.list({ created_at_min: date})
    .then(function(blogs) {
        for(i=0; i<blogs.length;i++){
         shopify.article.list(blogs[i].id,{ created_at_min: date})
              .then(function(articles) {
                  articleList.push(articles);
                  //console.log(articles);
                  return articleList;
              })
              .catch(function(err) {
                  //Call Retry
                  console.log(err);
              });
        }
    })
    .catch(function(err) {
        //Call Retry
        console.log(err);
    });
}

function getCustomCollections(lastUpdated) {
     var date = toTimeZone(lastUpdated.created_at_min,lastUpdated.timezone);
    shopify.customCollection.list({ created_at_min: date})
    .then(function(customCollections) {
        return customCollections;
    })
    .catch(function(err) {
        //Call Retry
        console.log(err);
    });
}

function getComments(lastUpdated) {
    var date = toTimeZone(lastUpdated.created_at_min,lastUpdated.timezone);
    shopify.comment.list({ created_at_min: date})
    .then(function(comments) {
        return comments;
    })
    .catch(function(err) {
        //Call Retry
        console.log(err);
    });
}

function getProducts(lastUpdated) {
    var date = toTimeZone(lastUpdated.created_at_min,lastUpdated.timezone);
    shopify.product.list({ created_at_min: date})
    .then(function(products) {
        return products;
    })
    .catch(function(err) {
        //Call Retry
        console.log(err);
    });
}

function getCustomers(lastUpdated) {
    var date = toTimeZone(lastUpdated.created_at_min,lastUpdated.timezone);
    shopify.customer.list({ created_at_min: date})
    .then(function(customers) {
        return customers;
    })
    .catch(function(err) {
        //Call Retry
        console.log(err);
    });
}

function getCustomerAddress(lastUpdated) {
  var date = toTimeZone(lastUpdated.created_at_min,lastUpdated.timezone);
  var addresList = [];
  shopify.customer.list( '5161635337',{created_at_min: date})
    .then(function(customers) {
          for(i=0; i<customers.length;i++){
           shopify.customerAddress.list( customers[i].id,{created_at_min: date})
            .then(function(customerAddresss) {
                addresList.push(customerAddresss);
                //console.log(customerAddresss);
                return addresList;
            })
          }
    })
    .catch(function(err) {
        //Call Retry
        console.log(err);
    });
}

function getTransactions(lastUpdated) {
    var date = toTimeZone(lastUpdated.created_at_min,lastUpdated.timezone);
    shopify.transaction.list({ created_at_min: date})
    .then(function(transactions) {
        return transactions;
    })
    .catch(function(err) {
        //Call Retry
        console.log(err);
    });
}


getOrders(lastUpdated);