// const card1 = document.getElementById('card-1');
const modalBG = document.getElementById('modal-bg');
const cards = document.querySelectorAll('.card');
const modals = document.querySelectorAll('.modal');

cards.forEach(card => {
  card.addEventListener('click', () => {
    const cardId = card.dataset.id;
    const modal = document.getElementById(`modal-${cardId}`);
    modal.classList.add('active');
    toggleModalBG();
  });
});

modals.forEach(modal => {
  const modalClose = modal.querySelector('#modal-close');
  modalClose.addEventListener('click', () => {
    modal.classList.remove('active');
    toggleModalBG();
  });
});

modalBG.addEventListener('click', () => {
  toggleModalBG();
  modals.forEach(modal => {
    modal.classList.remove('active');
  });
})

function toggleModalBG() {
  if(modalBG.classList.contains('active')) {
    modalBG.classList.remove('active');
    setTimeout(() => {
      modalBG.classList.add('deactive');
    }, 500);
  } else {
    modalBG.classList.remove('deactive');
    modalBG.classList.add('active');
  }
}