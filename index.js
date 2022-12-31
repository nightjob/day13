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

    axios(config).then(function (response) {
        var nftList = response.data.ownedNfts;
        console.log(nftList);
        let nftMasterList = [];
        for (let i = 0; i < nftList.length; i++) {
            console.log(response.data.ownedNfts[i].metadata.name);
            console.log(response.data.ownedNfts[i].metadata.image);
            nftMasterList[i] = response.data.ownedNfts[i].metadata.name;
        }

        console.log(nftMasterList);
        document.getElementById("nft-list").innerHTML = nftMasterList;
        console.log(response.data.ownedNfts[0].metadata.name);
        document.getElementById("nft-name").innerHTML = response.data.ownedNfts[0].metadata.name;
        console.log(response.data.ownedNfts[0].metadata.image);
        document.getElementById("nft-image").src = response.data.ownedNfts[0].metadata.image;

        // console.log(response.data.ownedNfts[1].metadata.name);
        // document.getElementById("NFTname2").innerHTML = response.data.ownedNfts[1].metadata.name;
        // console.log(response.data.ownedNfts[1].metadata.image);
        // document.getElementById("NFTimage2").src = response.data.ownedNfts[1].metadata.image;

    })
})