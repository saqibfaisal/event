import { useState } from "react"
import {ethers} from "ethers";
function WellectConnect() {
    let [errorMessage, setErrorMessage] = useState(null);
    let [defaultAccount, setDefaultAccount] = useState(null);
    let [userBalance, setUserBalance] = useState(null);
    let [connButtonText, setConnButtonText] = useState('Connect Wallet');

    let connectWalletHandler = () => {
        if (window.ethereum) {
            // Do something
            window.ethereum.request({ method: 'eth_requestAccounts' })
                .then(res => {
                    // Return the address of the wallet
                    // setDefaultAccount(res)
                    accountChangedHnadler(res[0]);
                })
        } else {
            setErrorMessage('Install MetaMask')
        }
        let accountChangedHnadler=(newAccount)=>{
            setDefaultAccount(newAccount)
            getUserBalance(newAccount);
        }
        let getUserBalance =(address)=>{
            window.ethereum.request({
                  method: 'eth_getBalance',
                  params: [address, 'latest']
                }).then(balance => {
                  // Return string value to convert it into int balance
                  setUserBalance(ethers.utils.formatEther(balance))
            
                //   // Yarn add ethers for using ethers utils or
                //   // npm install ethers
                //   console.log(ethers.utils.formatEther(balance))
                //   // Format the string into main latest balance
                })
        }
    }
    return (

        <div style={{ backgroundColor: "black" }}>
            <h4>Connection to metamask using window.ethereum method</h4>
            <button onClick={() => connectWalletHandler()} style={{ cursor: "pointer" }}>{connButtonText}</button>
            <h4>address:{defaultAccount}</h4>
            <h4>Balance:{userBalance}</h4>
            <p>{errorMessage}</p>
        </div>
    )
}
export default WellectConnect