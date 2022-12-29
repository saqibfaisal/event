import { useState } from "react"
import Image from "../screen/assets/vip.jpg"
import Web3 from "web3"
import { ABI } from "../config/abi"
import { ethers } from "ethers"
function Ticket() {
    let [event, setEvent] = useState()
    let [quantity, setQuantity] = useState()
    async function Submit() {
        // console.log(event,quantity)
        if (window.ethereum) {
            // event.preventDefault()
            const web3 = new Web3(window.ethereum)
            // const signer = provider.getSigner();
            let contract = new web3.eth.Contract(ABI, localStorage.getItem("UserAddress"))
            let response = await contract.methods.buyTicket(event,quantity).call()
            console.log(response)
            // let response = await contract.methods.buyTicket(0, 10).call()
            // console.log(response)
        }
    }
    return (
        <div class="buy-ticket" id="book">

            <h2>Buy a Ticket</h2>
            <div className="buy-ticket-main">
                <div className="buy-ticket-image">
                    <img src="https://spaces.w3schools.com/images/usOGcvSdvnk.jpg" loading="lazy" alt="Photo by Vidar Nordli-Mathisen | Unsplash" />
                </div>
                <div className="buy-ticket-form">
                    <p>Please Enter the Event no and Quantity</p>
                    <form>
                        <div>
                            <label for="number">Event no</label><br />
                            <input type="number" id="Event" name="Event" placeholder="Event no" onChange={(e) => setEvent(e.target.value)} />
                        </div>
                        <div>
                            <label for="nukmber">quantity</label>
                            <br />
                            <input type="number" id="quantity" name="quantity" placeholder="Enter the quantity" onChange={(e) => setQuantity(e.target.value)} />
                            <button className="w3-btn w3-red  w3-round" style={{ width: "50%", marginTop: "20px" }} onClick={() => Submit()}>Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>


    )
}
export default Ticket