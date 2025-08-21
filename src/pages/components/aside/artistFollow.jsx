
import { PersonFillAdd } from "react-bootstrap-icons"
import { useState } from "react"
import { Link } from "react-router-dom"
const ArtistAside = props => {
    const [follow, setFollow] = useState(false)
    return (
        <figure className="d-flex flex-row justify-content-center align-items-center py-2">
            <Link>
                <img src={require("../../assets/artists/mt.jpg")} className="mx-2" alt="" />
            </Link>
            <figcaption className="d-flex flex-row justify-content-center align-items-center">
                <Link>
                    <div className="d-flex flex-column justify-content-center">
                        <p style={{ fontSize: 15 }}>martin garrix</p>
                        <p style={{ fontSize: 13 }}>124k</p>
                    </div>
                </Link>
                {
                    !follow &&
                    <button onClick={() => {
                        setFollow(!follow)
                    }} className="rounded-1 ms-4 px-3 border-0 btn-primary">follow</button>
                }
                {
                    follow &&
                    <button onClick={() => {
                        setFollow(!follow)
                    }} className="rounded-1 ms-3 px-2 border btn-primary  text-white" style={{ background: "none", border: "1px solid white !important", boxSizing: "border-box" }}>followed</button>
                }
            </figcaption>
        </figure>
    )
}

export default ArtistAside