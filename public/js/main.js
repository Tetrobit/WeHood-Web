document.addEventListener('DOMContentLoaded', function() {
    const burgerMenu = document.querySelector('.burger-menu');
    const navLinks = document.querySelector('.nav-links');
    
    // Открытие/закрытие меню по клику на бургер
    burgerMenu.addEventListener('click', function() {
        burgerMenu.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // Закрытие меню при клике на ссылку
    navLinks.addEventListener('click', function(e) {
        if (e.target.tagName === 'A') {
            burgerMenu.classList.remove('active');
            navLinks.classList.remove('active');
        }
    });

    // Закрытие меню при клике вне меню
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.nav-links') && !e.target.closest('.burger-menu')) {
            burgerMenu.classList.remove('active');
            navLinks.classList.remove('active');
        }
    });
}); 