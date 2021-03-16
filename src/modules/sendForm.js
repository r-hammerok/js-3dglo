const sendForm = () => {
    const errorMessage = 'Что-то пошло не так...',
        loadMessage = 'Загрузка...',
        successMessage = 'Спасибо! Мы скоро с вами свяжемся!';
    const validaionInputs = (form) => {
        let errors = [];
        form.querySelectorAll('input').forEach ((item) => {
            if (item.name === 'user_name') {
                if (item.value.length < 2) {
                    errors.push('Имя должно содержать минимум два символа!');
                }
            }
            if (item.name === 'user_phone') {
                if (!/^\+?[78]\d{10}$/.test(item.value)) {
                    errors.push('Номер телефона должен начинаться или с + и иметь 11 цифр или с 7 или 8 и иметь 10 цифр!');
                }
            }
            if (item.name === 'user_message') {
                if (item.value.length < 2) {
                    errors.push('Сообщение должно содержать минимум два символа!');
                }
            }
        });

        return errors;
    };
    const cssType1 = 'font-size: 2rem;',
        cssType2 = 'font-size: 1.5rem; color: white;',
        cssError = 'font-size: 1.5rem; color: red; text-shadow: 1px 1px 0.05em black;';

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

        form.appendChild(statusMessage);

        const errors = validaionInputs(form);

        if (errors.length) {
            statusMessage.style.cssText = cssError;
            statusMessage.innerHTML = errors.join('<br />');
            return;
        }

        statusMessage.style.cssText = targetId === 'form3' ? cssType2 : cssType1;
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