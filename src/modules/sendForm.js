const sendForm = () => {
    const errorMessage = 'Что-то пошло не так...',
        loadMessage = 'Загрузка...',
        successMessage = 'Спасибо! Мы скоро с вами свяжемся!';
    
    const cssType1 = 'font-size: 2rem;',
        cssType2 = 'font-size: 1.5rem; color: white;';

    const statusMessage = document.createElement('div');
    
    const postData = (body) => {
        return fetch('./server.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        });

    };

    document.body.addEventListener('submit', (event) => {
        event.preventDefault();

        // Так как submit срабатывает только для форм, то нет смысла проверять target
        // он всегда будет <form>
        const targetId = event.target.id;
        const form = document.getElementById(targetId);

        const errorMessage = document.createElement('div');
        errorMessage.classList.add('error');
        const inputs = form.querySelectorAll('input');
        let isError = false;
        inputs.forEach((item) => {
            if (item.name === 'user_name') {
                if (item.value.trim().length < 2) {
                    errorMessage.innerText = 'Имя должно содержать минимум ДВА символа!';
                    item.insertAdjacentElement('afterend', errorMessage);
                    isError = true;
                } else {
                    // item.querySelector()
                }
            }
        });

        if (isError) {
            return;
        }

        statusMessage.style.cssText = targetId === 'form3' ? cssType2 : cssType1;
        
        form.appendChild(statusMessage);
        statusMessage.textContent = loadMessage;
        const formData = new FormData(form);
        let body = {};
        
        formData.forEach((val, key) => {
            body[key] = val;
        });

        postData(body)
            .then((response) => {
                    if (response.status !== 200) {
                        throw new Error('Status network not 200!');
                    }
                    statusMessage.textContent = successMessage;
                    form.querySelectorAll('input').forEach((item) => {
                        item.value = '';
                    });
                    setTimeout(() => {
                        statusMessage.remove();
                    }, 3000);
                })
            .catch((error) => {
                statusMessage.textContent = errorMessage;
                console.error(error);
            });
    });
};

export default sendForm;