const button = document.querySelector('.button-filter');
const popover = document.querySelector('.filter-popover');
const inputs = popover.querySelectorAll('input, select'); 
const filterBtn = popover.querySelector('.button-apply-filter');


button.addEventListener('click', (e) => {
  e.stopPropagation();
  popover.classList.toggle('show');
});

popover.addEventListener('click', (e) => {
  e.stopPropagation();
});

document.addEventListener('click', () => {
  popover.classList.remove('show');
});

filterBtn.addEventListener('click',() => {
  popover.classList.remove('show');
});

function checkInputs() {
  const allFilled = Array.from(inputs).every(input => input.value.trim() !== '');
  filterBtn.style.backgroundColor = allFilled ? 'green' : '#333';
}

inputs.forEach(input => {
  input.addEventListener('input', checkInputs);
});