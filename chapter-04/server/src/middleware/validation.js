const  {cars}  = require('../../models');

const validation = async (req , res , next) => {

    const id = req.params['id'];

    const isExisting = await cars.findOne({ where: { id: id } });
    
    if(isExisting === null){
        return res.status(404).json({message : "car not found"});
    }

    next()

}

const createValidation = (req , res , next) => {

    if( req.file == null ){
        return res.status(404).json({message : `Image is Undefined , Please check your input ! `});
    }
    
    const body = JSON.parse((req.body.data));

    if( req.file == null ){
        return res.status(404).json({message : `Image is Undefined , Please check your input ! `});
    }

    const image = req.file.buffer;
    
    const requireData = [ 'name' , 'rentPerDay' , 'size'];

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

        if(Object.keys(body).length < 3 || Object.keys(body).length > 3  ){

            return res.status(404).json({message : `Invalid data structure. Please check your input  `});
        }

        const isChecked = Object.keys(body).every((key , i)=>{
            return key === requireData[i];
        });


        if(!isChecked){
            return res.status(404).json({message : `Invalid data structure. Please check your input and must to be ${requireData} `});
        }
    }

    req.data = body ;
    req.fileImage = image; 

    next();

}

const updateValidation = async(req , res , next) => {

    const id = req.params['id'];
    let body = req.body.data;
    const image = req.file;

    const requireData = [ 'name' , 'rentPerDay' , 'size'  ];

    const isExisting = await cars.findOne({ where: { id: id } });

    if(isExisting === null){
        return res.status(404).json({message : "car not found"});
    }
    
    if(body != null){

        body = JSON.parse(req.body.data);
    
        const isChecked = Object.keys(body).map((key)=>{
            return requireData.indexOf(key) ;
        })
    
        if( isChecked.indexOf(-1) > -1 ){
            return res.status(404).json({message : 'Invalid data structure. Please check your input '});
        }
    }

    if(image != null && body != null  ){
        req.data = {...body , image : image.buffer  };
    }else if(image != null && body == null){
        req.data = { image : image.buffer };
    }else if(image == null && body != null){
        req.data = body;
    }else if(image == null && body != null){
        req.data = body;
    }
    next();

}

module.exports = {
    validation,
    createValidation,
    updateValidation,
};