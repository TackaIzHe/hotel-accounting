function tablefilds(tableId, body) {
    $(tableId).children().remove()
    const thead = $(tableId).append("<thead></thead>").children("thead");
    const tr = thead.append("<tr></tr>").children("tr")
    for (let x in body.at()) {
        tr.append(`<th>${x}</th>`).children("th").css({ "border": "2px black solid" })
    }
    const tbody = $(tableId).append("<tbody></tbody>").children("tbody");
    body.map((x, i) => {
        const trBody = tbody.append("<tr></tr>").children("tr")[i]
        for (let prop in x) {
            $(trBody).append(`<td>${x[prop]}</td>`).children("td").css({ "border": "2px black solid" })
        }
    })
}

async function tableZapFilds(tableId, body, dateLenght, year, mounth) {
    $(tableId).children().remove()
    const curentDate = new Date(year,mounth,1)
    const thead = $(tableId).append("<thead></thead>").children("thead");
    const tr = thead.append("<tr></tr>").children("tr")
    for (let i = 0; i < dateLenght + 1; i++) {
        tr.append(`<th>${i}</th>`).children("th").css({ "border": "2px black solid" })
    }
    const tbody = $(tableId).append("<tbody></tbody>").children("tbody");
    body.map(async (x, i) => {
            const trBody = tbody.append("<tr></tr>").children("tr")[i]
            $(trBody).append(`<td>${x.Номер_Комнаты}</td>`).children("td").css({ "border": "2px black solid" })
            for (let i = 1; i < dateLenght + 1; i++) {
                $(trBody).append(`<td>0</td>`).children("td").css({ "border": "2px black solid" })
            }
                for (let Заказ of x.Заказы) {
                    const order = await (await httpMet.bodyFetch(`/orders/${Заказ}`)).text()
                    const parseBody = JSON.parse(order)
                    const parseStartDay = new Date(parseBody.datePer.startDate)
                    const parseEndDay = new Date(parseBody.datePer.endDate)
                    if ((parseStartDay.getMonth() == curentDate.getMonth()) ||
                        (parseEndDay.getMonth() == curentDate.getMonth()) ||
                        (parseEndDay > curentDate &&
                        parseStartDay < curentDate)
                    ) {
                        for(let count = 1;count<= $(trBody).children().length;count++){
                            const countDay = new Date(year,mounth,count);
                            if (parseStartDay <= countDay && parseEndDay >= countDay){
                                const fildSell = $($(trBody).children()[count])
                                fildSell.attr({"id":"day"}).text(parseBody.id)
                                fildSell.click(async()=>orderSell(parseBody.id))
                                continue
                            }
                            if(count >= parseEndDay){
                                break;
                            }
                        }
                        
                    }
                }
            })
}