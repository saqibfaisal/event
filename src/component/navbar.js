import Image from "../screen/assets/download.jpg"
import Button from '@mui/material/Button';
function Navbar() {
    return (
        <div>
            <header id="home">
                <div class="w3-top w3-light-gray">
                    <div class="w3-row w3-padding w3-white">
                        {/* <div  class="w3-col s3">
                            <img src={Image}/>
                        </div> */}
                        <div class="w3-col s3">
                            <a href="#home" class="w3-button w3-block w3-white">Home</a>
                        </div>
                        <div class="w3-col s3">
                            <a href="#gallery" class="w3-button w3-block w3-white">Gallery</a>
                        </div>
                        <div class="w3-col s3">
                            <a href="#Singers" class="w3-button w3-block w3-white">Singers</a>
                        </div>
                        {/* <div class="w3-col s3">
                            <a href="#book" class="w3-button w3-block w3-white">Book</a>
                        </div> */}
                        <div class="w3-col s3">
                            <Button sx={{backgroundColor:"#F44336",color:"white"}}>Connect MetaMask</Button>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
}
export default Navbar