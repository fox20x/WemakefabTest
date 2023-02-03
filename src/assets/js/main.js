function modal() {
  function open(modal_id) {
    if (!modal_id) return;

    const modal_block = document.querySelector(".modal#" + modal_id);
    if (!modal_block) return;

    if (!modal_block.classList.contains("open")) {
      modal_block.classList.add("open");
    }
  }

  function close(modal_id) {
    if (!modal_id) return;

    const modal_block = document.querySelector(".modal#" + modal_id);
    if (!modal_block) return;

    if (modal_block.classList.contains("open")) {
      modal_block.classList.remove("open");
    }
  }

  function listen(e) {
    const el_open = e.target.closest("[data-modal_id]");
    const el_close = e.target.closest(".modal__close");

    if (el_open) {
      const modal_id = el_open.dataset.modal_id;
      open(modal_id);
    }

    if (el_close) {
      const modal = el_close.closest(".modal");
      const modal_id = modal.id;
      close(modal_id);
    }
  }

  window.addEventListener("click", listen);

  return { open, close };
}

function inputSelect() {
  function listen(e) {
    const all_select_blocks = document.querySelectorAll(".select-wrapper");
    const el = e.target.closest(".select-wrapper");

    all_select_blocks.forEach((b) => {
      if (el && b.contains(el)) return;
      b.classList.remove("open");
    });

    if (!el) return;

    if (el.classList.contains("open")) {
      el.classList.remove("open");
    } else {
      el.classList.add("open");
    }
  }

  window.addEventListener("click", listen);
}

window.addEventListener("load", () => {
  modal();
  inputSelect();
});
