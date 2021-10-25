import { useDoLogin } from "../Actions/LoginAction";
import { useDoRegister } from "../Actions/RegisterActions";
import { GuestGuard } from "./GuestGuard";
import { Layout } from "./Layout";

export const Register =()=>{
    
    const {click,message,data,bindInput} = useDoRegister();
    

    return (<>
      <GuestGuard />
      <Layout>

          <div className="flex justify-center">

          <div className="p-2  space-y-5">

              {message.message? (
                  <>
                   <div className="m-2 bg-blue-300 p-2 shadow">
                     {message.message}
                   </div>
                  </>
              ):''}

              <div>
                <h2 className="text-center">
                    TWEETIE REGISTERATION
                </h2>
              </div>

              <div>
                <input className="outline-none p-3" placeholder="Name" {...bindInput('name')}  />
              </div>

              <div>
                <input className="outline-none p-3" placeholder="Email" {...bindInput('email')}  />
              </div>

              <div>
                <input type="password" className="outline-none p-3" placeholder="Password" {...bindInput('password')}  />
              </div>

              <div>
                <input type="password" className="outline-none p-3" placeholder="Confirm Password" {...bindInput('password_confirmation')}  />
              </div>


              <div>
                <button {...click} className="w-full bg-blue-600 text-white p-3 shadow rounded">{message.loading? 'Authenticating...':'Register'}</button>
              </div>


          </div>



          </div>
      </Layout>
    </>);
}