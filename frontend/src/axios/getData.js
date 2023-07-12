import axios from "axios"
import { useState } from "react";

export default function getData() {
    
    return axios.get('/team4/vercontrol/configs').then((res) => {
        return res.data;
    }).catch((err) => {
        console.log(err);
    })
    
    
}