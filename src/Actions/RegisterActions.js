import { useContext, useEffect, useState } from "react";
import { AppContext } from "../component/AppContext";
import { Api, useInput, useMessaging } from "../component/Config";


export const useDoRegister =()=>{
 
//   const {logged,setLogged} = useIsLogged();]
const {setLogged} = useContext(AppContext);
  const {message,sync} = useMessaging();
  const {data,bindInput} = useInput();
  

  const api = new Api('user-register');

  const click = {
      onClick:()=>{
         
         api.setData(data);

         sync({loading:true}); 
         api.store().then(({message,error,data})=>{
            sync({message,data,error,loading:false});
            if (!error)
            setLogged(data);
         });
      }
  };

  return {click,message,data,bindInput};
     
};