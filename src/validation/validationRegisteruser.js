import validator from "validator";


const validationRegisterUserinput = (data) => {
    let errors= {};
    const {username, email, password, password2}= data;
    


    if(validator.isEmpty(username)){
        errors.username="Username field in required"
    }
    if(validator.isEmpty(email)){
        errors.email="email field in required"
    }
    if(validator.isEmpty(password)){
        errors.password="password field in required"
    }
    if(validator.isEmpty(password2)){
        errors.password2="Confirm password field in required"
    }
    
    return {
        isInvalid:Object.keys(errors).length >0 ,
        errors:errors,
    };
} ;


export default validationRegisterUserinput;