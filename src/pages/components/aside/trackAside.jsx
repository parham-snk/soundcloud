
import { HeartFill, Pause, PersonFillAdd, Play } from "react-bootstrap-icons"
import { useState } from "react"
import { Link } from "react-router-dom"
const TrackAside = props => {
    const [like, setLike] = useState(false)
    const [play, setPlay] = useState(false)
    return (
        <figure className="d-flex flex-row justify-content-center align-items-center py-2 TrackAside">

            <div className="w-auto h-auto position-relative  me-2">
                <img src={require("../../assets/black.jpg")} alt="" />
                <div className="t position-absolute top-0 start-0 bg-black bg-opacity-50 w-100 h-100 d-flex justify-content-center align-items-center">
                    {
                        !play &&
                        <Play onClick={() => {
                            setPlay(!play)
                        }} />
                    }
                    {
                        play &&
                        <Pause onClick={() => {
                            setPlay(!play)
                        }} />
                    }
                </div>
            </div>
            <figcaption className="d-flex flex-row justify-content-center align-items-center">
                <Link>
                    <div className="d-flex flex-column justify-content-center">
                        <p style={{ fontSize: 15 }}>martin garrix</p>
                        <p style={{ fontSize: 13 }}>124k</p>
                    </div>
                </Link>
                <div className="ms-3">
                    {
                        !like &&
                        <HeartFill onClick={() => {
                            setLike(!like)
                        }} className="ms-5" style={{ fontSize: 18 }} />
                    }
                    {
                        like &&
                        <HeartFill onClick={() => {
                            setLike(!like)
                        }} className="ms-5 text-danger" style={{ fontSize: 18 }} />
                    }
                </div>
            </figcaption>
        </figure>
    )
}

export default TrackAside