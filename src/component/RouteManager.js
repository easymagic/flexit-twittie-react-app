import { HashRouter , Route } from "react-router-dom";
import { Login } from "./Login";
import { Register } from "./Register";
import { Tweets } from "./Tweets";

export const RouteManager =()=>{
  
    return (<HashRouter>
        <Route path="/" exact={true} component={Login} />
        <Route path="/login" exact={true} component={Login} />
        <Route path="/register" exact={true} component={Register} />
        <Route path="/tweet" exact={true} component={Tweets} />
        
    </HashRouter>);
};