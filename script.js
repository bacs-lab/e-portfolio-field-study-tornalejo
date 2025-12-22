function toggleMenu() {
  const nav = document.getElementById('nav-container');
  nav.classList.toggle('active');
}
function toggleImage(wrapper) {
  const img = wrapper.querySelector('img');
  const currentSrc = img.getAttribute('src');
  const altSrc = img.getAttribute('data-alt');
  img.setAttribute('src', altSrc);
  img.setAttribute('data-alt', currentSrc);
}


function toggleMenu() {
  const nav = document.getElementById('nav-container');
  const icon = document.getElementById('dropdown-icon');
  nav.classList.toggle('active');
  icon.classList.toggle('rotated');
}



function toggleMenu() {
  const nav = document.getElementById("nav-container");
  nav.classList.toggle("active");
}

function openModal(elem, pdfPath = null) {
  const modal = document.getElementById("imageModal");
  const modalImg = document.getElementById("modalImg");
  const pdfViewer = document.getElementById("pdfViewer");

  modal.style.display = "flex";

  if (pdfPath) {
    pdfViewer.style.display = "block";
    modalImg.style.display = "none";
    pdfViewer.src = pdfPath;
  } else {
    pdfViewer.style.display = "none";
    modalImg.style.display = "block";
    modalImg.src = elem.src;
  }
}

function closeModal() {
  const modal = document.getElementById("imageModal");
  const modalImg = document.getElementById("modalImg");
  const pdfViewer = document.getElementById("pdfViewer");

  modal.style.display = "none";
  modalImg.src = "";
  pdfViewer.src = "";
}








// Clone items for infinite illusion
function cloneCarouselItems() {
  const container = document.getElementById("carouselTrack");
  const items = Array.from(container.children);
  items.forEach(item => {
    const clone = item.cloneNode(true);
    container.appendChild(clone);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  cloneCarouselItems();
});


const track = document.getElementById("carouselTrack");
const next = document.getElementById("next");
const prev = document.getElementById("prev");

let position = 0;
const itemWidth = 220; // width + margin
const totalItems = document.querySelectorAll(".carousel-item").length;

// Clone first few items to make infinite scroll illusion
const cloneItems = () => {
  for (let i = 0; i < totalItems; i++) {
    const clone = track.children[i].cloneNode(true);
    track.appendChild(clone);
  }
};

cloneItems();

next.addEventListener("click", () => {
  position += itemWidth;
  track.style.transform = `translateX(-${position}px)`;

  if (position >= itemWidth * totalItems) {
    setTimeout(() => {
      position = 0;
      track.style.transition = "none";
      track.style.transform = `translateX(0px)`;
      void track.offsetWidth; // force reflow
      track.style.transition = "transform 0.5s ease-in-out";
    }, 500);
  }
});

prev.addEventListener("click", () => {
  if (position <= 0) {
    position = itemWidth * totalItems;
    track.style.transition = "none";
    track.style.transform = `translateX(-${position}px)`;
    void track.offsetWidth;
    track.style.transition = "transform 0.5s ease-in-out";
  }

  position -= itemWidth;
  track.style.transform = `translateX(-${position}px)`;
});

