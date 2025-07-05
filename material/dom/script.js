const card = document.getElementById('cartao');
const bio = document.getElementById('bio');
bio.className = 'corpo'
card.style.backgroundColor = '#292929';
card.style.color = 'white';
bio.style.fontStyle = 'italic';
const par = document.createElement("par");
par.classList.add('corpo');
par.textContent = "teste";
card.appendChild(par)