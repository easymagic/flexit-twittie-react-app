// import logo from './logo.svg';
import './App.css';
// import { useState } from 'react';

function App() {

  // const [a,b] = useState(10);
  
  // const bindInc = ()=>{
  //   return {
  //     onClick:()=>b(a + 1)
  //   };
  // }

  return (
      <>
      <div className="container mx-auto p-2">

           <div className="bg-blue-500 p-2 flex justify-between">
             <div className="text-white font-bold">
               Twittie
             </div>
             <div className="text-white text-xs mt-1 flex">
               <a href="p" className="mx-2">
                 Login
               </a>
               <a href="p"  className="mx-2">
                 Signup
               </a>
               <a href="p"  className="mx-2">
                 Profile
               </a>
               <a href="p"  className="mx-2">
                 Logout
               </a>
             </div>
           </div>


      </div>
      </>
    );
}

export default App;
