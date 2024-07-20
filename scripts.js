// scripts.js
document.addEventListener('DOMContentLoaded', () => {
    const items = document.querySelectorAll('li');

    items.forEach(item => {
        item.addEventListener('click', (event) => {
            event.stopPropagation();
            item.classList.toggle('active');
        });
    });
});
