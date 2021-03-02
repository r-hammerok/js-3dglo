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
    toggleMenu();

    //PopUp
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
    togglePopup();

    // Animation Popup
    const animationPopup = () => {
        const popup = document.querySelector('.popup'),
            popupContent = document.querySelector('.popup-content'),
            popupBtns = document.querySelectorAll('.popup-btn'),
            popupClose = document.querySelector('.popup-close');
        
        let curTop = -382, idAnimation;
        
        const drawPopup = () => {
            popupContent.style.top = `${curTop}px`;
        };

        const actionPopup = () => {
            curTop += 0.1;
            if (curTop >= 50) {
                cancelAnimationFrame(idAnimation);
                return;
            }
            idAnimation = requestAnimationFrame(drawPopup);
            actionPopup();
        };

        popupBtns.forEach((item) => {
            item.addEventListener('click', () => {
                popup.style.display = 'block';
                actionPopup();
            });
        });
        popupClose.addEventListener('click', () => popup.style.display = 'none');
    };
    // animationPopup();

    //Tabs
    const tabs = () => {
        const tabHeader = document.querySelector('.service-header'),
            tab = tabHeader.querySelectorAll('.service-header-tab'),
            tabContent = document.querySelectorAll('.service-tab');
        const toggleTabContent = (index) => {
            for (let i = 0; i < tabContent.length; i++) {
                if (index === i) {
                    tab[i].classList.add('active');
                    tabContent[i].classList.remove('d-none');
                } else {
                    tab[i].classList.remove('active');
                    tabContent[i].classList.add('d-none');
                }
            }
        };
        tabHeader.addEventListener('click', (event) => {
            let target = event.target;
            target = target.closest('.service-header-tab');
            if (target) {
                tab.forEach((item, index) => {
                    if (item === target) {
                        toggleTabContent(index);
                    }
                });
            }

        });
    };
    tabs();

    //Modify Dots
    const modifyDot = () => {
        const dotsWrapper = document.querySelector('.portfolio-dots'),
            countSlides = document.querySelectorAll('.portfolio-item').length;
        
        for (let i = 1; i <= countSlides; i++) {
            let newEl = document.createElement('li');
            newEl.classList.add('dot');
            if (i === 1) {
                newEl.classList.add('dot-active');
            }
            dotsWrapper.insertAdjacentElement('beforeend', newEl);
        }
    };
    modifyDot();

    //Slider
    const slider = () => {
        const slide = document.querySelectorAll('.portfolio-item'),
            btn = document.querySelectorAll('.portfolio-btn'),
            dot = document.querySelectorAll('.dot'),
            slider = document.querySelector('#all-progects');
        
        let currentSlide = 0,
            interval;

        const prevSlide = (elem, index, strClass) => {
            elem[index].classList.remove(strClass);
        };

        const nextSlide = (elem, index, strClass) => {
            elem[index].classList.add(strClass);
        };

        const autoPlaySlide = () => {

            prevSlide(slide, currentSlide, 'portfolio-item-active');
            prevSlide(dot, currentSlide, 'dot-active');
            currentSlide++;
            if (currentSlide >= slide.length) {
                currentSlide = 0;
            }
            nextSlide(slide, currentSlide, 'portfolio-item-active');
            nextSlide(dot, currentSlide, 'dot-active');

        };

        const startSlide = (time = 3000) => {
            interval = setInterval(autoPlaySlide, time);
        };

        const stopSlide = () => {
            clearInterval(interval);
        };

        slider.addEventListener('click', (event) => {
            event.preventDefault();

            let target = event.target;

            if (!target.matches('.portfolio-btn, .dot')) {
                return;
            }

            prevSlide(slide, currentSlide, 'portfolio-item-active');
            prevSlide(dot, currentSlide, 'dot-active');

            if (target.matches('#arrow-right')) {
                currentSlide++;
            } else if (target.matches('#arrow-left')) {
                currentSlide--;
            } else if (target.matches('.dot')) {
                dot.forEach((elem, index) => {
                    if (elem === target) {
                        currentSlide = index;
                    }
                });
            }

            if (currentSlide >= slide.length) {
                currentSlide = 0;
            }
            if (currentSlide < 0) {
                currentSlide = slide.length - 1;
            }

            nextSlide(slide, currentSlide, 'portfolio-item-active');
            nextSlide(dot, currentSlide, 'dot-active');
        });

        slider.addEventListener('mouseover', (event) => {
            if (event.target.matches('.portfolio-btn, .dot')) {
                stopSlide();
            }
        });
        slider.addEventListener('mouseout', (event) => {
            if (event.target.matches('.portfolio-btn, .dot')) {
                startSlide();
            }
        });
        startSlide(3000);
    };
    slider();

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
    };
    smoothScrolling();

    // Change image
    const changeImage = () => {
        const command = document.getElementById('command');
        command.addEventListener('mouseover', (event) => {
            const target = event.target;
            if (target.matches('.command__photo') && target.dataset.img) {
                [target.src, target.dataset.img] = [target.dataset.img, target.getAttribute('src')];
            }
        });
        command.addEventListener('mouseout', (event) => {
            const target = event.target;
            if (target.matches('.command__photo') && target.dataset.img) {
                [target.dataset.img, target.src] = [target.getAttribute('src'), target.dataset.img];
            }
        });
    };
    changeImage();

    //Validate input
    const validateInput = () => {
        const bodyItems = document.querySelector('body');
        bodyItems.addEventListener('input', (event) => {
            const target = event.target;

            //Calc
            if (target.matches('input.calc-item')) {
                target.value = target.value.replace(/\D/g,'');
            }

            //User name AND User message
            if (target.matches('input[name="user_name"]') || target.matches('input[name="user_message"]')) {
                target.value = target.value.replace(/[^а-яё\-\s]+/gi, '');
            }

            //User email
            if (target.matches('input[name="user_email"]')) {
                target.value = target.value.replace(/[^a-z@\-_\.!~\*']+/gi, '');
            }

            //User phone
            if (target.matches('input[name="user_phone"]')) {
                target.value = target.value.replace(/[^\d()\-]+/gi, '');
            }
        });

        bodyItems.addEventListener('focusout', (event) => {
            const target = event.target;

            const doubleSymbol = (text) => text.replace(/(\-){2,}/gi, '$1').replace(/(\s){2,}/gi, '$1');
            const trimSymbol = (text) => text.replace(/^[\s\-]*|[\s\-]*$/gi, '');

            //All input
            if (target.matches('input')) {
                target.value = doubleSymbol(trimSymbol(target.value));
            }

            //User name 
            if (target.matches('input[name="user_name"]')) {
                if (target.value) {
                    const fullName = target.value.split(/[\s]+/);
                    fullName.forEach((item, index) => {
                        fullName[index] = item[0].toUpperCase() + item.slice(1).toLowerCase();
                    });
                    target.value = fullName.join(' ');
                }
            }
        });
    };
    validateInput();

});