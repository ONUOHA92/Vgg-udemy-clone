import React, { useState } from 'react';
import GoogleLogin from 'react-google-login';
import Userboard from  '../components/Userboard/Userboard'





function SignIn() {

    const [name, SetName] = useState("")
    const [email, SetEmail] = useState("")
    const [url, SetUrl] = useState("")

    const responseGoogle = (response) => {
        SetName(response.profileObj.name)
        SetEmail(response.profileObj.email)
        SetUrl(response.profileObj.imageUrl)
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-10 colo-md-8  mt-5 mb-5 text-center text-uppercase">
                    <h1>login here </h1>
                    <GoogleLogin
                        clientId="1090178179812-ai0jln7iib1srhvkm1skmr0mq2uj1alo.apps.googleusercontent.com"
                        onSuccess={responseGoogle}
                        isSignedIn={true}

                    />
                    
                </div>
            </div>
            <Userboard  name={name} email={email} url={url}/>
        </div>


    );
}



export default SignIn;