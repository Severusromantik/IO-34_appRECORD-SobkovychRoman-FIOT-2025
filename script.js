// ====== СТРУКТУРА ДАНИХ ======
const labData = {
    'lab1': {
        title: 'Звіт з Лабораторної роботи №1',
        opis: {
            heading: 'Опис предметного середовища (Сайт взуттєвого магазину)',
            content: `
                <p>Сайт взуттєвого магазину брендів є інформаційно-комерційною платформою, яка дозволяє користувачам зручно ознайомлюватися з асортиментом взуття різних відомих виробників.</p>
        
                <section>
                    <h4>Основні функції та контент:</h4>
                    <ul>
                        <li>На головній сторінці відображаються актуальні колекції, новинки сезону, акційні пропозиції та популярні бренди.</li>
                        <li>Користувач може перейти до відповідних розділів: **жіноче, чоловіче або дитяче взуття**.</li>
                        <li>Каталог товарів містить фотографії, короткий опис і ціну.</li>
                        <li>Реалізовано навігаційне меню та можливість **фільтрувати моделі** за типом, брендом чи категорією.</li>
                    </ul>
                </section>
        
                <section>
                    <h4>Логічна структура сайту:</h4>
                    <dl>
                        <dt>Хедер (Header)</dt>
                        <dd>Містить назву магазину та навігаційне меню.</dd>
                        
                        <dt>Головна частина (Main)</dt>
                        <dd>Показує основну інформацію, колекції або окремі товари.</dd>
                        
                        <dt>Футер (Footer)</dt>
                        <dd>Містить додаткові посилання, контактну інформацію та соціальні мережі.</dd>
                    </dl>
                </section>
        
                <p>Головна мета такого сайту — створити зручний і зрозумілий простір для користувача, де можна швидко знайти потрібне взуття, ознайомитися з брендами, дізнатися про новинки та пропозиції магазину.</p>
            `
        },
        tema: {
            heading: 'Тема, Мета, Місце розташування (Лаб. №1)',
            content: `
                <p>
                    <strong>Тема:</strong> Структура HTML-документа. Вибір предметної галузі. GitHub. Робота з репозиторіями. Основні теги та атрибути в HTML-документі.
                </p>
        
                <p>
                    <strong>Мета:</strong> Придбати практичні навички роботи з GitHub, репозиторіями, HTML-документом, таблицями, зображеннями, посиланнями, списками, формами. 
                    Створити шаблон звітного HTML-документом для відображення результатів роботи всіх лабораторних робіт.
                </p>
                
                <h4>Ресурси та розташування:</h4>
                <ul>
                    <li>
                        <strong>Репозиторій GitHub звіту:</strong> <a href="https://github.com/Severusromantik/IO-34_appRECORD-SobkovychRoman-FIOT-2025" target="_blank">Посилання GitHub-репозиторій звіту</a>
                    </li>
                    <li>
                        <strong>Репозиторій GitHub cамостійних робіт:</strong> <a href="https://github.com/Severusromantik/IO-34_INDEPENDENT-SobkovychRoman-FIOT-2025" target="_blank">Посилання на GitHub-репозиторій cамостійних робіт (макет, ТЗ)</a>
                    </li>
                    <li>
                        <strong>Репозиторій GitHub WEB застосунку:</strong> <a href="https://github.com/Severusromantik/IO-34_appWEB-SobkovychRoman-FIOT-2025" target="_blank">Посилання GitHub-репозиторій веб застосунку</a>
                    </li>

                    <li>
                        <strong>Жива сторінка GitHub звіту:</strong> <a href="https://severusromantik.github.io/IO-34_appRECORD-SobkovychRoman-FIOT-2025/" target="_blank">Жива сторінка GitHub звіту</a>
                    </li>
                    <li>
                        <strong>Жива сторінка GitHub cамостійних робіт:</strong> <a href="https://severusromantik.github.io/IO-34_INDEPENDENT-SobkovychRoman-FIOT-2025/" target="_blank">Жива сторінка GitHub cамостійних робіт (макет, ТЗ)</a>
                    </li>
                    <li>
                        <strong>Жива сторінка GitHub WEB застосунку:</strong> <a href="https://severusromantik.github.io/IO-34_appWEB-SobkovychRoman-FIOT-2025/" target="_blank">Жива сторінка GitHub WEB застосунку</a>
                    </li>
                </ul>
            `
        },
        struktura: {
            heading: 'СТРУКТУРА ДОКУМЕНТА (Лаб. №1)',
            content: `<h3>Схема структури</h3>
                      <pre><code>index.html\n├── styles.css\n└── script.js</code></pre>
                      <p>Документ побудовано за принципом розділення контенту, стилів та логіки.</p>`
        },
        tablicya: {
            heading: 'HTML-код ТАБЛИЦЬ (Лаб. №1)',
            content: `<p>У Лаб. №1 таблиці не використовувались.</p>`
        },
        formi: {
            heading: 'HTML-код ФОРМ (Лаб. №1)',
            content: `<p>У Лаб. №1 форми не використовувались. Тільки базові теги.</p>`
        },
        zobrazhennia: {
            heading: 'HTML-код ЗОБРАЖЕННЯ (Лаб. №1)',
            content: `<pre><code>&lt;img src="nike_red_with_name.png" alt="Опис фото"></code></pre>`
        },
        visnovki: {
            heading: 'ВИСНОВКИ (Лаб. №1)',
            content: `
                <p>
                    У результаті роботи було вивчено **структуру HTML-документа**, основні теги та атрибути, які визначають зміст і побудову вебсторінки.
                </p>
        
                <p>
                    Було обрано предметну галузь — **сайт взуттєвого магазину брендів**, проаналізовано його логіку, основні розділи та елементи інтерфейсу. Зокрема, визначено структуру сторінки, що включає хедер із навігаційним меню, головну частину з каталогом товарів та футер із додатковими посиланнями й соціальними мережами.
                </p>
        
                <p>
                    Окрім цього, опрацьовано принципи роботи з **GitHub** — створення, збереження та оновлення репозиторіїв, що забезпечує ефективну командну роботу й контроль версій коду.
                </p>
        
                <p>
                    Таким чином, отримані знання дозволили сформувати розуміння базової структури HTML-документа, організації вебконтенту та основних інструментів керування проєктами. Це створює міцну основу для подальшого вивчення веброзробки та практичного застосування отриманих навичок під час створення власних вебсайтів.
                </p>
            `
        },
    },
    'lab2': {
        title: 'Звіт з Лабораторної роботи №2',
        opis: {
            heading: 'Опис предметного середовища (Лаб. №2)',
            content: `<p>Лабораторна робота №2 присвячена основам **CSS3** та каскадним таблицям стилів.</p>
                      <p>Основне завдання: оформлення елементів сторінки та використання селекторів.</p>`
        },
        tema: {
            heading: 'Тема Мета Місце розташування лаб. №2',
            content: `<p><strong>Тема:</strong> Основи CSS3 та зовнішнє оформлення.</p>
                      <p><strong>Мета:</strong> Навчитися стилізувати елементи за допомогою зовнішнього файлу CSS.</p>
                      <p><strong>Розташування:</strong> <a href="#">Посилання на GitHub/Лаб. 2</a></p>`
        },
        
        visnovki: {
            heading: 'ВИСНОВКИ (Лаб. №2)',
            content: `<p>Лабораторна робота №2 успішно виконана. Засвоєно базові стилі CSS.</p>`
        },
    }
};

