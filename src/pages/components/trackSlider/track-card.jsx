import { useEffect, useState } from "react"
import { HeartFill, Pause, PlayFill } from "react-bootstrap-icons"
import { Link } from "react-router-dom"
const TrackCard = props => {
    const [like, setLike] = useState(false)
    const [play, setPlay] = useState(false)
    return (
        <figure className="trackCard p-1 mx-2 position-relative">
            <div className="b position-relative w-100 h-75 overflow-hidden rounded">
                <img src={require("../../assets/genres/house1.png")} alt="" />
                <div className="controll position-absolute w-100 h-100 top-0 start-0 bg-black bg-opacity-75 opacity-0 d-flex justify-content-center align-items-center">
                    {
                        !play &&
                        <PlayFill onClick={() => {
                            setPlay(!play)
                        }} className="play" />
                    }
                    {
                        play &&
                        <Pause onClick={() => {
                            setPlay(!play)
                        }} className="play" />
                    }
                    <div className="position-absolute end-0 bottom-0 p-2">
                        {
                            like &&
                            <HeartFill className="text-danger" onClick={() => {
                                setLike(!like)
                            }} />
                        }
                        {
                            !like &&
                            <HeartFill onClick={() => {
                                setLike(true)
                            }} />
                        }
                    </div>
                </div>
            </div>
            <figcaption className="p-1">
                <Link className="">trackName</Link>
                <p>artists names</p>
            </figcaption>
        </figure>
    )
}


export default TrackCard


