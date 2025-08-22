import { Link } from "react-router-dom"

import Section from "./components/section"
import TrackSlider from "./components/trackSlider/track-slider"

import ArtistAside from "./components/aside/artistFollow"
import TrackAside from "./components/aside/trackAside"
const Home = props => {

    return (
        <Section>
            <div className="d-flex flex-row justify-content-center align-items-center pt-5 w-100 mt-3">
                <div className="d-flex flex-column justify-content-start align-items-center w-75 h-100">
                    <TrackSlider title={"recently played!"} />
                    <TrackSlider title={"most played!"} />
                </div>
                <aside className="d-flex flex-column align-content-center justify-content-start w-25 h-100">
                    <div className="d-flex flex-column w-100 h-auto p-1 newTracks">
                        <h6>new tracks</h6>
                        {/* redirect to a page to show new track from artist and its just artist profile and name ! */}
                        <div className="d-flex flex-row justify-content-start align-items-center w-100 py-2 overflowx">
                            <Link className="mx-1">
                                <figure className="d-flex flex-column justify-content-center align-items-center">
                                    <img src={require("./assets/artists/AR.jpg")} alt="" />
                                    <p>armin van buuren</p>
                                </figure>
                            </Link>
                            <Link className="mx-1">
                                <figure className="d-flex flex-column justify-content-center align-items-center">
                                    <img src={require("./assets/artists/AR.jpg")} alt="" />
                                    <p>armin van buuren</p>
                                </figure>
                            </Link>
                            <Link className="mx-1">
                                <figure className="d-flex flex-column justify-content-center align-items-center">
                                    <img src={require("./assets/artists/AR.jpg")} alt="" />
                                    <p>armin van buuren</p>
                                </figure>
                            </Link>
                            <Link className="mx-1">
                                <figure className="d-flex flex-column justify-content-center align-items-center">
                                    <img src={require("./assets/artists/AR.jpg")} alt="" />
                                    <p>armin van buuren</p>
                                </figure>
                            </Link>
                        </div>
                    </div>

                    {/* artist you should follow !  3 contack! */}
                    <div className="d-flex flex-column justify-content-center align-items-start w-100 follow">
                        <div className="d-flex flex-row justify-content-between align-items-center w-100">
                            <h6>artist you should follow</h6>
                            <Link style={{ fontSize: 12 }}>show all </Link>

                        </div>
                        <div className="d-flex flex-column overflow-hidden ul">

                            <ArtistAside />
                            <ArtistAside />
                            <ArtistAside />
                            <ArtistAside />

                        </div>
                    </div>
                    {/* likes */}
                    <div className="d-flex flex-column justify-content-center align-items-start w-100 likes mt-5">
                        <div className="d-flex flex-row justify-content-between align-items-center w-100">
                            <h6>likes</h6>
                            <Link style={{ fontSize: 12 }}>219 likes </Link>

                        </div>
                        <div className="d-flex flex-column overflow-hidden ul">

                            <TrackAside />
                            <TrackAside />
                            <TrackAside />
                            <TrackAside />

                        </div>
                    </div>

                    {/* history */}
                    <div className="d-flex flex-column justify-content-center align-items-start w-100 likes mt-5">
                        <div className="d-flex flex-row justify-content-between align-items-center w-100">
                            <h6>History</h6>
                            

                        </div>
                        <div className="d-flex flex-column overflow-hidden ul">

                            <TrackAside />
                            <TrackAside />
                            <TrackAside />
                            <TrackAside />

                        </div>
                    </div>
                </aside>
            </div>
        </Section>
    )
}


export default Home