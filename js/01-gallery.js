import { galleryItems } from "./gallery-items.js"

// Change code below this line

// Создание и рендер разметки по массиву данных galleryItems и предоставленному шаблону элемента галереи.

// Реализация делегирования на div.gallery и получение url большого изображения.

// Подключение скрипта и стилей библиотеки модального окна basicLightbox. Используй CDN сервис jsdelivr и добавь в проект ссылки на минифицированные (.min) файлы библиотеки.

// Открытие модального окна по клику на элементе галереи. Для этого ознакомься с документацией и примерами.

// Замена значения атрибута src элемента <img> в модальном окне перед открытием. Используй готовую разметку модального окна с изображением из примеров библиотеки basicLightbox.

console.log(galleryItems)

const galleryRef = document.querySelector(".gallery")

const listItem = galleryItems.map(({ preview, original, description }) => {
    return `<div class="gallery__item">
            <a class="gallery__link" href="large-image.jpg">
                <img
                    class="gallery__image"
                    src="${preview}"
                    data-source="${original}"
                    alt="${description}"
                />
            </a>
        </div>`
})

galleryRef.insertAdjacentHTML("afterbegin", listItem.join(" "))

galleryRef.addEventListener("click", (e) => {
    e.preventDefault()
    if (e.target.nodeName !== "IMG") {
        return
    }
    const instance = basicLightbox.create(
     /*html*/ `<img src="${e.target.getAttribute("data-source")}">`
      )

    instance.show(onEscClose)
    function onEscClose() {
        galleryRef.addEventListener("keydown", (e) => {
            if (e.key === "Escape") {
                instance.close()
            }
        })
    }
})
