function loadRugsText() {
  if (document.readyState === "loading") {
    document.getElementById("nft-images-container").innerHTML =
      "Fetching your rugs...";
  } else {
    document.getElementById("nft-images-container").innerHTML = "";
  }
}
module.exports = loadRugsText;
