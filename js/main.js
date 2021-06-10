// =0=0=0=0=0=0=0=0=0=0=0=0=0=0=0=0=0=0=0=0=0=0=0=0=0=0=0=0= //

let validEmail;
function checkValidate(elem){
    /**
     * Валидатор формы ввода на email.
     */
    let re = /\S+@\S+\.\S+/;
    if (re.test(elem.value)){
        elem.style.borderBottomColor = '#037171';
        userEmail = elem.value;  // сохранение почты
        validEmail = true
    } else {
        elem.style.borderBottomColor = '#5C0029';
        validEmail = false
    }
}
function logIn(){
    /**
     * При нажатии на кнопку, email активируется.
     */
    let log = document.querySelector('.ave');
    if (validEmail){
        log.classList.add('left');
    }
}

// =0=0=0=0=0=0=0=0=0=0=0=0=0=0=0=0=0=0=0=0=0=0=0=0=0=0=0=0= //

function toggleHamburger(){
    /**
     * Открывает и закрывает меню.
     */
    let head = document.querySelector('.header__menu');
    let menu = document.querySelector('.menu');
    head.classList.toggle('menu__on');
    menu.classList.toggle('menu__off');
}

// =0=0=0=0=0=0=0=0=0=0=0=0=0=0=0=0=0=0=0=0=0=0=0=0=0=0=0=0= //

contentMakeList();  // {config} нужно для генерации HTML
function contentMakeList(){
    /**
     * Генератор списка с заданиями в меню.
     */
    let content = document.querySelector('.menu__content');
    for (let step = 0; step<contentList.length; step++){
        content.insertAdjacentHTML('beforeend', `<div class="content" onclick="openTask(${step})">${contentList[step]}</div>`);
    }
    content.insertAdjacentHTML('beforeend', `<div class="content content__disabled" onclick="openTask(${ANSWERS})">Итоговое задание</div>`);
    content.insertAdjacentHTML('beforeend', `<div class="content__alert">Чтобы открыть итоговое задание, выполните все предыдущие!</div>`);
}

endAsked();  // {config} нужно для генерации HTML
function endAsked(){
    /**
     * Генерация вопроса для итогового задания.
     */
    let ask = document.querySelector('.asked__title');
    shuffle(contentAsked);
    ask.innerHTML = contentAsked[0];
}

// =0=0=0=0=0=0=0=0=0=0=0=0=0=0=0=0=0=0=0=0=0=0=0=0=0=0=0=0= //

let taskList = document.querySelector('.main').children;
let headerTitle = document.querySelector('.header__title');
let activeTask = 0;
let checkTaskResult = 0;
function openTask(num){
    /**
     * Загрузка страницы с заданием.
     */
    if (num < ANSWERS || checkTaskResult === ANSWERS){
        taskList[activeTask].classList.add('hidden');
        activeTask = num;
        headerTitle.innerHTML = contentList[activeTask] || 'Итоговое задание';
        taskList[activeTask].classList.remove('hidden');
        toggleHamburger();
    }
}

// =0=0=0=0=0=0=0=0=0=0=0=0=0=0=0=0=0=0=0=0=0=0=0=0=0=0=0=0= //

function startInfo(elem){
    /**
     * Убирает табличку с информацией о задании.
     */
    let elemInfo = elem.parentElement;
    elemInfo.classList.add('right');
    elemInfo.nextElementSibling.classList.remove('left');
}  // {config} для таблички "информация"
function scoreButton(num){
    /**
     * При нажатии на кнопку "Готово!", блокирует задание.
     * Показывает правильные ли были ответы.
     * Отмечает выполненные задания зелёным.
     */
    let menu = document.querySelector('.menu__content').children;
    menu[num].style.color = '#037171';
    toggleHamburger();
    let taskLock = document.getElementsByClassName('lock');
    taskLock[num].classList.remove('hidden');

    checkTaskResult += 1;  // {config} сохранят количество выполненных заданий
    if (checkTaskResult === ANSWERS){ removeContentDisabled() }
}
function removeContentDisabled(){
    /**
     * Разблокировка итогового задания.
     */
    let content = document.querySelector('.content__disabled');
    content.classList.remove('content__disabled');

    let alertMsg = document.querySelector('.content__alert');
    alertMsg.classList.add('hidden');
}

// =0=0=0=0=0=0=0=0=0=0=0=0=0=0=0=0=0=0=0=0=0=0=0=0=0=0=0=0= //


// вставить форму ответов к заданиям
function endButton(){
    /**
     * Отправка формы в _bot.
     * Переадрессация к уроку в комментарии.
     */
    let message = `УРОК:Коньяк и арманьяк;
        EMAIL:${userEmail};
        "Правда или Ложь":${userWin}/${winArr.length};
        "Последовательность":${userSortY}/${contentSortY.length};
        "ВОПРОС": ${document.querySelector('.asked__title').textContent}`;
    let xhttp = new XMLHttpRequest();
    xhttp.open("GET", BOT_URL+message, true);
    xhttp.send();

    function redirection(){ document.location.href = LESSON_URL }
    window.setTimeout(redirection, 1000);

    let taskLock = document.getElementsByClassName('lock');
    taskLock[ANSWERS].classList.remove('hidden');
}

// =0=0=0=0=0=0=0=0=0=0=0=0=0=0=0=0=0=0=0=0=0=0=0=0=0=0=0=0= //
