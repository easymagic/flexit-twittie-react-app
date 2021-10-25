import { useEffect, useState } from "react";
import { Api, useInput, useMessaging } from "../component/Config";


export const useDoRegister =()=>{
 
//   const {logged,setLogged} = useIsLogged();
  const {message,sync} = useMessaging();
  const {data,bindInput} = useInput();
  

  const api = new Api('user-register');

  const click = {
      onClick:()=>{
         
         api.setData(data);

         sync({loading:true}); 
         api.store().then(({message,error,data})=>{
            sync({message,error,loading:false});
            // setLogged(data);
         });
      }
  };

  return {click,message,data,bindInput};
     
};