const changeImage = () => {
    document.getElementById('command').addEventListener('mouseover', (event) => {
        const target = event.target;
        if (target.matches('.command__photo') && target.dataset.img) {
            [target.src, target.dataset.img] = [target.dataset.img, target.getAttribute('src')];
        }
    });
    document.getElementById('command').addEventListener('mouseout', (event) => {
        const target = event.target;
        if (target.matches('.command__photo') && target.dataset.img) {
            [target.dataset.img, target.src] = [target.getAttribute('src'), target.dataset.img];
        }
    });
};

export default changeImage;