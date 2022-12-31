import axios from "axios";

// button and text inputs
// naming the button then pointing it to the html id of the button
const submitButton = document.getElementById("submit-button");

// text field and how to use with button
// telling it to listen for a click and then do a function
submitButton.addEventListener("click", function() {
    const myAddress = document.getElementById("user-address");
    console.log(myAddress.value);

    // starting docs from alchemy
    // my apiKey
    // required URL
    // owner of the NFTs to display
    const apiKey = "eqVlGAkmbuEJsJ_9jR5c9RAsVA8yYRBy";
    const baseURL = `https://eth-mainnet.g.alchemy.com/nft/v2/${apiKey}/getNFTs/`;
    const ownerAddr = myAddress.value;
    console.log(myAddress.value)

    var config = {
        method: 'get',
        url: `${baseURL}?owner=${ownerAddr}`
    };

    axios(config).then(function(response) {
        console.log(response.data);
    })

})