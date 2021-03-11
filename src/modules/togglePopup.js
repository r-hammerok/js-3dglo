const togglePopup = () => {
    const popup = document.querySelector('.popup'),
        popupBtns = document.querySelectorAll('.popup-btn');
    
    popupBtns.forEach((item) => item.addEventListener('click', () => popup.style.display = 'block'));

    popup.addEventListener('click', (event) => {
        let target = event.target;

        if (target.classList.contains('popup-close') || !target.closest('.popup-content')) {
            popup.style.display = 'none';
        }
    });
};

export default togglePopup;