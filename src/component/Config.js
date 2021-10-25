import { useState } from "react";

export const BASE_API = 'https://flexit-laravel-twittie-app.herokuapp.com/api/';

export class Api{

  
     constructor(endpoint){
       this.endpoint = endpoint;
       [this.data,this.setData] = useState({});
     }

     get(){
        return fetch(BASE_API + this.endpoint,{
            method:'GET'
        }).then(res=>res.json());
     }

     dataToForm(k='',v=''){
        let form = new FormData;
        for (var i in this.data){
            form.append(i,data[i]);
        } 
        if (k != ''){
          form.append(k,v);
        }
        return form;
     }
     
     update(){
        return fetch(BASE_API + this.endpoint,{
            method:'POST',
            body:this.dataToForm('_method','PUT')
        }).then(res=>res.json());
     }

     store(){
        return fetch(BASE_API + this.endpoint,{
            method:'POST',
            body:this.dataToForm()
        }).then(res=>res.json());
     }

     destroy(){
        return fetch(BASE_API + this.endpoint,{
            method:'POST',
            body:this.dataToForm('_method','DELETE')
        }).then(res=>res.json());
     }

}