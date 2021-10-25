import { HashRouter , Route } from "react-router-dom";
import { useIsLogged } from "../Actions/LoginAction";
import { AppContext } from "./AppContext";
import { Login } from "./Login";
import { Register } from "./Register";
import { Tweets } from "./Tweets";

export const RouteManager =()=>{
  
    const {logged,setLogged} = useIsLogged(); 

    const value = {logged,setLogged};

    return (
    <AppContext.Provider value={value}>
        <HashRouter>
            <Route path="/" exact={true} component={Login} />
            <Route path="/login" exact={true} component={Login} />
            <Route path="/register" exact={true} component={Register} />
            <Route path="/tweet" exact={true} component={Tweets} />
        </HashRouter>
    </AppContext.Provider>
);
};