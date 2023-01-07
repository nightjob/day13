const { default: axios } = require("axios");

function createTableElement() {
  const tableElement = document.createElement("div");
  tableElement.classList.add("nft-row");
  for (let i = 0; i < nftList.length; i++) {
    console.log(response.data.ownedNfts[i].metadata.name);
    console.log(response.data.ownedNfts[i].metadata.image);
    nftMasterList[i] = response.data.ownedNfts[i].metadata.name;
  }

  return new Promise(function (resolve) {
    axios(config).then(function (response) {
      resolve(response);
    });
  });
}
module.exports = createTableElement;
