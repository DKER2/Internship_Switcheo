// your code here:
class ds{
    static getPrices(){
        const promise = new Promise(function(resolve,reject){
            
            
            //Get Data from EndPoint
            let data = '';
            const https = require('https');
            const url = "https://static.ngnrs.io/test/prices";
            https.get(url, res => {
                res.on('data', chunk => {
                    data += chunk;
                });
                res.on('end', () => {
                    data = JSON.parse(data);
                    // Data from server is stored in Json type
                    let prices = [];
                    for(let i=0; i<data.data.prices.length; i++){
                        // For each data point, create a new object of class {PricePoint} that have method mid() and quote()
                        let newPriceObject = new PricePoint(data.data.prices[i]);
                        prices.push(newPriceObject);
                    }
                    //On successful requesting data from server, return an array of object of class {PricePoint}
                    resolve(prices);
                })
                }).on('error', err => {
                    //Upon error, return error message
                    reject(err);
            })



        });
        return promise;
        
    }
}
class PricePoint{
    constructor({buy, sell, id, pair, timestamp}){
        this.buy = buy/100;
        this.sell = sell/100;
        this.id = id;
        this.pair = pair;
        this.timestamp = timestamp;
    }
    mid(){
        let sumOfBuySell= (this.buy+this.sell).toFixed(2);
        return (sumOfBuySell/2);
    }
    quote(){
        let fiatMoney = "";
        for(let i=0; i<3; i++){
            fiatMoney =  this.pair[this.pair.length-1-i] + fiatMoney;
        }
        return fiatMoney;
    }
}

ds.getPrices()
    .then(prices => {
        prices.forEach(price => {
            console.log(`Mid price for ${ price.pair } is ${ price.mid() } ${ price.quote() }.`);
        });
    }).catch(error => {
        console.error(error);
    });