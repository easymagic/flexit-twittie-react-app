import { useContext } from "react";
import { Redirect } from "react-router";
import { AppContext } from "./AppContext";

export const GuestGuard =()=>{
  
    const {logged} = useContext(AppContext);

    if (logged){
       return (<Redirect to="/tweet" />)
    }

    return (<></>);

};