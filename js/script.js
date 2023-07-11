const interestedBtn = document.querySelector('.interested-btn');
const modal = document.querySelector('.modal');
const shadow = document.querySelector('.modal__shadow');
const exitBtn = document.querySelector('.modal-btn__exit');
const childrenSpan = document.querySelector('.modal__counter-span');

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

childrenSpan.addEventListener('click', () => {
  alert('Укажите количество детей, которые будут с вами, возраст которых от 6 до 18лет. Дети до 6 лет размещаются бесплатно.')
})
