import React, {useEffect, useRef} from 'react';
import Loader from "./loader/loader";
import {Toaster} from "react-hot-toast";
import {ErrorToast, isEmpty, SuccessToast} from "../helper/ValidationHelper";
import {ReadByIdServices, UpdateServices} from "../services/CrudServices";

const UpdateForm = (props) => {

    let ProductName, ProductCode, ProductImg, UnitPrice, Qty, TotalPrice, loader=useRef();
    const UpdateData=()=>{
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
            UpdateServices(props.id, PName,PCode,PImg,PPrice,PQty,PTotalPrice).then((result)=>{
                if (result===true){
                    loader.classList.add("d-none");
                    SuccessToast("Data Update success ... ")
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


    useEffect(() => {
        ReadByIdServices(props.id).then((Result)=>{
            ProductName.value=Result[0]['ProductName']
            ProductCode.value=Result[0]['ProductCode']
            ProductImg.value=Result[0]['ProductImg']
            UnitPrice.value=Result[0]['UnitPrice']
            Qty.value=Result[0]['Qty']
            TotalPrice.value=Result[0]['TotalPrice']
        })
    }, []);



    return (


        <div className="container">
            <div className="row">
                <div className="col-sm-4 p-2">
                    <label>Product Name</label>
                    <input ref={(input) => ProductName = input} type="text" className="form-control my-2"/>
                </div>
                <div className="col-sm-4 p-2">
                    <label>Product Code</label>
                    <input ref={(input) => ProductCode = input} type="text" className="form-control my-2"/>
                </div>
                <div className="col-sm-4 p-2">
                    <label>Product Image</label>
                    <input ref={(input) => ProductImg = input} type="text" className="form-control my-2"/>
                </div>
                <div className="col-sm-4 p-2">
                    <label>Unit Price</label>
                    <input ref={(input) => UnitPrice = input} type="number" className="form-control my-2"/>
                </div>
                <div className="col-sm-4 p-2">
                    <label>Qty</label>
                    <input ref={(input) => Qty = input} type="number" className="form-control my-2"/>
                </div>
                <div className="col-sm-4 p-2">
                    <label>Product Total Price</label>
                    <input ref={(input) => TotalPrice = input} type="number" className="form-control my-2"/>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-4">
                    <button onClick={UpdateData} type="button" className="btn btn-primary w-100">Save</button>
                </div>
            </div>
            <div ref={(div) => loader = div} className="d-none"><Loader/></div>
            <Toaster/>
        </div>
    );
};

export default UpdateForm;