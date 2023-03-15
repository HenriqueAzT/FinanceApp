const form = document.querySelector('.form');
const balanceValue = document.querySelector('.balance-value');
const depositButton = document.querySelector('#btndeposit');
const withdrawButton = document.querySelector('#btnwithdraw');
const regex = /[\d.]+/g;

const updateBalance = (operation) => {
  balanceValue.innerHTML = `<p>R$ ${Number(operation).toFixed(2)}</p>`;
};

const currentBalance = Number(balanceValue.textContent.match(regex).join(''));

depositButton.addEventListener('click', event => {
  event.preventDefault();

  const inputValue = document.querySelector('#inputValue').value.trim();
  const currentBalance = 
    Number(balanceValue.textContent.match(regex).join(''));
  const sum = currentBalance + Number(inputValue);

  updateBalance(sum);

  form.reset();
});

withdrawButton.addEventListener('click', event => {
  event.preventDefault();

  const inputValue = document.querySelector('#inputValue').value.trim();
  const currentBalance = 
    Number(balanceValue.textContent.match(regex).join(''));
  const diff = currentBalance - Number(inputValue);

  if (diff < 0) {
    alert('Saldo insuficiente');
  } else {
    updateBalance(diff);
  }

  form.reset();
});
