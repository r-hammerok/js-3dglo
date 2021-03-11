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

export default modifyDot;