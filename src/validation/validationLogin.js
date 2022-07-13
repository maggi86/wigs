import validator from "validator";


const validationLogin = (data) => {
    let errors= {};
    const {username, password}= data;

    if(validator.isEmpty(username)){
        errors.username="Username field in required"
    }
    if(validator.isEmpty(password)){
        errors.password="password field in required"
    }
    
    return {
        isInvalid:Object.keys(errors).length >0 ,
        errors:errors,
    };
} ;


export default validationLogin;