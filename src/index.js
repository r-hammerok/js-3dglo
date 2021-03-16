'use strict';

import countTimer from './modules/countTimer';
import toggleMenu from './modules/toggleMenu';
import handlerPopup from './modules/handlerPopup';
import tabs from './modules/tabs';
import modifyDot from './modules/modifyDot';
import slider from './modules/slider';
import smoothScrolling from './modules/smoothScrolling';
import changeImage from './modules/changeImage';
import validateInput from './modules/validateInput';
import calc from './modules/calc';
import sendForm from './modules/sendForm';

//Timer
countTimer('13 marth 2021 12:00:00');

// Menu
toggleMenu();

//PopUp
handlerPopup();

//Tabs
tabs();

//Modify Dots
modifyDot();

//Slider
slider();

// Smooth scrolling
smoothScrolling();

// Change image
changeImage();

//Validate input
validateInput();

//Calculator
calc(100);

//Send ajax form
sendForm();