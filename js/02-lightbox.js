import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector(".gallery");
const itemMarkup = createImgCard(galleryItems);

galleryContainer.insertAdjacentHTML("beforeend", itemMarkup);

// galleryContainer.addEventListener('click', onGalleryContainerClick);

function createImgCard(img) {
  return img.map(({ preview, original, description }) => {
      return `
    <div class="gallery__item">
        <a class="gallery__item" href="${original}">
            <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
            />
        </a>
    </div>
    `;
    })
    .join("");
}

let gallery = new SimpleLightbox(".gallery a");
gallery.on("show.simplelightbox", function (e) {
  gallery.options.captionsData = "alt";
  gallery.options.fadeSpeed = 250;
});
