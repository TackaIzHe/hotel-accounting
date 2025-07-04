function tablefilds(tableId, body){
    $(tableId).children().remove()
    const thead = $(tableId).append("<thead></thead>").children("thead");
        const tr = thead.append("<tr></tr>").children("tr")
        for(let x in body.at()){
            tr.append(`<th>${x}</th>`).children("th").css({"border":"2px black solid"})
        }
        const tbody = $(tableId).append("<tbody></tbody>").children("tbody");
        body.map((x,i)=>{
            const trBody = tbody.append("<tr></tr>").children("tr")[i]
            for(let prop in x){
                $(trBody).append(`<td>${x[prop]}</td>`).children("td").css({"border":"2px black solid"})
            }
        })
}

function tableZapFilds(tableId, body, date){
    $(tableId).children().remove()
    const thead = $(tableId).append("<thead></thead>").children("thead");
        const tr = thead.append("<tr></tr>").children("tr")
        for(let i =0; i<date+1;i++){
            tr.append(`<th>${i}</th>`).children("th").css({"border":"2px black solid"})
        }
        // const tbody = $(tableId).append("<tbody></tbody>").children("tbody");
        // body.map((x,i)=>{
        //     const trBody = tbody.append("<tr></tr>").children("tr")[i]
        //     for(let prop in x){
        //         $(trBody).append(`<td>${x[prop]}</td>`).children("td").css({"border":"2px black solid"})
        //     }
        // })
}