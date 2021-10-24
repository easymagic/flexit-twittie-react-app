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
      <div className="container mx-auto bg-blue-100">

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


           {/* contents */}
           <div className="flex flex-col">

               <textarea className="p-3 outline-none w-full h-10" placeholder="Twitt Something"></textarea>

               <button className="p-2 bg-blue-600 text-white mt-2 rounded shadow">Post Twit</button>


               <div className="rounded shadow p-5 mt-3 flex flex-row">
   
                  <div className="text-xs mr-2">
                    
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
</svg>
                  </div> 
                  <div className="bg-white shadow p-5 w-full rounded-br-2xl">
                    lorem ipsum content...
                  </div>


               </div>



               <div className="mt-3 flex flex-row justify-end p-3">

<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
<path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
</svg>

<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
<path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
</svg>

</div>


           </div>


      </div>
      </>
    );
}

export default App;
