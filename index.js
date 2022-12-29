import axios from "axios";

console.log(axios);

const submitButton = document.getElementById("submit-input");

submitButton.addEventListener("click", function() {
const addressinput = document.getElementById("address-input");
console.log(addressinput.value);

const apiKey = "eqVlGAkmbuEJsJ_9jR5c9RAsVA8yYRBy";
const baseURL = `https://eth-mainnet.g.alchemy.com/nft/v2/${apiKey}/getNFTs/`;
const ownerAddr = addressinput.value;

var config = {
    method: 'get',
    url: `${baseURL}?owner=${ownerAddr}`
};

axios(config).then(function(response) {
    console.log(response.data);
    const REPLACEWITHNAMEOFNFT = response.data.ownedNfts[NUMBEROFNFT].metadata.name;
for(let i=0; i < response.data.ownedNfts.length;i++) {
    const nft = response.dta.ownedNfts[i];
    // create a NEW html elemnt, insert it into the page, in the "all-nfts" div
    // const myelement = document.createElement("img")
    // img.src = nft.media.image;
}
})
})