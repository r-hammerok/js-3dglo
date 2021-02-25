window.addEventListener('DOMContentLoaded', function() {
    'use strict';

    //Timer
    function countTimer(deadline) {
        const
            timerHours = document.querySelector('#timer-hours'),
            timerMinutes = document.querySelector('#timer-minutes'),
            timerSeconds = document.querySelector('#timer-seconds');
        
        function strWithFirstZero(number) {
            number = Math.abs(number);
            return number < 10 ? `0${number}` : `${number}`;
        }

        function getTimeRemaining() {
            const
                dateStop = new Date(deadline).getTime(),
                dateNow = new Date().getTime();
            
            let timeRemaining = 0, seconds = 0, minutes = 0, hours = 0;

            if (dateStop > dateNow) {
                timeRemaining = (dateStop - dateNow) / 1000;
                seconds = Math.floor(timeRemaining % 60);
                minutes = Math.floor((timeRemaining / 60) % 60);
                hours = Math.floor(timeRemaining / 60 / 60);
            }

            return {timeRemaining, hours, minutes, seconds};
        }

        let idTimer;

        function updateClock() {
            const timer = getTimeRemaining();
        
            timerHours.textContent = strWithFirstZero(timer.hours);
            timerMinutes.textContent = strWithFirstZero(timer.minutes);
            timerSeconds.textContent = strWithFirstZero(timer.seconds);

            if (timer.timeRemaining < 1) {
                clearInterval(idTimer);
            }
        }
        
        idTimer = setInterval(updateClock, 1000);

    }

    countTimer('01 marth 2021 14:38:30');

    // Menu
    const toggleMenu = () => {
        const btnMenu = document.querySelector('.menu'),
            menu = document.querySelector('menu'),
            closeBtn = document.querySelector('.close-btn'),
            menuItems = menu.querySelectorAll('ul > li > a');
        const handlerMenu = () => {
            menu.classList.toggle('active-menu');
        };
        btnMenu.addEventListener('click', handlerMenu);
        closeBtn.addEventListener('click', handlerMenu);

        menuItems.forEach((item) => item.addEventListener('click', handlerMenu));
    };
    toggleMenu();

    //PopUp
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
    handlerPopup();
    
});