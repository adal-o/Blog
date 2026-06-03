document.addEventListener("DOMContentLoaded", () => {
  const overlay = document.getElementById("subscribe-overlay");
  const openBtn = document.getElementById("subscribe-open");
  const closeBtn = document.getElementById("subscribe-close");

  openBtn?.addEventListener("click", () => overlay.classList.add("active"));
  closeBtn?.addEventListener("click", () => overlay.classList.remove("active"));
  overlay?.addEventListener("click", e => {
    if (e.target === overlay) overlay.classList.remove("active");
  });
  document.addEventListener("keydown", e => {
    if (e.key === "Escape") overlay?.classList.remove("active");
  });

  const postContent = document.querySelector(".post-content");
  if (postContent) {
    const textCol = document.createElement("div");
    textCol.className = "post-text-col";
    const imageCol = document.createElement("div");
    imageCol.className = "post-image-col";

    Array.from(postContent.childNodes).forEach(node => {
      if (node.nodeName === "IMG") {
        imageCol.appendChild(node);
      } else {
        textCol.appendChild(node);
      }
    });

    postContent.appendChild(textCol);
    postContent.appendChild(imageCol);
  }

  const draggables = document.querySelectorAll(".draggable");
  let highestZIndex = 1;

  draggables.forEach(img => {
    img.draggable = false;

    img.style.top = Math.random() * 70 + 10 + "%";
    img.style.left = Math.random() * 70 + 10 + "%";

    let isDragging = false, offsetX, offsetY;

    img.addEventListener("mousedown", e => {
      e.preventDefault();
      isDragging = true;
      offsetX = e.clientX - img.offsetLeft;
      offsetY = e.clientY - img.offsetTop;
      highestZIndex++;
      img.style.zIndex = highestZIndex;
      img.style.cursor = "grabbing";
    });

    img.addEventListener("contextmenu", e => {
      if (isDragging) {
        e.preventDefault();
      }
    });

    img.addEventListener("dragstart", e => {
      e.preventDefault();
      return false;
    });

    window.addEventListener("mousemove", e => {
      if (!isDragging) return;
      e.preventDefault();
      img.style.left = e.clientX - offsetX + "px";
      img.style.top = e.clientY - offsetY + "px";
    });

    window.addEventListener("mouseup", () => {
      if (isDragging) {
        isDragging = false;
        img.style.cursor = "grab";
      }
    });

    window.addEventListener("mouseleave", () => {
      if (isDragging) {
        isDragging = false;
        img.style.cursor = "grab";
      }
    });

    img.addEventListener("touchstart", e => {
      e.preventDefault();
      const touch = e.touches[0];
      isDragging = true;
      offsetX = touch.clientX - img.offsetLeft;
      offsetY = touch.clientY - img.offsetTop;
      highestZIndex++;
      img.style.zIndex = highestZIndex;
    });

    window.addEventListener("touchmove", e => {
      if (!isDragging) return;
      e.preventDefault();
      const touch = e.touches[0];
      img.style.left = touch.clientX - offsetX + "px";
      img.style.top = touch.clientY - offsetY + "px";
    });

    window.addEventListener("touchend", e => {
      if (isDragging) {
        e.preventDefault();
        isDragging = false;
      }
    });

    window.addEventListener("touchcancel", () => {
      if (isDragging) {
        isDragging = false;
      }
    });
  });
});
