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
        
        tablefilds("#clientTable",await getEntity("/expenses"))
    // }
    
})

$("#incomes").click(async()=>{
    const div = $("#clientDiv");
    const addBut = $("#openModalBtn")
    addBut.text("Добовить Доход")
    // if(div.css("display") == "block"){
    //     div.css({"display":"none"})
    // }
    // if(div.css("display") == "none"){
        div.css({"display":"block"})
        
        tablefilds("#clientTable",await getEntity("/incomes"))
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

async function orderSell(id){
    console.log(1)
    const res = await getEntity(`/orders/${id}`)
    openModalWindowOrderForFildSell(res)
}

async function getEntity(curl){
    const res = await (await httpMet.bodyFetch(curl)).text()
    const body = JSON.parse(res)
    return body
}