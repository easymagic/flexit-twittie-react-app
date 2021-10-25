import { useContext, useEffect, useState } from "react";
import { AppContext } from "../component/AppContext";
import { Api, useInput, useMessaging } from "../component/Config";

export const useIsLogged =()=>{
   const [logged,setLogged] = useState(localStorage.getItem("auth"));
   

   useEffect(()=>{
     
    //  if (logged){
       localStorage.setItem('auth',logged);
       console.log(logged);
    //  }

   },[logged]);

   return {logged,setLogged};
};

export const useDoLogin =()=>{
 
  const {logged,setLogged} = useContext(AppContext);
  const {message,sync} = useMessaging();
  const {data,bindInput} = useInput();
  

  const api = new Api('user-login');

  const click = {
      onClick:()=>{
         
         api.setData(data);

         sync({loading:true}); 
         api.store().then(({message,error,data})=>{
            sync({message,error,loading:false});
            if (!error)setLogged(JSON.stringify(data));
         });
      }
  };

  return {click,message,data,bindInput};
     
};