import axios from "axios";

const loadRugsText = require("./functions/loadingrugs.js");

const parseUrlImage = require("./functions/images.js");

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

    const tableElement = document.createElement("div");
    tableElement.classList.add("nft-row");
    for (let i = 0; i < nftList.length; i++) {
      console.log(response.data.ownedNfts[i].metadata.name);
      console.log(response.data.ownedNfts[i].metadata.image);
      nftMasterList[i] = response.data.ownedNfts[i].metadata.name;

      const columnCellElement = document.createElement("div");
      columnCellElement.classList.add("nft-column");

      const nameCellElement = document.createElement("h3");
      nameCellElement.innerHTML = response.data.ownedNfts[i].metadata.name;

      const imageCellElement = document.createElement("div");
      imageCellElement.classList.add("place-holder");

      // modal stuff
      imageCellElement.addEventListener("click", function () {
        const modal = document.getElementById("modal");
        modal.classList.add("open");
      });

      const closeButton = document.querySelector(".close-button");

      closeButton.addEventListener("click", function () {
        const modal = document.getElementById("modal");
        modal.classList.remove("open");
      });
      //

      const imgElement = document.createElement("img");

      const urlImage = parseUrlImage(response.data.ownedNfts[i].metadata.image);

      const rugPics = [
        "images/rug2.png",
        "images/rug3.png",
        "images/rug4.jpg",
        "images/rug5.jpg",
        "images/rug6.jpg",
        "images/rug7.jpg",
        "images/rug8.jpg",
        "images/rug9.jpg",
        "images/rug10.jpg",
        "images/rug11.jpg",
      ];

      function getRandomImage() {
        const index = Math.floor(Math.random() * rugPics.length);
        return rugPics[index];
      }

      const rugTime = getRandomImage();

      imgElement.src = urlImage;

      imgElement.onerror = function () {
        imgElement.src = rugTime;
      };

      loadRugsText();

      imageCellElement.appendChild(imgElement);

      columnCellElement.appendChild(nameCellElement);

      columnCellElement.appendChild(imageCellElement);

      tableElement.appendChild(columnCellElement);

      document.getElementById("nft-images-container").appendChild(tableElement);
    }
  });
});
