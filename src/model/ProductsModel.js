const mongoose=require('mongoose');

const databaseSchema=mongoose.Schema({
    ProductName:{type:String},
    ProductCode:{type:String},
    ProductImg:{type:String},
    UnitPrice:{type:String},
    Qty:{type:String},
    TotalPrice:{type:String}
},{timestamps:true, versionKey:false});

const ProductsModel=mongoose.model("products", databaseSchema);
module.exports = ProductsModel;