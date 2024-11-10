// Мобильное меню
const menuToggle = document.querySelector('.menu-toggle');
const navUl = document.querySelector('nav ul');
const menuItems = document.querySelectorAll('nav ul li a'); // Выбираем все ссылки в меню

if (menuToggle && navUl) {
    // Переключение видимости меню при клике на кнопку
    menuToggle.addEventListener('click', () => {
        navUl.classList.toggle('showing');
    });
}

if (menuItems.length > 0) {
    // Добавляем обработчик клика на каждый пункт меню
    menuItems.forEach(item => {
        item.addEventListener('click', () => {
            navUl.classList.remove('showing'); // Скрываем меню
        });
    });
}
