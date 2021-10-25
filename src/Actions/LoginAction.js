import { useEffect, useState } from "react";
import { Api, useInput, useMessaging } from "../component/Config";

export const useIsLogged =()=>{
   const [logged,setLogged] = useState(localStorage.getItem("auth"));

   useEffect(()=>{
     
     if (logged){
       localStorage.setItem('auth',logged);
     }

   },[logged]);

   return {logged,setLogged};
};

export const useDoLogin =()=>{
 
  const {logged,setLogged} = useIsLogged();
  const {message,sync} = useMessaging();
  const {data,bindInput} = useInput();
  

  const api = new Api('user-login');

  const click = {
      onClick:()=>{
         
         api.setData(data);

         sync({loading:true}); 
         api.store().then(({message,error,data})=>{
            sync({message,error,loading:false});
            setLogged(data);
         });
      }
  };

  return {click,message,data,bindInput};
     
};