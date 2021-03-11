const toggleMenu = () => {
    const btnMenu = document.querySelector('.menu'),
        menu = document.querySelector('menu');

    const handlerMenu = () => {
        menu.classList.toggle('active-menu');
    };

    menu.addEventListener('click', (event) => {
        const tagName = event.target.tagName;
        if (tagName === 'A') {
            handlerMenu();
        }
    });
    btnMenu.addEventListener('click', handlerMenu);
};

export default toggleMenu;