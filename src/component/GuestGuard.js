import { useContext } from "react";
import { Redirect } from "react-router";
import { AppContext } from "./AppContext";

export const GuestGuard =()=>{
  
    const {logged} = useContext(AppContext);
console.log(logged);
    if (logged != null && logged != 'null'){
       return (<Redirect to="/tweet" />)
    }

    return (<></>);

};