(() => {
    const refs = {
      openModalBtn: document.querySelector(".open-button"),
      closeModalBtn: document.querySelector(".close-button"),
      modal: document.querySelector("#modal"),
    };
  
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle("is-hidden");
    }
  })();
  
  