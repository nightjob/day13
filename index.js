import axios from "axios";

const submitButton = document.getElementById("submit-button");

submitButton.addEventListener("click", function () {
  document.getElementById("nft-images-container").innerHTML =
    "Fetching your rugs...";
  const myAddress = document.getElementById("user-address");
  console.log(myAddress.value);

  const apiKey = "eqVlGAkmbuEJsJ_9jR5c9RAsVA8yYRBy";
  const baseURL = `https://eth-mainnet.g.alchemy.com/nft/v2/${apiKey}/getNFTs/`;
  const ownerAddr = myAddress.value;
  console.log(myAddress.value);

  var config = {
    method: "get",
    url: `${baseURL}?owner=${ownerAddr}`,
  };

  axios(config).then(function (response) {
    var nftList = response.data.ownedNfts;
    console.log(nftList);
    let nftMasterList = [];
    // Create a "table" element
    const tableElement = document.createElement("div");
    tableElement.classList.add("nft-row");
    for (let i = 0; i < nftList.length; i++) {
      console.log(response.data.ownedNfts[i].metadata.name);
      console.log(response.data.ownedNfts[i].metadata.image);
      nftMasterList[i] = response.data.ownedNfts[i].metadata.name;

      // Create the column cell for the NFTs
      const columnCellElement = document.createElement("div");
      columnCellElement.classList.add("nft-column");

      // Create the area for the name inside the cell for the NFT
      const nameCellElement = document.createElement("h3");
      nameCellElement.innerHTML = response.data.ownedNfts[i].metadata.name;

      // Create the image cell element for the NFT
      const imageCellElement = document.createElement("div");
      imageCellElement.classList.add("place-holder");

      // Create the actual image element for the NFT (where it will rest)
      const imgElement = document.createElement("img");

      // Define where to get the image source from
      imgElement.src = response.data.ownedNfts[i].metadata.image;

      // Make the loading "Fetching your rugs..." go away when loaded
      if (document.readyState === "loading") {
        document.getElementById("nft-images-container").innerHTML =
          "Fetching your rugs...";
      } else {
        document.getElementById("nft-images-container").innerHTML = "";
      }

      //    ---- Append secion ----
      //
      // Here we point where to place things at on the page, and where to "append" them

      // Linking the IMG with the Cell it should be in
      imageCellElement.appendChild(imgElement);

      // Linking the Name Cell with the Column
      columnCellElement.appendChild(nameCellElement);

      // Linking the Image Cell with the Column
      columnCellElement.appendChild(imageCellElement);

      // Linking the Column with the "Table"
      tableElement.appendChild(columnCellElement);

      // Append the table element to the nft-images-container element
      document.getElementById("nft-images-container").appendChild(tableElement);
    }
  });
});
