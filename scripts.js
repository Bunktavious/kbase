// scripts.js
document.addEventListener('DOMContentLoaded', () => {
    const items = document.querySelectorAll('li');

    items.forEach(item => {
        item.addEventListener('click', (event) => {
            event.stopPropagation();
            item.querySelectorAll(':scope > ul').forEach(ul => {
                ul.classList.toggle('active');
            });
        });
    });
});
