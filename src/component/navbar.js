import Image from "../screen/assets/download.jpg"
import Button from '@mui/material/Button';
import { useState } from "react";
import Images from "../loader.gif"
import * as React from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import { useNavigate } from "react-router-dom";
function Navbar() {
    let navigate = useNavigate()
    let [isLoading, SetIsLoading] = useState(false)
    let [errorMessage, setErrorMessage] = useState();
    let meta = () => {
        navigate("/hello")
    //     console.log("jksfjs");
    //     SetIsLoading(true)
    //     if (window.ethereum) {
    //         // Do something
    //         window.ethereum.request({ method: 'eth_requestAccounts' })
    //             .then(res => {
    //                 SetIsLoading(false)
    //                 console.log(res);
    //                 setErrorMessage(null)
    //                 // Return the address of the wallet
    //                 // setDefaultAccount(res)
    //                 // accountChangedHnadler(res[0]);
    //                 // {

    //                 //     
    //                 // }
    //             })
    //     } else {
    //         setErrorMessage('Install MetaMask')
    //         SetIsLoading(false)
    //         console.log("install metamask");
    //     }
    }
    return (
        <div>
            <header id="home">
                <div class="w3-top w3-light-gray">
                    <div class="w3-row w3-padding w3-white">
                        <div class="w3-col s3">
                            <a href="#home" class="w3-button w3-block w3-white">Home</a>
                        </div>
                        <div class="w3-col s3">
                            <a href="#gallery" class="w3-button w3-block w3-white">Gallery</a>
                        </div>
                        <div class="w3-col s3">
                            <a href="#Singers" class="w3-button w3-block w3-white">Singers</a>
                        </div>

                        <div class="w3-col s3" backgroundColor="#F44336">
                            {isLoading ? <img ClassName="metamaskBtn" src={Images} style={{ width: "50%", height: "20%" }} /> : <Button sx={{ backgroundColor: "#F44336", color: "white", borderRadius: "12px", padding: "9px" }} onClick={() => meta()}>Connect MetaMask</Button>}
                        </div>
                    </div>

                </div>
            </header>
            {/* <Stack sx={{ width: '100%' }} spacing={2}>{
                            !errorMessage ?
                                <Alert severity="error">{errorMessage}</Alert>
                                : <Alert severity="success">Your MetaMask Connect Successfull</Alert>
                        }
                        </Stack> */}
        </div>
    )
}
export default Navbar