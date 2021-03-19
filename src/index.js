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
// До окончания акции всегда будет оставаться 3,5 часа
const endAction = new Date().setMilliseconds(3.5 * 60 * 60 *1000);
countTimer(endAction);

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