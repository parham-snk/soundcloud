import { useEffect, useState } from "react"
import { DiscFill, Pause, PlayFill, VolumeMuteFill, VolumeOff, VolumeDown, ListUl } from "react-bootstrap-icons"
import { Link } from "react-router-dom"
const Player = props => {
    const [play, setPlay] = useState(true)
    const [mute, setMute] = useState(false)
    useEffect(() => {
        document.getElementById("player").onmousedown = (e) => {
            document.getElementById("player").onmousemove=(e)=>{
                let x=e.pageX-(e.pageX+e.offsetX)
                console.log(x)
                let y= e.pageY-(e.pageY-e.offsetY)
                // document.getElementById("player").style.marginTop=`${y}px`
                document.getElementById("player").style.left=`150px`
            }
        }

    }, [])

    return (
        <div id="player" className="player d-flex flex-column justify-content-start py-2 align-items-center position-fixed start-0 ms-2  bg-black text-white shadow rounded">
            {play &&
                <div className="d-flex flex-column justify-content-center align-items-center">
                    <DiscFill className="disk mt-1" />
                    <Pause className="mt-2 " onClick={() => {
                        setPlay(false)
                    }} />
                    {
                        !mute &&
                        <VolumeMuteFill onClick={() => {
                            setMute(true)
                        }} />
                    }
                    {
                        mute &&
                        <VolumeDown onClick={() => {
                            setMute(false)
                        }} />
                    }

                    <Link>
                        <p>martin gattix </p>
                        <p>koma</p>
                    </Link>

                    <ListUl className="end-0 mt-2" />
                </div>
            }
            {!play &&
                <div id="player" className="d-flex flex-column justify-content-center align-items-center">
                    <DiscFill className="my-1" />
                    <PlayFill className="my-2 " onClick={() => {
                        setPlay(true)
                    }} />
                    {
                        !mute &&
                        <VolumeMuteFill onClick={() => {
                            setMute(true)
                        }} />
                    }
                    {
                        mute &&
                        <VolumeDown onClick={() => {
                            setMute(false)
                        }} />
                    }
                    <Link className="rounded-5">
                        <p>martin gattix </p>
                        <p>koma</p>
                    </Link>
                    <ListUl className="end-0 mt-2" />
                </div>
            }

        </div>
    )
}
export default Player