const UserServices = require('../services/userServices');
const AuthServices = require('../services/authServices');

const getListUsers = async (req , res) => {
    try {
        const data = await UserServices.getListUsers();
        return res.status(200).json(data);
    } catch (error) {
        return res.json({
            status: 'FAIL',
            message : error.message
        })
    }
}


/**
 * 
 * authentication method
 * 
 * */ 

const login = async (req,res) => {
    try{
        const user = req.user;
        const session = req.session;

        const token = await AuthServices.getToken({id : user.id});

        AuthServices.setSession(
            session,
            true,
            token);

        return res.status(200).json({
            status : 'OK',
            message : 'Authentication is successfull',
            token: token,
        });

    }catch(error){
        return res.status(404).json({
                status: 'FAIL',
                message: error.message,
        })      
    }
    
}

const registration = async ( req , res ) => {
    const payload = req.user;
    const  user = await UserServices.createUser(payload);
    
    return res.status(200).json({
        status : 'OK',
        message: 'registration is successfull',
        data: user,
    });
}

const registrationValidation = async (req, res , next ) => {
    try {
        const {  name, phone , address , role , email , password  } = req.body;
        
        if(!name || !email || !password || !role){
            return res.status(404).json({
                status : 'FAIL',
                message : 'Please check your input '
            })
        }
        
        const emailExist = await UserServices.findUserByEmail(email);

        if(emailExist){
            return res.status(403).json({
                status : 'FAIL',
                message : 'Email is Exist, please repeat your input'
            })
        }

        const hashedPass = await AuthServices.encryptUserPassword(password);

        req.user = {
            name : name,
            phone : phone,
            address : address,
            role : role ,
            email : email ,
            password : hashedPass, 
        };

        next();

    } catch (error) {
        return res.status(404).json({
            status: 'FAIL',
            message: error.message,
        })
    }
}

const loginValidation = async (req,res,next) => {

    try{
        const user = req.body;

        if(!user.email || !user.password){
            return res.status(404).json({
                status : 'FAIL',
                message: 'please input email & pasword' 
            });
        }
    
        const emailExist = await UserServices.findUserByEmail(user.email);
    
        if(!emailExist){
            return res.status(404).json({
                status : 'FAIL',
                message: 'email is not exist or not correct' 
            });
        }
    
        const checkedPass = await AuthServices.compareUserPassword(user.password , emailExist.password );
    
        if(!checkedPass){
            return res.status(404).json({
                status: 'FAIL',
                message:'password is wrong, please check your input !!'
            })
        }

        const session = req.session;

        if(session.authenticated){
            return res.status(200).json({
                status : 'OK',
                message : 'Your account has been authenticated',
                token: session.token,
            })
        }


        req.user = emailExist.dataValues;
        
        next()
            
    }catch(error){
        return res.status(404).json({
                status: 'FAIL',
                message: error.message,
        })
    }

}

const authorization = (handler) => {
    return async (req,res,next) => {

        const authorizationHeader = req.headers['authorization'];
    
        if ( !authorizationHeader ) {
            return res.status(404).json({ 
                status: 'FAIL',
                message: 'Authorization header is missing '
            });
        }
    
        const token = authorizationHeader.replace('Bearer ', '');
    
        try{
            const decoded = AuthServices.decodeToken(token);
    
            const now = Math.floor(Date.now() / 1000);
    
            const expTime = decoded.exp;
    
            if ( expTime - now < 60 * 30 ) {
                const newToken = AuthServices.getNewToken(decoded) ;
                res.setHeader('Authorization', `Bearer ${newToken}`);
            }
    
            const userId = decoded.id;
    
            const user = await UserServices.findUserById(userId);
    
            if(!user){
                return res.status(403).json({ 
                    status: 'FAIL',
                    message: 'You do not have permission to access this resource.'
                });            
            }
    
            req.user = user;
            return handler(req , res ,next )
                
        }catch( error ){
            return res.status(401).json({ 
                status:'FAIL',
                message: 'invalid token'
            });
        }
        
    }

}

const getCurrentUser = authorization(
    handler = async (req,res)=>{

        const userId = req.user.id;
    
        const currentUser = await UserServices.findUserById(userId);
    
        return res.status(200).json({
            status : 'OK',
            message : 'current user data is successfull',
            data : currentUser,    
        })
    }
);

const authorizationAdmin = authorization(
        handler = async (req,res,next) =>{
    
            const user = req.user;

            if(user.role != 'admin'){
                return res.status(403).json({ 
                    status: 'FAIL',
                    message: 'You dont has been permission for this action'
                });    
            }

            next();
        }
    );

module.exports = {
    getCurrentUser,
    getListUsers,
    login,
    loginValidation,
    registration,
    registrationValidation,
    authorization,
    authorizationAdmin,
}






