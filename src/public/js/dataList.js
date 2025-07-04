$(document).ready(async()=>{
    fildClientDataList()
    fildOrderDataList()
    fildRoomDataList()
    fildMounthDataList()
})

async function fildClientDataList(){
    $('#clientslist').children().remove()
    const res = await getEntity("/clients")
    res.map(async(x)=>{
        $('#clientslist').append(`<option value='${x.Номер} ${x.ФИО}'></option>`)
    })
}

async function fildOrderDataList(){
    $('#orderslist').children().remove()
    const resOrder = await getEntity("/orders")
    resOrder.map(async(x)=>{
        const resClient = await getEntity(`/clients/${x.Клиент}`)
        $('#orderslist').append(`<option value='${x.Номер} ${resClient.FIO}'></option>`)
    })
}

async function fildRoomDataList(){
    $('#roomslist').children().remove()
    const res = await getEntity("/rooms")
    res.map(async(x)=>{
        $('#roomslist').append(`<option value='${x.Номер_Комнаты}'></option>`)
    })
}

async function fildMounthDataList(){
    for(let prop in mounths){
        $('#mounthslist').append(`<option value='${prop}'></option>`)
    }
}