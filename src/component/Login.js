import { useDoLogin } from "../Actions/LoginAction";
import { GuestGuard } from "./GuestGuard";
import { Layout } from "./Layout";

export const Login =()=>{
    
    const {click,message,data,bindInput} = useDoLogin();
    

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
                    TWEETIE LOGIN
                </h2>
              </div>
              <div>
                <input className="outline-none p-3" placeholder="Email" {...bindInput('email')}  />
              </div>

              <div>
                <input type="password" className="outline-none p-3" placeholder="Password" {...bindInput('password')}  />
              </div>

              <div>
                <button {...click} className="w-full bg-blue-600 text-white p-3 shadow rounded">{message.loading? 'Authenticating...':'Login'}</button>
              </div>


          </div>



          </div>
      </Layout>
    </>);
}