$('form').submit(async(e)=>{
    e.preventDefault()
    const login = $('#login').val()
    const password = $('#password').val()
    if(!login || !password){
        console.log(1)
    }
    httpMet.bodyFetch('/users/login','POST',JSON.stringify({
        login:login,
        password:password
    }))
})