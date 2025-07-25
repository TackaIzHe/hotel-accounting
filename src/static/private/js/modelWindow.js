const modal = $("#myModal");
const btn = $("#openModalBtn");
const closeBtn = $(".close");
const sucText = $(".modal-content #suc")
const errorText = $(".modal-content #error")

// Открыть модальное окно при клике на кнопку
btn.click("click", () => {
    if(btn.text()== "Добовить Клиента"){
        openModalWindowAddClient()
    }
    else if(btn.text()== "Добовить Заказ"){
        openModalWindowAddOrder()
    }
    else if(btn.text()== "Добовить Комнату"){
        openModalWindowAddRoom()
    }
    else if(btn.text()== "Добовить Расходы"){
        openModalWindowAddExpenses()
    }
    else if(btn.text()== "Добовить Доход"){
        openModalWindowAddIncome()
    }
    else if(btn.text()== "Посмотреть таблицу заполнености"){
        openModalWindowGetFilds()
    }
    modal.css({"display":"block"});
    // Можно добавить фокус на окно для доступности 
    closeBtn.focus();
});

// Закрыть модальное окно при клике на крестик
closeBtn.click(() => {
    modal.css({"display":"none"})
    closeText(sucText, errorText)
    btn.focus();
});

// Закрыть модальное окно при клике вне содержимого
$(window).click((event) => {
    if ($(event.target).html() === modal.html()) {
        modal.css({"display":"none"})
        closeText(sucText, errorText)
        btn.focus();
    }
});

// Закрыть модальное окно по нажатию Esc
$(window).keydown((event) => {
    if (event.key === "Escape" && modal.css("display") === "block") {
        modal.css({"display":"none"});
        closeText(sucText, errorText)
        btn.focus();
    }
});

function closeText(sucText, errorText){
    sucText.css({"display":"none"})
    errorText.css({"display":"none"})
}

function openModalWindowAddClient(){
    const content = $(".modal-content")
    content.children("form").remove()
    const contentForm = content.append("<form id='clientAdd'></form>").children("form")
    contentForm.append("<label for='fio'>ФИО</label><br>")
    contentForm.append("<input id='fio'/><br>")
    contentForm.append("<label for='tel'>Номер телефона</label><br>")
    contentForm.append("<input id='tel'/><br>")
    contentForm.append("<label for='city'>Город</label><br>")
    contentForm.append("<input id='city'/><br>")
    contentForm.append("<label for='description'>Описание</label><br>")
    contentForm.append("<input id='description'/><br>")
    contentForm.append("<button type='submit'>Добавить</button>")
    contentForm.submit(async(e)=>{
        addClientAction(e)
    })
}

function openModalWindowAddOrder(){
    const content = $(".modal-content")
    content.children("form").remove()
    const contentForm = content.append("<form id='clientAdd'></form>").children("form")
    contentForm.append("<label for='client'>Клиент</label><br>")
    contentForm.append("<input list='clientslist' id='client'/><br>")
    contentForm.append("<label for='room'>Комната</label><br>")
    contentForm.append("<input list='roomslist' id='room'/><br>")
    contentForm.append("<label for='payType'>Тип оплаты</label><br>")
    contentForm.append("<select id='payType'><option>Нал</option><option>Безнал</option></select><br>")
    contentForm.append("<label for='isPay'>Оплачено ли</label><br>")
    contentForm.append("<input type='checkbox' id='isPay'/><br>")
    contentForm.append("<label for='paySum'>Сумма</label><br>")
    contentForm.append("<input id='paySum' type='number'/><br>")
    contentForm.append("<label for='startDate'>Начальная дата</label><br>")
    contentForm.append("<input id='startDate' type='date'/><br>")
    contentForm.append("<label for='endDate'>Конечная дата</label><br>")
    contentForm.append("<input id='endDate' type='date'/><br>")
    contentForm.append("<label for='description'>Описание</label><br>")
    contentForm.append("<input id='description'/><br>")
    contentForm.append("<button type='submit'>Добавить</button>")
    contentForm.submit(async(e)=>{
        addOrderAction(e)
    })
}

