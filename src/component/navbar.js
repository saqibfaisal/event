import Button from '@mui/material/Button';
import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import WellectConnect from './welletConnect';
function Navbar() {
    const [open, setOpen] = React.useState(false);
    const [local, setLocal] = React.useState()
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    let navigate = useNavigate()
    let meta = async () => {
        if (window.ethereum) {
            // Do something
            window.ethereum.request({ method: 'eth_requestAccounts' })
            await window.ethereum.enable()
                .then(res => {
                    console.log(res);
                    setLocal(res[0])
                    localStorage.setItem("UserAddress", res[0])
                })
        } else {
            console.log("install metamask");
        }
    }
    React.useEffect(() => {
        setLocal(localStorage.getItem("UserAddress"))
    }, [])
    let TansferTicket = () => {
        handleOpen()
    }
    return (
        <div>
            <WellectConnect open={open} handleClose={handleClose} />
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
                            {local ?
                                <Button sx={{ backgroundColor: "#F44336", color: "white", borderRadius: "12px", padding: "9px" }} onClick={() => TansferTicket()}>Transfer </Button> :
                                < Button sx={{ backgroundColor: "#F44336", color: "white", borderRadius: "12px", padding: "9px" }} onClick={() => meta()}>Connect MetaMask</Button>
                            }
                        </div>
                    </div>

                </div>
            </header >
            {/* <Stack sx={{ width: '100%' }} spacing={2}>{
                            !errorMessage ?
                                <Alert severity="error">{errorMessage}</Alert>
                                : <Alert severity="success">Your MetaMask Connect Successfull</Alert>
                        }
                        </Stack> */}
        </div >
    )
}
export default Navbar