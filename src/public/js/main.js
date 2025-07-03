$("#clients").click(async()=>{
    const div = $("#clientDiv");
    if(div.css("display") == "block"){
        div.css({"display":"none"})
    }
    else if(div.css("display") == "none"){
        div.css({"display":"block"})
        
        tablefilds("#clientTable",await getClients())
    }
    
})
async function getClients(){
    const res = await (await httpMet.bodyFetch("/clients")).text()
    const body = JSON.parse(res)
    return body
}