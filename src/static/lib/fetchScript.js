class httpMet{
    static async bodyFetch(curl, method="GET", body){
        const res = await fetch(curl,{
            headers:{"Content-type":"application/json"},
            method:method,
            body:body
        })
        return res
    }
}