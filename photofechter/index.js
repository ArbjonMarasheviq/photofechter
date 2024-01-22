const grayscaleToggle = document.getElementById("grayscaleToggle");
const fetchPhotosBtn = document.getElementById("fetchPhotosBtn");
const photoContainer = document.getElementById("photoContainer");
let page_number = 2;

grayscaleToggle.addEventListener("change", () => {
  if (grayscaleToggle.checked) {
    photoContainer.classList.add("grayscale");
  } else {
    photoContainer.classList.remove("grayscale");
  }
});

fetchPhotosBtn.addEventListener("click", () => {
  fetch(`https://picsum.photos/v2/list?page=${page_number}&limit=4`)
    .then((response) => response.json())
    .then((data) => {
      page_number += 1;
      photoContainer.innerHTML = "";
      data.forEach((photo) => {
        const img = document.createElement("img");
        img.src = photo.download_url;
        img.alt = `Image by ${photo.author}`;
        img.classList.add("vogel");
        photoContainer.appendChild(img);
      });
    })
    .catch((error) => console.log(error));
});
