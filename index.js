import axios from "axios";

const form = document.querySelector('form');
form.addEventListener('submit', async (event) => {
  // Prevent the form from submitting
  event.preventDefault();

  // Get the Ethereum address from the form input
  const myAddress = document.getElementById('userAddress').value;

  try {
    // Make a GET request to the Alchemy API to fetch the NFT data
    const apiKey = "eqVlGAkmbuEJsJ_9jR5c9RAsVA8yYRBy";
    const baseURL = `https://eth-mainnet.g.alchemy.com/nft/v2/${apiKey}/getNFTs/`;
    const ownerAddr = myAddress;

    var config = {
      method: 'get',
      url: `${baseURL}?owner=${ownerAddr}`
    };

    const response = await axios(config);
    const nfts = response.data;

    // Use the fetched NFT data to create HTML elements and append them to the page
    const nftContainer = document.getElementById('nft-container');
    nfts.forEach((nft) => {
      const { name, description, image_url } = nft;
      const nftElement = document.createElement('div');
      nftElement.innerHTML = `
        <h2>${name}</h2>
        <p>${description}</p>
        <img src="${image_url}" alt="${name}" />
      `;
      nftContainer.appendChild(nftElement);
    });
  } catch (error) {
    // If there was an error fetching the NFT data, display an error message
    const nftContainer = document.getElementById('nft-container')}})
