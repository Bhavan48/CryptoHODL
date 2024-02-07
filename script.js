var btc=document.getElementById("bitcoin");
var eth=document.getElementById("ethereum");
var dot=document.getElementById("polkadot");
var ada=document.getElementById("cardano");
var sol=document.getElementById("solana");
var link=document.getElementById("chainlink");

var settings={
    "async":true,
    "scrossDomain":true,
    "url": "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cpolkadot%2Ccardano%2Csolana%2Cchainlink&vs_currencies=usd",
    "method":"GET",
    "headers":{}
}
$.ajax(settings).done(function(response){
  btc.innerHTML=response.bitcoin.usd;
  eth.innerHTML=response.ethereum.usd;
  dot.innerHTML=response.polkadot.usd;
  ada.innerHTML=response.cardano.usd;
  sol.innerHTML=response.solana.usd;
  link.innerHTML=response.chainlink.usd;
});
