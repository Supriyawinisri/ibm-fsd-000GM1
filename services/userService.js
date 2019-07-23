const product = require('../db/users').product;
const Email = require('../services/emailservice').Email;
const email = new Email();
class UserService{
    constructor(){
        this.product = product;
    }
    _all(){
        return this.product;
    }

    buy(data){
        let userObj ={
            subject : "User Registration",
            body : `<div>Dear <b>${data.name}</b></div>
                    <div>Your order will reach soon to the address: ${data.address}.</div>
                    <div>Thank you for ordering.</div>`,
            from : null,
            to : data.email
        }
        email.emailWithAttachment(userObj)
    }
    
}


    

module.exports.UserService = UserService;