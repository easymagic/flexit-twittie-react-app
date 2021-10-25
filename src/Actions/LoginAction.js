import { useEffect, useState } from "react";

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
   
     
};