function openModalWindowAddRoom(){
    const content = $(".modal-content")
    content.children("form").remove()
    const contentForm = content.append("<form id='clientAdd'></form>").children("form")
    contentForm.append("<label for='number'>Номер Комнаты</label><br>")
    contentForm.append("<input id='number' type='number'/><br>")
    contentForm.append("<label for='description'>Описание</label><br>")
    contentForm.append("<input id='description'/><br>")
    contentForm.append("<button type='submit'>Добавить</button>")
    contentForm.submit(async(e)=>{
        addRoomAction(e)
    })
}

function openModalWindowAddExpenses(){
    const content = $(".modal-content")
    content.children("form").remove()
    const contentForm = content.append("<form id='clientAdd'></form>").children("form")
    contentForm.append("<label for='type'>Тип расходов</label><br>")
    contentForm.append("<input id='type'/><br>")
    contentForm.append("<label for='sum'>Сумма</label><br>")
    contentForm.append("<input id='sum' type='number'/><br>")
    contentForm.append("<label for='description'>Описание</label><br>")
    contentForm.append("<input id='description'/><br>")
    contentForm.append("<button type='submit'>Добавить</button>")
    contentForm.submit(async(e)=>{
        addExpenseAction(e)
    })
}

function openModalWindowAddIncome(){
    const content = $(".modal-content")
    content.children("form").remove()
    const contentForm = content.append("<form id='clientAdd'></form>").children("form")
    contentForm.append("<label for='type'>Тип расходов</label><br>")
    contentForm.append("<input id='type'/><br>")
    contentForm.append("<label for='sum'>Сумма</label><br>")
    contentForm.append("<input id='sum' type='number'/><br>")
    contentForm.append("<label for='description'>Описание</label><br>")
    contentForm.append("<input id='description'/><br>")
    contentForm.append("<button type='submit'>Добавить</button>")
    contentForm.submit(async(e)=>{
        addIncomeAction(e)
    })
}

function openModalWindowGetFilds(){
    const year = new Date().getFullYear()
    const content = $(".modal-content")
    content.children("form").remove()
    const contentForm = content.append("<form id='clientAdd'></form>").children("form")
    contentForm.append("<label for='mounth'>Месяц</label><br>")
    contentForm.append("<input list='mounthslist' id='mounth'/><br>")
    contentForm.append("<label for='year'>Год</label><br>")
    contentForm.append(`<input value='${year}' type='number' id='year'/><br>`)
    contentForm.append("<button type='submit'>Добавить</button>")
    contentForm.submit(async(e)=>{
        getZapTable(e)
    })
}

function openModalWindowOrderForFildSell(res){
    const content = $(".modal-content")
    content.children("form").remove()
    const contentForm = content.append("<form id='clientAdd'></form>").children("form")
    contentForm.append("<h3>Номер</h3>")
    contentForm.append(`<p>${res.id}</p>`)
    contentForm.append("<h3>Тип оплаты</h3>")
    contentForm.append(`<p>${res.payType}</p>`)
    contentForm.append("<h3>Статус оплаты</h3>")
    contentForm.append(`<p>${res.isPay}</p>`)
    contentForm.append("<h3>Сумма</h3>")
    contentForm.append(`<p>${res.paySum}</p>`)
    contentForm.append("<h3>Номер комнаты</h3>")
    contentForm.append(`<p>${res.roomNumber.number}</p>`)
    contentForm.append("<h3>Дата</h3>")
    contentForm.append(`<p>${res.datePer.startDate} - ${res.datePer.endDate}</p>`)
    contentForm.append("<h3>Клиент</h3>")
    contentForm.append(`<p>${res.client.FIO}</p>`)
    contentForm.append("<h3>Описание</h3>")
    contentForm.append(`<p>${res.description}</p>`)
    modal.css({"display":"block"}); 
    closeBtn.focus();
}