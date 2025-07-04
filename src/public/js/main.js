$("#clients").click(async()=>{
    const div = $("#clientDiv");
    const addBut = $("#openModalBtn")
    addBut.text("Добовить Клиента")
    // if(div.css("display") == "block"){
    //     div.css({"display":"none"})
    // }
    // else if(div.css("display") == "none"){
        div.css({"display":"block"})
        
        tablefilds("#clientTable",await getEntity("/clients"))
    // }
    
})

$("#orders").click(async()=>{
    const div = $("#clientDiv");
    const addBut = $("#openModalBtn")
    addBut.text("Добовить Заказ")
    // if(div.css("display") == "block"){
    //     div.css({"display":"none"})
    // }
    // if(div.css("display") == "none"){
        div.css({"display":"block"})
        
        tablefilds("#clientTable",await getEntity("/orders"))
    // }
    
})

$("#rooms").click(async()=>{
    const div = $("#clientDiv");
    const addBut = $("#openModalBtn")
    addBut.text("Добовить Комнату")
    // if(div.css("display") == "block"){
    //     div.css({"display":"none"})
    // }
    // if(div.css("display") == "none"){
        div.css({"display":"block"})
        
        tablefilds("#clientTable",await getEntity("/rooms"))
    // }
    
})

$("#expenses").click(async()=>{
    const div = $("#clientDiv");
    const addBut = $("#openModalBtn")
    addBut.text("Добовить Расходы")
    // if(div.css("display") == "block"){
    //     div.css({"display":"none"})
    // }
    // if(div.css("display") == "none"){
        div.css({"display":"block"})
        
        tablefilds("#clientTable",await getEntity("/orders"))
    // }
    
})

$("#incomes").click(async()=>{
    const div = $("#clientDiv");
    const addBut = $("#openModalBtn")
    addBut.text("Добовить Доходы")
    // if(div.css("display") == "block"){
    //     div.css({"display":"none"})
    // }
    // if(div.css("display") == "none"){
        div.css({"display":"block"})
        
        tablefilds("#clientTable",await getEntity("/orders"))
    // }
    
})

$("#filds").click(async()=>{
    const div = $("#clientDiv");
    const addBut = $("#openModalBtn")
    addBut.text("Посмотреть таблицу заполнености")
    // if(div.css("display") == "block"){
    //     div.css({"display":"none"})
    // }
    // if(div.css("display") == "none"){
        div.css({"display":"block"})
        tableZapFilds("#clientTable",await getEntity("/rooms"),-1)
    // }
    
})

async function getEntity(curl){
    const res = await (await httpMet.bodyFetch(curl)).text()
    const body = JSON.parse(res)
    return body
}