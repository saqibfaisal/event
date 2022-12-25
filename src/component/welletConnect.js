import { useState } from "react"
import { ethers } from "ethers";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    // border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    color: "black",
};
function WellectConnect(props) {
    let [errorMessage, setErrorMessage] = useState(null);
    let [defaultAccount, setDefaultAccount] = useState(null);
    let [userBalance, setUserBalance] = useState(null);
    let [connButtonText, setConnButtonText] = useState('Connect MetaMask');

    let connectWalletHandler = () => {
        // console.log("jksdghjf");
        if (window.ethereum) {
            // Do something
            window.ethereum.request({ method: 'eth_requestAccounts' })
                .then(res => {
                    console.log(res);
                    // Return the address of the wallet
                    setDefaultAccount(res)
                    accountChangedHnadler(res[0]);
                })
        } else {
            // setErrorMessage('Install MetaMask')
            console.log("install metamask");
        }
        let accountChangedHnadler = (newAccount) => {
            setDefaultAccount(newAccount)
            getUserBalance(newAccount);
        }
        let getUserBalance = (address) => {
            window.ethereum.request({
                method: 'eth_getBalance',
                params: [address, 'latest']
            }).then(balance => {
                // Return string value to convert it into int balance
                setUserBalance(ethers.utils.formatEther(balance))
                // setUserBalance(balance)

                //   // Yarn add ethers for using ethers utils or
                //   // npm install ethers
                //   console.log(ethers.utils.formatEther(balance))
                //   // Format the string into main latest balance
            })
        }
    }
    let { open, handleClose } = props
    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"  
            sx={{width:"100%" ,paddingTop:"10px", paddingBottom:"10px"}}
        >
            <Box sx={style}>
                <Button variant="contained" onClick={() => connectWalletHandler()} Container>{connButtonText}</Button>
                <Typography id="modal-modal-title"  component="h6" >
                    Address: {defaultAccount}
                </Typography>
                <Typography id="modal-modal-description" >
                    Balance: {userBalance}
                </Typography>
            </Box>
        </Modal>
    )
}
export default WellectConnect
// </div >
    // <div style={{ backgroundColor: "black" }}>
    //     <h4>Connection to metamask using window.ethereum method</h4>
    //     <button onClick={() => connectWalletHandler()} style={{ cursor: "pointer" }}></button>
    //     <h4>address:{defaultAccount}</h4>
    //     <h4>Balance:{userBalance}</h4>
    //     <p>{errorMessage}</p>
    // </div>