const ServicesPath = {
    USER_SERVICES : "user-service/api/v1/"
}


const ApiPath = {
    Auth:{
        SOCIAL_LOGIN: ServicesPath.USER_SERVICES+"user/social-login"
    },
    Web:{
        Subscribe: ServicesPath.USER_SERVICES+ "subscriber",
        UPDATE_USER: ServicesPath.USER_SERVICES+ "user/update-user"
    }

};



export default ApiPath;
