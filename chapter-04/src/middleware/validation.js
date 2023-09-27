const { Cars } = require('../middleware/migration');

const validation = async (req , res , next) => {

    const id = req.params['id'];

    const isExisting = await Cars.findOne({ where: { id: id } });
    
    if(isExisting === null){
        return res.status(404).json({message : "car not found"});
    }

    next()

}

const createValidation = (req , res , next) => {

    const body = req.body;

    const requireData = [ 'name' ,'image' , 'size' , 'rentPerDay' , 'description' ];

    if(Array.isArray(body)){
        const isCheckedData = body.map((car)=> { 
            const currentData = Object.keys(car);
                return currentData.every((key , i)=>{
                    return key === requireData[i];
                })
        })

        if(isCheckedData.indexOf(false) > -1){
            return res.status(404).json({message : `Invalid data structure. Please check your input and must to be ${requireData} `});
        }
    }else{
        const isChecked = Object.keys(body).every((key , i)=>{
            return key === requireData[i];
        });

        if(!isChecked){
            return res.status(404).json({message : `Invalid data structure. Please check your input and must to be ${requireData} `});
        }
    }

    req.data = req.body ;

    next();

}

const updateValidation = async(req , res , next) => {

    const id = req.params['id'];
    const body = req.body;

    const requireData = [ 'name' ,'image' , 'size' , 'rentPerDay' , 'description' ];

    const isExisting = await Cars.findOne({ where: { id: id } });

    if(isExisting === null){
        return res.status(404).json({message : "car not found"});
    }
    
    const isChecked = Object.keys(body).map((key)=>{
        return requireData.indexOf(key) ;
    })

    if( isChecked.indexOf(-1) > -1 ){
        return res.status(404).json({message : 'Invalid data structure. Please check your input '});
    }

    req.data = req.body ;

    next();

}


module.exports = {
    validation,
    createValidation,
    updateValidation,
};