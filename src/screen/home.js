import Navbar from "../component/navbar"
import Ticket from "../component/Ticket"
import IMAGE from "./assets/concert1.jpg"
import IMAGE2 from "./assets/concert2.jpg"
import IMAGE3 from "./assets/concert3.jpg"
import Singers from "./assets/singer1.jpg"
import Singers1 from "./assets/singer2.jpg"
import Singers2 from "./assets/singer3.jpg"
import Singers3 from "./assets/singer4.jpg"
import Singers4 from "./assets/singer5.jpg"
import Singers5 from "./assets/singer7.jpg"
import { useNavigate } from "react-router-dom";
import * as React from 'react';
import WellectConnect from "../component/welletConnect"


function Home() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    let navigate = useNavigate()
    let meta = () => {
        console.log("sfsdf")
        handleOpen()
        // navigate("/Wellet")
    }
    return (
        <>
            <Navbar />
            <WellectConnect open={open} handleClose={handleClose} />
            <div className="hero">
                <div className="hero-description">

                    <div className="hero-text">
                        <h1 className="hero-header">
                            From <span style={{ color: "#FDB813" }} >sun up to sun down,</span> we have the best party in town.
                        </h1>
                        <p>Saturday Dec 31</p>
                        <p><i className="fa fa-map-marker fa-fw w3-text-white w3-xlarge w3-margin-bottom w3-margin-right"></i> loacation : Bahria Town</p>
                        <a href="#book" className="w3-btn w3-red w3-margin-top w3-round" style={{ width: "40%" }}>
                            Buy Ticket
                        </a>
                    </div>
                </div>
            </div>
            <div className="main">
                <div className="about" id="gallery">

                    <h2>Gallery</h2>

                    <div className="gallery">
                        <div className="about-image-1">
                            <img src={IMAGE} loading="lazy" alt="Photo by Muneeb Syed | Unsplash" />

                        </div>
                        <div className="about-image-2">
                            <div className="image-list">
                                <img src={IMAGE2} loading="lazy" alt="Photo by Pien Muller | Unsplash" />
                            </div>
                            <div className="image-list">
                                <img src={IMAGE3} loading="lazy" alt="Photo by Francisco Moreno | Unsplash" />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div id="Singers" className="poster">

                <h2>Singers & musicians</h2>

                <div className="poster-main">
                    <div className="poster-list">
                        <img src={Singers1} loading="lazy" alt="Photo by Taylor | Unsplash" />
                        <div className="poster-text">

                            <h3> Kaifi khalil
                            </h3>

                        </div>
                    </div>
                    <div className="poster-list">
                        <img src={Singers} loading="lazy" alt="Photo by hafizh armynazrie | Unsplash" />
                        <div className="poster-text">
                            <h3>Atif Aslam
                            </h3>
                        </div>
                    </div>
                    <div className="poster-list">
                        <img src={Singers2} loading="lazy" alt="Photo by Obafemi Moyosade | Unsplash" />
                        <div className="poster-text">
                            <h3>Talha Anjum
                            </h3>
                        </div>
                    </div>
                    <div className="poster-list">
                        <img src={Singers3} loading="lazy" alt="Photo by Joshua Hanson | Unsplash" />
                        <div className="poster-text">

                            <h3>Talha Yunus
                            </h3>

                        </div>
                    </div>
                    <div className="poster-list">
                        <img src={Singers4} loading="lazy" alt="Photo by Thiago Borrere Alvim | Unsplash" />
                        <div className="poster-text">

                            <h3>Abdul Hannan
                            </h3>

                        </div>
                    </div>
                    <div className="poster-list">
                        <img src={Singers5} loading="lazy" alt="Photo by Music HQ | Unsplash" />
                        <div className="poster-text">

                            <h3>Arijit Singh
                            </h3>

                        </div>
                    </div>
                </div>


                <Ticket />
            </div>
        </>
    )
}
export default Home