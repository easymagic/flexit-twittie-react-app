import { GuestGuard } from "./GuestGuard";
import { Layout } from "./Layout";

export const Login =()=>{
    return (<>
      <GuestGuard />
      <Layout>

          <div className="flex justify-center">

          <div className="p-2  space-y-5">
              <div>
                <h2 className="text-center">
                    TWEETIE LOGIN
                </h2>
              </div>
              <div>
                <input className="outline-none p-3" placeholder="Email"  />
              </div>

              <div>
                <input className="outline-none p-3" placeholder="Password"  />
              </div>

              <div>
                <button className="w-full bg-blue-600 text-white p-3 shadow rounded">Login</button>
              </div>


          </div>



          </div>
      </Layout>
    </>);
}