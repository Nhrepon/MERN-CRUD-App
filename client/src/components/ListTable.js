import React, {useEffect, useState} from 'react';
import {DeleteServices, ReadServices} from "../services/CrudServices";
import Loader from "./loader/loader";
import {ErrorToast} from "../helper/ValidationHelper";
import { useNavigate } from 'react-router';
import {Toaster} from "react-hot-toast";


const ListTable = () => {

    const navigation = useNavigate();
    const [Data, SetData]=useState([]);




    useEffect(() => {

        ReadItem();

    }, []);





    // Read product
    const ReadItem=()=>{
        ReadServices().then((Result)=>{
            SetData(Result);
        });
    }




    const UpdateItem=(id)=>{
        navigation("/update/"+id);
    }




    const DeleteItem=(id)=>{
        DeleteServices(id).then((result)=>{
            if (result===true){

                ReadItem();
                ErrorToast("Delete Product success ...");
            }else {
                ErrorToast("Delete Failed ... ")
            }
        })
    }







    if(Data.length>0){
        return (
            <div className="table-responsive-sm">
                <table className="table table-striped table-bordered">
                    <thead>
                    <tr>
                        <th>Product Name</th>
                        <th>Product Code</th>
                        <th>Product Image</th>
                        <th>Unit Price</th>
                        <th>Quantity</th>
                        <th>Total Price</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        Data.map((item)=>{
                            return (
                                <tr>
                                    <td className="align-content-center">{item.ProductName.slice(0, 40)}</td>
                                    <td className="align-content-center">{item.ProductCode}</td>
                                    <td className="align-content-center"><img src={item.ProductImg} style={{width:'150px', height:'auto'}} alt={item.ProductName}/></td>
                                    <td className="align-content-center">{item.UnitPrice}</td>
                                    <td className="align-content-center">{item.Qty}</td>
                                    <td className="align-content-center">{item.TotalPrice}</td>

                                    <td className="align-content-center">
                                        <button onClick={UpdateItem.bind(this, item._id)}
                                                className="btn btn-success m-2">
                                            <i className="bi bi-pencil-square"></i>
                                        </button>
                                        <button onClick={DeleteItem.bind(this, item._id)}
                                                className="btn btn-danger m-2">
                                            <i className="bi bi-trash"></i>
                                        </button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                    </tbody>
                </table>
                <Toaster/>
            </div>
        );
    }else {
        return (
            <div>
                <Loader/>
            </div>
        )
    }


};

export default ListTable;