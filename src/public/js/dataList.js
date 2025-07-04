$(document).ready(async()=>{
    fildDataList()
})

async function fildDataList(){
    $('datalist').children().remove()
    const res = await getEntity("/clients")
    res.map(async(x)=>{
        $('datalist').append(`<option value='${x.Номер} ${x.ФИО}'></option>`)
    })
}