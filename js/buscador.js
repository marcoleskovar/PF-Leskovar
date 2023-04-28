const listOpenBtn = document.querySelector('#listOpen');
const listCloseBtn = document.querySelector('#listClose');
const lupaOpenBtn = document.querySelector('#lupaOpen');
const lupaCloseBtn = document.querySelector('#lupaClose');
const listBtn = document.querySelector('#listButton');
const lupaBtn = document.querySelector('#lupaButton');

listOpenBtn.addEventListener('click', () => {
listCloseBtn.style.display = 'flex';
listOpenBtn.style.display = 'none';
lupaBtn.style.display = 'none';
});

listCloseBtn.addEventListener('click', () => {
listCloseBtn.style.display = 'none';
listOpenBtn.style.display = 'flex';
lupaBtn.style.display = 'flex';
});

lupaOpenBtn.addEventListener('click', () => {
lupaCloseBtn.style.display = 'flex';
lupaOpenBtn.style.display = 'none';
listBtn.style.display = 'none';
});

lupaCloseBtn.addEventListener('click', () => {
lupaCloseBtn.style.display = 'none';
lupaOpenBtn.style.display = 'flex';
listBtn.style.display = 'flex';
});