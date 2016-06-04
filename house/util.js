import React,{Component} from 'react'
import {
    View
}from 'react-native'

var util = {

    post:function (url,data,callback) {
        var fetchOptions = {
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify(data)
        };
        fetch(url,fetchOptions).then(
            (response)=>response.text()
        ).then((responseText)=>{
            callback(JSON.parse(responseText));
        })
    },
    get:function (url,callback) {

        try {
            let response = fetch(url);
            return response.data;
        } catch(error) {
            // Handle error
            console.error(error);
        }
    }
};

module.exports=util;