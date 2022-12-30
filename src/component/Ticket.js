import { useState } from "react"
import Image from "../screen/assets/vip.jpg"
import Web3 from "web3"
import { ABI } from "../config/abi"
import { sendData } from "../config/firbeaseMethod"
function Ticket() {
    let [event, setEvent] = useState()
    let [quantity, setQuantity] = useState()
    async function Submit(e) {
        e.preventDefault()
        if (!window.ethereum) {
            alert('plzz connnect metamask')
        }
        else {
            const web3 = new Web3(window.ethereum)
            let address = localStorage.getItem("UserAddress")
            let contract = new web3.eth.Contract(ABI, address)
            let response = await contract.methods.buyTicket(event, quantity).send({ from: address})
            console.log(response)
            localStorage.setItem("buyTicket",JSON.stringify(response))
            sendData(response, "Ticket")
                .then((success) => {
                    console.log(success);
                })
                .catch((err) => {
                    console.log(err);
                });
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
                            <button className="w3-btn w3-red  w3-round" style={{ width: "50%", marginTop: "20px" }} onClick={(e) => Submit(e)}>Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>


    )
}
export default Ticket