const validation = (userData) => {
    const errors = {}

    if(!/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/i.test(userData.email)){
        errors.email = 'el email ingresado no es válido'
    }
    if (!userData.email){
        errors.email = 'debe ingresar un email'
    }
    if(userData.email.length > 35) {
        errors.email = 'el email no debe superar los 35 caracteres'
    }
    if(!/.*\d+.*/.test(userData.password)){
        errors.password = 'la contraseña debe contener al menos un número'
    }
    if(userData.password.length < 6 || userData.password.length> 10) {
        errors.password = 'la contraseña debe tener entre 6 y 10 caracteres'
    }
    
    return errors;
}



export default validation;