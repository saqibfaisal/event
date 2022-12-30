import { Button } from "@mui/material";
import { Box } from "@mui/system";
import Dashboard from "../../component/dashboard";

export default function Admin() {
    let Connect = () => {
        if (window.ethereum) {
            // Do something
            window.ethereum.request({ method: 'eth_requestAccounts' })
                .then(res => {
                    console.log(res);
                    // Return the address of the wallet
                    // setDefaultAccount(res[0])
                    // accountChangedHnadler(res[0]);

                    localStorage.setItem("AdminAddress", res[0])
                    // debugger
                })
        } else {
            // setErrorMessage('Install MetaMask')
            console.log("install metamask");
        }
    }
    return (
        <>
            <Dashboard />
            <Box sx={{display:"flex",alignItems:"center",justifyContent:"center" ,margin:"15px"}}>
                <Button onClick={() => Connect()} variant="contained" >Connect MetaMask</Button>
            </Box>
        </>
    )
}