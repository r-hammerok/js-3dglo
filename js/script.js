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
            menuItems = menu.querySelectorAll('ul > li');
        const handlerMenu = () => {
            menu.classList.toggle('active-menu');
        };
        btnMenu.addEventListener('click', handlerMenu);
        closeBtn.addEventListener('click', handlerMenu);

        menuItems.forEach((item) => item.addEventListener('click', handlerMenu));
    };
    toggleMenu();

    //PopUp
    const togglePopup = () => {
        const popup = document.querySelector('.popup'),
            popupBtns = document.querySelectorAll('.popup-btn'),
            popupClose = document.querySelector('.popup-close');
        
        popupBtns.forEach((item) => item.addEventListener('click', () => popup.style.display = 'block'));
        popupClose.addEventListener('click', () => popup.style.display = 'none');
    };

    // Animation Popup
    const animationPopup = () => {
        const popup = document.querySelector('.popup'),
            popupContent = document.querySelector('.popup-content'),
            popupBtns = document.querySelectorAll('.popup-btn'),
            popupClose = document.querySelector('.popup-close');
        
        let popupTop = -60, idAnimation;
        
        const showPopup = () => {
            if (popup.style.display !== 'block') {
                popup.style.display = 'block';
            }
            popupContent.style.top = `${popupTop}%`;
            popupTop += 2;
            if (popupTop <= 10) {
                setTimeout(showPopup, 8);
            }
        };

        const hidePopup = () => {
            popupContent.style.top = `${popupTop}%`;
            popupTop -= 2;
            if (popupTop >= -60) {
                setTimeout(hidePopup, 8);
            } else {
                popup.style.display = 'none';
            }
        };

        popupBtns.forEach((item) => item.addEventListener('click', () => showPopup()));
        popupClose.addEventListener('click', () => hidePopup());
    };

    if (window.innerWidth >= 768) {
       animationPopup();
    } else {
       togglePopup();
    }

    // Smooth scrolling
    const smoothScrolling = () => {
        
        const scrollTo = (blockId = '', behavior = 'smooth', block = 'start') => {
            document.querySelector(blockId).scrollIntoView({
                behavior: behavior,
                block: block
            });
        };

        document.querySelector('body').addEventListener('click', (event) => {
            const target = event.target.closest('a');
            if (target) {
                const href = target.getAttribute('href');
                if (href !== '#close' && href.length >= 2 && href[0] === '#') {
                    event.preventDefault();
                    scrollTo(href);
                }
            }
        });


        // const menuLinkItems = document.querySelectorAll('menu > ul > li > a, a[href="#service-block"]');

        // menuLinkItems.forEach((item) => {
        //     item.addEventListener('click', (event) => {
        //         event.preventDefault();
        //         const blockId = item.getAttribute('href');

        //         document.querySelector(blockId).scrollIntoView({
        //             behavior: 'smooth',
        //             block: 'start'
        //         });
        //     });
        // });
    };
    smoothScrolling();
     
});