import React, {useRef} from 'react';
import {ErrorToast, isEmpty, SuccessToast} from "../helper/ValidationHelper";
import {Toaster} from "react-hot-toast";
import {CreateServices} from "../services/CrudServices";
import Loader from "./loader/loader";


const CreateForm = () => {

    let ProductName, ProductCode, ProductImg, UnitPrice, Qty, TotalPrice, loader=useRef();
    const SaveData=()=>{
        let PName=ProductName.value;
        let PCode=ProductCode.value;
        let PImg=ProductImg.value;
        let PPrice=UnitPrice.value;
        let PQty=Qty.value;
        let PTotalPrice=TotalPrice.value;

        if (isEmpty(PName)){
            ErrorToast("Product Name Required ... ");
        }else if (isEmpty(PCode)){
            ErrorToast("Product Code Required ... ");
        }else if (isEmpty(PImg)){
            ErrorToast("Product Image Required ... ");
        }else if (isEmpty(PPrice)){
            ErrorToast("Product Price Required ... ");
        }else if (isEmpty(PQty)){
            ErrorToast("Product Quantity Required ... ");
        }else if (isEmpty(PTotalPrice)){
            ErrorToast("Product Total Price Required ... ");
        }else {
            loader.classList.remove("d-none");
            CreateServices(PName,PCode,PImg,PPrice,PQty,PTotalPrice).then((result)=>{
                if (result===true){
                    loader.classList.add("d-none");
                    SuccessToast("Data create success ... ")

                    ProductName.value="";
                    ProductCode.value="";
                    ProductImg.value="";
                    UnitPrice.value="";
                    Qty.value="";
                    TotalPrice.value="";
                }else {
                    ErrorToast("Request Failed. Please, Try again ... ")
                }
            })
        }
    }


    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-4 p-2">
                    <label>Product Name</label>
                    <input ref={(input)=>ProductName=input} type="text" className="form-control my-2"/>
                </div>
                <div className="col-sm-4 p-2">
                    <label>Product Code</label>
                    <input ref={(input)=>ProductCode=input} type="text" className="form-control my-2"/>
                </div>
                <div className="col-sm-4 p-2">
                    <label>Product Image</label>
                    <input ref={(input)=>ProductImg=input} type="text" className="form-control my-2"/>
                </div>
                <div className="col-sm-4 p-2">
                    <label>Unit Price</label>
                    <input ref={(input)=>UnitPrice=input} type="number" className="form-control my-2"/>
                </div>
                <div className="col-sm-4 p-2">
                    <label>Qty</label>
                    <input ref={(input)=>Qty=input} type="number" className="form-control my-2"/>
                </div>
                <div className="col-sm-4 p-2">
                    <label>Product Total Price</label>
                    <input ref={(input)=>TotalPrice=input} type="number" className="form-control my-2"/>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-4">
                    <button onClick={SaveData} type="button" className="btn btn-primary w-100">Save</button>
                </div>
            </div>
            <div ref={(div)=>loader=div} className="d-none"><Loader/> </div>
            <Toaster/>
        </div>
    );
};

export default CreateForm;