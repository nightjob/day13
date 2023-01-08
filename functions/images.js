function parseUrlImage(urlImage) {
  if (urlImage && urlImage.startsWith("ipfs://ipfs")) {
    return "https://ipfs.io/ipfs/" + urlImage.slice(11);
  } else if (urlImage && urlImage.startsWith("ipfs://")) {
    return "https://ipfs.io/ipfs/" + urlImage.slice(6);
  } else {
    return urlImage;
  }
}

module.exports = parseUrlImage;
