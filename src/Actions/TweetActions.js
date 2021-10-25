import { useState } from "react";
import { Api } from "../component/Config";

// const api = new Api('user-login');
export const useFetchTweets = ()=>{

    const [list,setList] = useState([]);
    const api = new Api('tweet');
    const pullTweets = ()=>{
     api.get().then(res=>{
         setList(res.data);
     });
    };

    return {list,pullTweets};

};