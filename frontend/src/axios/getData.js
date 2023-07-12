import axios from "axios"
import { useState } from "react";

export default function getData() {
    console.log('get data')
    try {
        return axios.get('/team4/vercontrol/configs').then((res) => {
        console.log(res);
        return res.data;
    }).catch((err) => {
        console.log(err);
    })
    } catch(e) {
        console.log(e)
    }
    
}