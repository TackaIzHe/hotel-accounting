const modal = $("#myModal");
const btn = $("#openModalBtn");
const closeBtn = $(".close");
const sucText = $(".modal-content #suc")
const errorText = $(".modal-content #error")

// Открыть модальное окно при клике на кнопку
btn.click("click", () => {
    openModalWindowAddClient()
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
    const title = content.children("#modalTitle")
    title.text("Добавление клиента")
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