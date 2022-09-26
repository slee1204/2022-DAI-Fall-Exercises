import { Button, Input, Loader } from 'semantic-ui-react'


export default function LoginForm({
    loginState="before",
    onLoginClick=()=>{}

}){

    var c = "twitter";
    var btn_txt = "Click Me";

    if(loginState === "before"){
        c = "google plus"
        btn_txt = "Log In"
    }

    if(loginState === "during"){
        c = "twitter"
        btn_txt = "Loging In"
    }

    if(loginState === "after"){
        c="yellow"
        btn_txt = "Success"
    }


    return <div>
        <h3>Login Form</h3>
        <Input
        disabled={loginState !== "before"}
        placeholder="email"
        />
        <Input
        disabled={loginState !== "before"}
        placeholder="password"
        />
        <hr />
            <Button color= {c} onClick={onLoginClick}>
                {btn_txt}
                {loginState === "during" && <Loader active />}
            </Button>
    </div>

}


//deals with looks and feels