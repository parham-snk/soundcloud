import { Link } from "react-router-dom"
import wall1 from "./assets/artur-kechter-MhvLacl6yXQ-unsplash.jpg"
import wall2black from "./assets/black.jpg"
import { PersonFillAdd } from "react-bootstrap-icons"
import Section from "./components/section"
import { People } from "react-bootstrap-icons"
const Home = props => {
    return (
        <Section>
            <img src={wall2black} style={{ width: "95%", height: "600px" }} className="rounded" alt="" />
            <div className="d-flex flex-column justify-content-start w-100 px-4 py-3 mt-5 border-top border-bottom">
                <Link><h3>genres</h3></Link>
                <div className="d-flex flex-row justify-content-start align-items-center w-100 h-auto gens mt-1 py-3 w-100">
                    <Link><img src={require("./assets/genres/house1.png")} /></Link>
                    <Link><img src={require("./assets/genres/pop.jpg")} /></Link>
                    <Link><img src={require("./assets/genres/rap1.png")} /></Link>
                    <Link><img src={require("./assets/genres/house1.png")} /></Link>
                    <Link className="d-flex justify-content-center align-items-center w-100 shadow h-100 rounded">more ...</Link>
                </div>
            </div>

            <div className="d-flex flex-column justify-content-start w-100 px-4 py-3 border-top border-bottom overflow-x-scroll ">
                <Link><h3>Artists</h3></Link>
                <div className="d-flex flex-row justify-content-start align-items-center w-100 h-auto artists mt-1 py-3 w-100">
                    <Link>
                        <figure>
                            <img src={require("./assets/artists/AR.jpg")} alt="" />
                            <figcaption className="text-center">
                                <p>armin van buuren</p>
                                <div className="d-flex flex-row justify-content-center align-items-center">
                                    <People />
                                    <div className="mx-1">1.2k</div>
                                </div>
                            </figcaption>
                        </figure>
                    </Link>
                    <Link>
                        <figure>
                            <img src={require("./assets/artists/mt.jpg")} alt="" />
                            <figcaption className="text-center">
                                <p>martin garrix</p>
                                <div className="d-flex flex-row justify-content-center align-items-center">
                                    <People />
                                   <div className="mx-1">1.2k</div>
                                </div>
                            </figcaption>
                        </figure>
                    </Link>
                    <Link>
                        <figure>
                            <img src={require("./assets/artists/orjan.jpeg")} alt="" />
                            <figcaption className="text-center">
                                <p>orjan nilsen</p>
                                <div className="d-flex flex-row justify-content-center align-items-center">
                                    <People />
                                    <div className="mx-1">1.2k</div>
                                </div>
                            </figcaption>
                        </figure>
                    </Link>
                    <Link>
                        <figure>
                            <img src={require("./assets/artists/topic.jpeg")} alt="" />
                            <figcaption className="text-center">
                                <p>Topic</p>
                                <div className="d-flex flex-row justify-content-center align-items-center">
                                    <People />
                                    <div className="mx-1">1.2k</div>
                                </div>
                            </figcaption>
                        </figure>
                    </Link>
                    <Link className="d-flex justify-content-center align-items-center w-100 shadow h-100 rounded">more ...</Link>
                </div>
            </div>
        </Section>
    )
}


export default Home