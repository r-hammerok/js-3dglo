document.addEventListener('DOMContentLoaded', function() {
    'use strict';

    const
        reminderNY = document.querySelector('#reminder-ny');

    function getHello(date = new Date()) {
        const hours = Math.abs(date.getHours()) % 24;
        if (hours < 6) {
            return 'Доброй ночи';
        } else if (hours >= 6 && hours < 12) {
            return 'Доброе утро';
        } else if (hours < 18) {
            return 'Добрый день';
        } else {
            return 'Добрый вечер';
        }
    }

    function firstLetterUp(str = '') {
        return str[0].toLocaleUpperCase() + str.slice(1);
    }

    function declOfNum (n, textForms) {
        n = Math.abs(n) % 100;
        const suffix = n % 10;
        if (suffix === 1 && n !== 11) {
            return textForms[0];
        }
        if (suffix >= 2 && suffix <= 4 && (n <= 9 || n >= 22)) {
            return textForms[1];
        }
        return textForms[2];
    }

    function getRemainderNewYear(date = new Date()) {
        const 
            // 1 янврая следующего года 0 часов 0 минут 0 секунд
            timeNewYear = new Date(date.getFullYear() + 1, 0, 1),
            remainder = Math.floor((timeNewYear - date) / 1000 / 60 / 60 / 24);
        
        return `${remainder} ${declOfNum(remainder, ['день', 'дня', 'дней'])}`;
    }

    function updateDate(date = new Date()) {
        const 
        curTime = date.toLocaleTimeString('ru',
        {
            hour: '2-digit', 
            minute: 'numeric',
            second: 'numeric',
            hour12: true
        }),
        curWeekDay = firstLetterUp(date.toLocaleDateString('ru',
        {
            weekday: 'long'
        }));
        const nowDate = 
            `${getHello(date)}<br />
            Сегодня: ${curWeekDay}<br />
            Текущее время: ${curTime}<br />
            До нового года осталось: ${getRemainderNewYear(date)}`;
        
       return nowDate;
    }

    document.body.innerHTML = `<p><em>${updateDate()}</em></p>`;
});


