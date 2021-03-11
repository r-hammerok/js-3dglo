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

export default smoothScrolling;