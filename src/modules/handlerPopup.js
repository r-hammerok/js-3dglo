const handlerPopup = () => {
    const popup = document.querySelector('.popup'),
        popupBtns = document.querySelectorAll('.popup-btn'),
        popupClose = document.querySelector('.popup-close');
    
    const animatePopup = (action = 'show') => {

        const popupContent = document.querySelector('.popup-content');
        const startTop = -60,
            endTop = 10;
        
        let currentTop, idRequest;
        const showPopup = () => {
            popupContent.style.top = `${currentTop}%`;
            currentTop += 3;
            if (currentTop <= endTop) {
                idRequest = requestAnimationFrame(showPopup);
            } else {
                popupContent.removeAttribute('style');
                cancelAnimationFrame(idRequest);
            }
        };
        const hidePopup = () => {
            popupContent.style.top = `${currentTop}%`;
            currentTop -= 2;
            if (currentTop >= startTop) {
                idRequest = requestAnimationFrame(hidePopup);
            } else {
                cancelAnimationFrame(idRequest);
                popupContent.removeAttribute('style');
                popup.removeAttribute('style');
            }
        };

        if (action === 'show') {
            currentTop = startTop;
            showPopup();
        } else {
            currentTop = endTop;
            hidePopup();
        }

    };

    popupClose.addEventListener('click', () => {
        if (window.innerWidth >= 768) {
            animatePopup('close');
        } else {
            popup.removeAttribute('style');
        }
    });
    popupBtns.forEach((item) => item.addEventListener('click', () => {
        popup.style.display = 'block';
        if (window.innerWidth >= 768) {
            animatePopup('show');
        }
    }));
};

export default handlerPopup;