const interestedBtn = document.querySelector('.interested-btn');
const modal = document.querySelector('.modal');
const shadow = document.querySelector('.modal__shadow');
const exitBtn = document.querySelector('.modal-btn__exit');

function showModal() {
  modal.classList.add('modal_show')
}

function closeModal() {
  modal.classList.remove('modal_show')
}

interestedBtn.addEventListener('click', () => {
  showModal()
})

shadow.addEventListener('click', () => {
  closeModal()
})

window.addEventListener('keyup', (event) => {
  if (event.code === 'Escape') {
    closeModal()
  }
})

exitBtn.addEventListener('click', () => {
  closeModal()
})
