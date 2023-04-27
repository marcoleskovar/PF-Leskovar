const listOpenBtn = document.querySelector('#listOpen');
const listCloseBtn = document.querySelector('#listClose');
const lupaOpenBtn = document.querySelector('#lupaOpen');
const lupaCloseBtn = document.querySelector('#lupaClose');
const listBtn = document.querySelector('#listButton');
const lupaBtn = document.querySelector('#lupaButton');

listOpenBtn.addEventListener('click', () => {
listCloseBtn.style.display = 'flex';
listOpenBtn.style.display = 'none';
lupaOpenBtn.style.display = 'none';
lupaBtn.style.opacity = '1';
});

listCloseBtn.addEventListener('click', () => {
listCloseBtn.style.display = 'none';
listOpenBtn.style.display = 'flex';
lupaOpenBtn.style.display = 'flex';
lupaBtn.style.opacity = '1';
});

lupaOpenBtn.addEventListener('click', () => {
lupaCloseBtn.style.display = 'flex';
lupaOpenBtn.style.display = 'none';
listOpenBtn.style.display = 'none';
listBtn.style.opacity = '0.5';
});

lupaCloseBtn.addEventListener('click', () => {
lupaCloseBtn.style.display = 'none';
lupaOpenBtn.style.display = 'flex';
listOpenBtn.style.display = 'flex';
listBtn.style.opacity = '1';
});