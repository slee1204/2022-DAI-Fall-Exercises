import { Button, Loader } from 'semantic-ui-react'
import LoginForm from '../comps/LoginForm';
import 'semantic-ui-css/semantic.min.css'

//the router and states are mostly used in the page for 
// data / information state management
import { useRouter } from 'next/router'
import { useState } from 'react'
//before, during, after -> 3 states

export default function Home() {

  const r = useRouter();
  //before, during, after
  const [loginState, setLoginState] = useState("before")

  // var c = "twitter";
  // var btn_txt = "Click Me";

  // if(loginState === "before"){
  //   c = "google plus"
  //   btn_txt = "Log In"
  // }

  // if(loginState === "during"){
  //   c = "twitter"
  //   btn_txt = "Loging In"
  // }

  // if(loginState === "after"){
  //   c="yellow"
  //   btn_txt = "Success"
  // }


  // const HandleButton = () =>{
  //   if (loginState === "before"){
  //     setLoginState("during");
  //   }
  //   if (loginState === "during"){
  //     setLoginState("after");
  //   }
  //   if (loginState === "after"){
  //     r.push("/dashboard");
  //   }
  // }

  const Login = async () => {

    setLoginState("during");

    // it's going to take time to talk to an "endpoint" 
    // to see if your user credentials are legit
    //mock of the time passing -> ths code is useless, it doesn't do anything
    await new Promise(resolve=>setTimeout(resolve,2000));

    setLoginState("after");

    //it's going to stall for 1-2 seconds
    //mock of the time passing -> ths code is useless, it doesn't do anything
    await new Promise(resolve=>setTimeout(resolve,2000));

    r.push("/dashboard");
  }
  <div>
      {/* to use variable, you can put it in the braces */}

      {/* <Button color= {c} onClick={()=>Login()}>
      {btn_txt}
      {loginState === "during" && <Loader active />}
      </Button> */}
      <LoginForm
      loginState={loginState}
      onLoginClick={()=>Login()}
      />
  </div>

}



//handle the function, interaction and data