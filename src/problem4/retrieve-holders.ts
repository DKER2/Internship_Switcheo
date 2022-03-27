//API Token: 58U6SH3CBTT26VZ3ID6WYNS6AMGRIF43WM
import * as https from 'https';
async function SWTHBalances(addresses:string[]){
    // Input: Array of Address
    // Output: a Map of Address to Number of SWTH Token
    let SWTHContractAddres:string = "0x250b211ee44459dad5cd3bca803dd6a7ecb5d46c";
    let balances = new Map<String, Number>();
    for(let i = 0; i < addresses.length; i++){
        let balance = await Balance(addresses[i], SWTHContractAddres);
        balance = Number(balance)/100000000;
        balance = commify(Number(balance));
        balances.set(addresses[i],Number(balance));
        console.log(addresses[i] + " " + balance);
    }
    return balances;
}
function Balance(address:string, contractAddress:string){
    //Get Data From BSCSCAN
    const promise = new Promise(function(resolve,reject){
        let data:string = '';
        const url = "https://api.bscscan.com/api?module=account&action=tokenbalance&" + "contractaddress=" + contractAddress + "&address=" + address + "&tag=latest&apikey=58U6SH3CBTT26VZ3ID6WYNS6AMGRIF43WM";
        https.get(url, res => {
            res.on('data', chunk => {
                data += chunk;
            });
            res.on('end', () => {
                let dataJsonobj = JSON.parse(data);
                let result:Number = dataJsonobj.result
                resolve(result);
            })
            }).on('error', err => {
                reject(err);
        })
    })
    return promise;
}
function commify(n:Number) {
    // Convert Number from default format got from API(123123123124) to standardized format(123,312,322,321.312312523)
    var parts = n.toString().split(".");
    const numberPart = parts[0];
    const decimalPart = parts[1];
    const thousands = /\B(?=(\d{3})+(?!\d))/g;
    return numberPart.replace(thousands, ",") + (decimalPart ? "." + decimalPart : "");
}
let addresses:string[] = ["0x123d475e13aa54a43a7421d94caa4459da021c77",
    "0x0020c5222a24e4a96b720c06b803fb8d34adc0af",
    "0xfe808b079187cc460f47374580f5fb47c82b87a5"]


SWTHBalances(addresses);
