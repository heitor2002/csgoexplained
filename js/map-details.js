const imgMapDetail = document.getElementById("image-maps-details")
const titleMapDetail = document.getElementById("map-name-detail")
const name = new URLSearchParams(window.location.search).get("name")
const img = new URLSearchParams(window.location.search).get("image")

titleMapDetail.innerHTML = name;
imgMapDetail.src = img;

