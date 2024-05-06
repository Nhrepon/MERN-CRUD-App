const ProductsModel = require("../model/ProductsModel");


exports.createProducts=async (req, res)=>{
    try {
        const reqBody=req.body;
        const data=await ProductsModel.create(reqBody);
        res.status(200).json({status:"Success", data:data});
    }catch (error) {
        res.status(400).json({status:"Failed", message:error});
    }
}








exports.readProducts=async (req, res)=>{
    try {
        const data=await ProductsModel.find();
        res.status(200).json({status:"Success", data:data});
    }catch (error){
        res.status(400).json({status:"Success", message:error});
    }
}






exports.readProductsById=async (req, res)=>{
    try {
        const {id}=req.params;
        const data=await ProductsModel.find({_id:id});
        res.status(200).json({status:"Success", data:data});
    }catch (error){
        res.status(400).json({status:"Success", message:error});
    }
}









exports.deleteProducts=async (req, res)=>{
    try {
        const {id}=req.params;
        const data=await ProductsModel.deleteOne({_id:id});
        res.status(200).json({status:"Success", data:data});
    }catch (error){
        res.status(400).json({status:"Success", message:error});
    }
}










exports.updateProducts=async (req, res)=>{
    try {
        const {id}=req.params;
        const reqBody=req.body;
        const data=await ProductsModel.updateOne({_id:id}, reqBody);
        res.status(200).json({status:"Success", data:data});
    }catch (error){
        res.status(400).json({status:"Success", message:error});
    }
}