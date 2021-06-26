const openModal = document.querySelectorAll('.open-btn');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const closeModal = document.querySelector('.close-modal');
const alertWindow = document.querySelector('.query');
const openFn = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeFn = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (i = 0; i < openModal.length; i++) {
  openModal[i].addEventListener('click', openFn);
}

closeModal.addEventListener('click', closeFn);
overlay.addEventListener('click', closeFn);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    closeFn();
  }
});

alertWindow.addEventListener('click', function () {
  alert('Submitted !');
});
