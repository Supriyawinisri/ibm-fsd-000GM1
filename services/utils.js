const utils = {
    smtp : {
        provider : 'gmail',
        address :  'supriyawinisri1012@gmail.com',
        password : 'Shanmugapriya@1012'
    }
}

const setContentHeader = (res)=>{
    res.setHeader('content-type','application/json');
};

module.exports.setContentHeader = setContentHeader;
module.exports.utils = utils;