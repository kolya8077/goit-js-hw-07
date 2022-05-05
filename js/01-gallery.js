import { galleryItems } from "../js/gallery-items.js";
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");
const galleryEl = createImgCard(galleryItems);

gallery.insertAdjacentHTML("beforeend", galleryEl);

gallery.addEventListener("click", onClickImgContent);

function createImgCard(img) {
  return img
    .map(({ preview, original, description }) => {
      return `
      <div class="gallery__item">
      <a class="gallery__link" href="${original}">
          <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}"  />
          </a>
          </div>
        `;
    })
    .join("");
}

function onClickImgContent(evt) {
  evt.preventDefault();
  if (evt.target.nodeName !== "IMG") {
    return;
  }

  const modalImg = evt.target.dataset.source;
  const instance = basicLightbox.create(
    ` <img src="${modalImg}" width="800" height="600">`,
    {
      onShow: (instance) => {
        window.addEventListener("keydown", onModalEsc);
      }
    }
  );
  instance.show();
  function onModalEsc(e) {
    if (e.key === "Escape") {
      instance.close();
    }
  }
}

