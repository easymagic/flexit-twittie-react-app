import { useContext } from "react";
import { Redirect } from "react-router";
import { AppContext } from "./AppContext";

export const AuthGuard =()=>{
  
    const {logged} = useContext(AppContext);

    if (!logged){
       return (<Redirect to="/" />)
    }

};