import React from 'react';
import UpdateForm from "../components/UpdateForm";
import NavigationBar from "../components/common/NavigationBar";
import {useParams} from "react-router";

const UpdatePage = () => {

    const params=useParams();



    return (
        <div>
            <NavigationBar/>
            <UpdateForm id={params['id']}/>
        </div>
    );
};

export default UpdatePage;