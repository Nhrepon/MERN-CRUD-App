import axios from 'axios';

export function CreateServices(ProductName, ProductCode, ProductImg, UnitPrice, Qty, TotalPrice){
    let url="/api/createProducts";
    let postBody={
        ProductName: ProductName,
        ProductCode: ProductCode,
        ProductImg: ProductImg,
        UnitPrice: UnitPrice,
        Qty: Qty,
        TotalPrice: TotalPrice
    }
    return axios.post(url, postBody).then((res)=>{
        if(res.status===200){
            return true;
        }else {
            return false;
        }
    }).catch((err)=>{
        console.log(err);
        return false;
    })
}


export function ReadServices(){
    let url="/api/readProducts";
    return axios.get(url).then((res)=>{
        if (res.status===200){
            return res.data['data'];
        }else {
            return false;
        }
    }).catch((err)=>{
        console.log(err);
        return false;
    })
}






export function ReadByIdServices(id){
    let url="/api/readProductsById/"+id;
    return axios.get(url).then((res)=>{
        if (res.status===200){
            return res.data['data'];
        }else {
            return false;
        }
    }).catch((err)=>{
        console.log(err);
        return false;
    })
}





export function UpdateServices(id,ProductName, ProductCode, ProductImg, UnitPrice, Qty, TotalPrice){
    let url="/api/updateProducts/"+id;
    let postBody={
        ProductName: ProductName,
        ProductCode: ProductCode,
        ProductImg: ProductImg,
        UnitPrice: UnitPrice,
        Qty: Qty,
        TotalPrice: TotalPrice
    }
    return axios.post(url, postBody).then((res)=>{
        if(res.status===200){
            return true;
        }else {
            return false;
        }
    }).catch((err)=>{
        console.log(err);
        return false;
    })
}



export function DeleteServices(id){
    const url=`/api/deleteProducts/${id}`;

    return axios.post(url).then((res)=>{
        if(res.status===200){
            return true;
        }else {
            return false;
        }
    }).catch((err)=>{
        console.log(err);
        return false;
    })
}






