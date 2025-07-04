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
        tablefilds("#clientTable",await getEntity("/clients"))
        fildClientDataList()
    }
    else{
        $(".modal-content #suc").css({"display":"none"})
        $(".modal-content #error").css({"display":"block"})
    }
}

async function addOrderAction(e){
    e.preventDefault();
    const form = $("#clientAdd");
    const payType = form.children("#payType")
    const isPay = form.children("#isPay")
    const paySum = form.children("#paySum")
    const startDate = form.children("#startDate");
    const endDate = form.children("#endDate");
    const client=form.children("#client");
    const roomNumber=form.children("#room");
    const description = form.children("#description")
    if(!payType.val() || !paySum.val() || !startDate.val() || !endDate.val() || !client.val()){
        $(".modal-content #suc").css({"display":"none"})
        $(".modal-content #error").css({"display":"block"})
        return
    }
    else if(new Date(startDate.val())<new Date() || new Date(endDate.val()) < new Date()){
        $(".modal-content #suc").css({"display":"none"})
        $(".modal-content #error").css({"display":"block"})
        return 
    }
    else if(new Date(startDate.val()) > new Date(endDate.val())){
        $(".modal-content #suc").css({"display":"none"})
        $(".modal-content #error").css({"display":"block"})
        return 
    }
    const res = await httpMet.bodyFetch("/orders","POST",JSON.stringify(
        {
            payType:payType.val(),
            isPay:isPay.prop('checked'),
            paySum:paySum.val(),
            startDate:startDate.val(),
            endDate:endDate.val(),
            id:Number.parseInt(client.val().split(' ')[0]),
            room:roomNumber.val(),
            description:description.val()
        }
    ))
    if(res.ok){
        paySum.val("")
        startDate.val("")
        endDate.val("")
        client.val("")
        description.val("")
        $(".modal-content #error").css({"display":"none"})
        $(".modal-content #suc").css({"display":"block"})
        tablefilds("#clientTable",await getEntity("/orders"))
        fildOrderDataList()
    }
    else{
        $(".modal-content #suc").css({"display":"none"})
        $(".modal-content #error").css({"display":"block"})
    }
}

async function addRoomAction(e){
    e.preventDefault();
    const form = $("#clientAdd");
    const number = $("#number")
    const description = form.children("#description")
    if(!number.val()){
        $(".modal-content #suc").css({"display":"none"})
        $(".modal-content #error").css({"display":"block"})
        return
    }
    const res = await httpMet.bodyFetch("/rooms","POST",JSON.stringify(
        {
            number:number.val(),
            description:description.val()
        }
    ))
    if(res.ok){
        number.val("")
        description.val("")
        $(".modal-content #error").css({"display":"none"})
        $(".modal-content #suc").css({"display":"block"})
        tablefilds("#clientTable",await getEntity("/rooms"))
        fildRoomDataList()
    }
    else{
        $(".modal-content #suc").css({"display":"none"})
        $(".modal-content #error").css({"display":"block"})
    }
}

async function getZapTable(e){
    e.preventDefault();
    const form = $("#clientAdd");
    const mounth = $("#mounth")
    const year = form.children("#year")
    if(!mounth.val() || !year.val()){
        $(".modal-content #suc").css({"display":"none"})
        $(".modal-content #error").css({"display":"block"})
        return
    }
    const res = await httpMet.bodyFetch("/rooms")//,"POST"//,JSON.stringify(
    //     {
    //         // number:number.val(),
    //         // description:description.val()
    //     }
    // ))
    if(res.ok){
        // number.val("")
        // description.val("")
        $(".modal-content #error").css({"display":"none"})
        $(".modal-content #suc").css({"display":"block"})
        const parseYear = Number.parseInt(year.val())
        const getCountDay = 
        (new Date(parseYear,mounths[mounth.val()]+1,1).getTime()- new Date(parseYear,mounths[mounth.val()],0).getTime())/1000/60/60/24-1
        console.log(parseYear)
        tableZapFilds("#clientTable",await getEntity("/rooms"), getCountDay)
    }
    else{
        $(".modal-content #suc").css({"display":"none"})
        $(".modal-content #error").css({"display":"block"})
    }
}