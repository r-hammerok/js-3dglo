const validateInput = () => {
    const bodyItems = document.querySelector('body');
    bodyItems.addEventListener('input', (event) => {
        const target = event.target;

        //Calc
        if (target.matches('input.calc-item')) {
            target.value = target.value.replace(/\D/g,'');
        }

        //User name
        if (target.matches('input[name="user_name"]')) {
            target.value = target.value.replace(/[^а-яё\s]+/gi, '');
        }

        //User message
        if (target.matches('input[name="user_message"]')) {
            target.value = target.value.replace(/[^а-яё\d\s\.,\?!;:\-\(\)"]+/gi, '');
        }

        //User email
        if (target.matches('input[name="user_email"]')) {
            target.value = target.value.replace(/[^a-z@\-_\.!~\*']+/gi, '');
        }

        //User phone
        if (target.matches('input[name="user_phone"]')) {
            target.value = target.value.replace(/[^\+\d]/g, '');

            const value = target.value;
            let pattern = /\d{1,11}/;

            if (value[0] === '+') {
                pattern = /\+?\d{0,11}/;
            }
            const res = value.match(pattern);
            if (res) {
                target.value = res[0];
            }
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

export default validateInput;