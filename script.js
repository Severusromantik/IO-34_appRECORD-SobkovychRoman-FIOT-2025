// ====== СТРУКТУРА ДАНИХ (симуляція даних з бекенду) ======
const labData = {
    'lab1': {
        title: 'Звіт з Лабораторної роботи №1',
        opis: {
            heading: 'Опис предметного середовища (Лаб. №1)',
            content: `<p>Лабораторна робота №1 присвячена основам HTML5 та створення базової структури веб-сторінки.</p>
                      <p>Основне завдання: засвоєння тегів &lt;!DOCTYPE html>, &lt;html>, &lt;head>, &lt;body> та їх атрибутів.</p>`
        },
        tema: {
            heading: 'Тема Мета Місце розташування лаб. №1',
            content: `<p><strong>Тема:</strong> Вступ до HTML5 та структура документа.</p>
                      <p><strong>Мета:</strong> Навчитися створювати валідний HTML-документ.</p>
                      <p><strong>Розташування:</strong> <a href="#">Посилання на GitHub/локальний файл</a></p>`
        },
        struktura: {
            heading: 'СТРУКТУРА ДОКУМЕНТА (Лаб. №1)',
            content: `<h3>Схема структури</h3>
                      <pre><code>index.html\n├── styles.css\n└── script.js</code></pre>
                      <p>Документ побудовано за принципом розділення контенту, стилів та логіки.</p>`
        },
        tablicya: {
            heading: 'HTML-код ТАБЛИЦЬ (Лаб. №1)',
            content: `<pre><code>&lt;table>\n  &lt;tr>\n    &lt;td>Дані 1&lt;/td>\n  &lt;/tr>\n&lt;/table></code></pre>
                      <p>Таблиця використовується для представлення даних звіту.</p>`
        },
        formi: {
            heading: 'HTML-код ФОРМИ (Лаб. №1)',
            content: `<p>У Лаб. №1 форми не використовувались. Тільки базові теги.</p>`
        },
        zobrazhennia: {
            heading: 'HTML-код ЗОБРАЖЕННЯ (Лаб. №1)',
            content: `<pre><code>&lt;img src="student_photo.jpg" alt="Фото студента"></code></pre>
                      <p>Додано зображення відповідно до макету.</p>`
        },
        visnovki: {
            heading: 'ВИСНОВКИ (Лаб. №1)',
            content: `<p>Лабораторна робота №1 успішно виконана. Засвоєно базову структуру HTML.</p>`
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
        // ... тут мали б бути інші розділи для Лаб. 2
        visnovki: {
            heading: 'ВИСНОВКИ (Лаб. №2)',
            content: `<p>Лабораторна робота №2 успішно виконана. Засвоєно базові стилі CSS.</p>`
        },
    }
};

document.addEventListener('DOMContentLoaded', () => {
    // Елементи
    const labButtons = document.querySelectorAll('.button-pract');
    const menuButtons = document.querySelectorAll('.side-menu .menu-button');
    const contentWindow = document.querySelector('.content-window');
    const contentTitle = document.querySelector('.content-title');

    // Змінна для відстеження поточної активної лабораторної
    let currentLab = 'lab1'; // За замовчуванням Lab 1

    // Функція для відображення контенту
    const displayContent = (labId, sectionId) => {
        const data = labData[labId]?.[sectionId]; // Отримуємо дані
        
        // Очищаємо вікно контенту
        contentWindow.innerHTML = ''; 

        if (data) {
            // Оновлюємо заголовок вікна
            contentTitle.textContent = labData[labId].title;
            
            // Створюємо та вставляємо контент
            const section = document.createElement('div');
            section.className = 'content-block active-content';
            section.innerHTML = `<h3>${data.heading}</h3>${data.content}`;
            
            contentWindow.appendChild(contentTitle.cloneNode(true)); // Додаємо заголовок знову
            contentWindow.appendChild(section);
        } else {
            // Якщо даних немає (наприклад, для Лаб. 2 не всі секції заповнені)
            contentWindow.innerHTML = `<h2 class="content-title">${labData[labId].title}</h2>
                                       <div class="content-block active-content">
                                           <h3>Розділ не знайдено</h3>
                                           <p>Контент для розділу <strong>"${sectionId}"</strong> лабораторної роботи <strong>"${labId}"</strong> відсутній або не заповнений.</p>
                                       </div>`;
        }

        // Переводимо прокрутку вікна на початок
        contentWindow.scrollTop = 0;
    };


    // 1. Обробка натискання кнопок БІЧНОЇ ПАНЕЛІ
    const handleMenuClick = (event) => {
        const targetId = event.currentTarget.dataset.contentId; 

        // 1.1. Знімаємо активний клас з усіх кнопок меню та додаємо до поточної
        menuButtons.forEach(button => {
            button.classList.remove('active');
        });
        event.currentTarget.classList.add('active');
        
        // 1.2. Відображаємо контент для поточної Лаб. та вибраного розділу
        displayContent(currentLab, targetId);
    };

    menuButtons.forEach(button => {
        button.addEventListener('click', handleMenuClick);
    });


    // 2. Обробка натискання ВЕРХНІХ кнопок (Практ. 1-9)
    const handleLabSwitch = (event) => {
        const labIndex = event.currentTarget.textContent.replace('Практ. ', '');
        const newLabId = `lab${labIndex}`;

        if (!labData[newLabId]) {
             alert(`Контент для ${event.currentTarget.textContent} поки не завантажено.`);
             return; // Виходимо, якщо даних немає
        }

        // 2.1. Оновлюємо активний стиль на верхній панелі
        labButtons.forEach(btn => btn.classList.remove('active-lab'));
        event.currentTarget.classList.add('active-lab');
        
        // 2.2. Оновлюємо змінну поточної лабораторної
        currentLab = newLabId;

        // 2.3. Симулюємо клік по першій кнопці бічної панелі, 
        // щоб відобразити початковий контент нової роботи
        const firstMenuButton = document.querySelector('.side-menu .menu-button');
        if (firstMenuButton) {
            firstMenuButton.click(); 
        }
    };

    labButtons.forEach(labButton => {
        labButton.addEventListener('click', handleLabSwitch);
    });

    // 3. Ініціалізація при завантаженні сторінки (активуємо Практ. 1)
    const pract1Button = document.querySelector('.button-pract:first-child');
    if (pract1Button) {
        pract1Button.click(); // Симулюємо клік по Практ. 1, що викличе displayContent
    }
});