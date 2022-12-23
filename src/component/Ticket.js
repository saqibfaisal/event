import Image from "../screen/assets/vip.jpg"
function Ticket() {
    return (
        <div class="buy-ticket" id="book">

            <h2>Buy a Ticket</h2>
            <div className="buy-ticket-main">
                <div className="buy-ticket-image">
                    <img src="https://spaces.w3schools.com/images/usOGcvSdvnk.jpg" loading="lazy" alt="Photo by Vidar Nordli-Mathisen | Unsplash" />
                </div>
                <div className="buy-ticket-form">
                    <p>Please fill this form, we will send your digital ticket to your email address</p>
                    <form>
                        <div>
                            <label for="fname">FullName</label><br />
                            <input type="text" id="fname" name="fname" placeholder="Full Name" />
                        </div>
                        <div>
                            <label for="Email">Email</label>
                            <br />
                            <input type="Email" id="email" name="Emial" placeholder="example@something.com" />
                            <button className="w3-btn w3-red  w3-round" style={{width:"50%", marginTop:"20px"}}>Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>



    )
}
export default Ticket