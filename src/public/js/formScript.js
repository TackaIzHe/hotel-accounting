async function addClientAction(e){
    e.preventDefault();
    const form = $("#clientAdd");
    const fio = form.children("#fio")
    const tel = form.children("#tel")
    const city = form.children("#city")
    const description = form.children("#description")
    if(!fio.val() || !tel.val() || !city.val()){
        $(".modal-content #suc").css({"display":"none"})
        $(".modal-content #error").css({"display":"block"})
        return
    }
    const res = await httpMet.bodyFetch("/clients","POST",JSON.stringify(
        {
            FIO:fio.val(),
            tel:tel.val(),
            city:city.val(),
            description:description.val()
        }
    ))
    if(res.ok){
        fio.val("")
        tel.val("")
        city.val("")
        description.val("")
        $(".modal-content #error").css({"display":"none"})
        $(".modal-content #suc").css({"display":"block"})
        tablefilds("#clientTable",await getClients())
    }
    else{
        $(".modal-content #suc").css({"display":"none"})
        $(".modal-content #error").css({"display":"block"})
    }
}