document.addEventListener('DOMContentLoaded', () => {
  
    const labButtons = document.querySelectorAll('.button-pract');
    const menuButtons = document.querySelectorAll('.side-menu .menu-button');
    const contentWindow = document.querySelector('.content-window');
    const contentTitle = document.querySelector('.content-title');

    let currentLab = 'lab1'; 

    const displayContent = (labId, sectionId) => {
        const data = labData[labId]?.[sectionId]; 
        
        contentWindow.innerHTML = ''; 

        if (data) {
            contentTitle.textContent = labData[labId].title;
            
            const section = document.createElement('div');
            section.className = 'content-block active-content';
            section.innerHTML = `<h3>${data.heading}</h3>${data.content}`;
            
            contentWindow.appendChild(contentTitle.cloneNode(true)); 
            contentWindow.appendChild(section);
        } else {
            contentWindow.innerHTML = `<h2 class="content-title">${labData[labId].title}</h2>
                                       <div class="content-block active-content">
                                           <h3>Розділ не знайдено</h3>
                                           <p>Контент для розділу <strong>"${sectionId}"</strong> лабораторної роботи <strong>"${labId}"</strong> відсутній або не заповнений.</p>
                                       </div>`;
        }

        contentWindow.scrollTop = 0;
    };


    const handleMenuClick = (event) => {
        const targetId = event.currentTarget.dataset.contentId; 

        menuButtons.forEach(button => {
            button.classList.remove('active');
        });
        event.currentTarget.classList.add('active');
        
        displayContent(currentLab, targetId);
    };

    menuButtons.forEach(button => {
        button.addEventListener('click', handleMenuClick);
    });


    const handleLabSwitch = (event) => {
        const labIndex = event.currentTarget.textContent.replace('Практ. ', '');
        const newLabId = `lab${labIndex}`;

        if (!labData[newLabId]) {
             alert(`Контент для ${event.currentTarget.textContent} поки не завантажено.`);
             return; 
        }

        labButtons.forEach(btn => btn.classList.remove('active-lab'));
        event.currentTarget.classList.add('active-lab');
        
        currentLab = newLabId;

        const firstMenuButton = document.querySelector('.side-menu .menu-button');
        if (firstMenuButton) {
            firstMenuButton.click(); 
        }
    };

    labButtons.forEach(labButton => {
        labButton.addEventListener('click', handleLabSwitch);
    });

    const pract1Button = document.querySelector('.button-pract:first-child');
    if (pract1Button) {
        pract1Button.click(); 
    }
});