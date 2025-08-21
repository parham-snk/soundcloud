import { X, ChevronDoubleDown, PlayCircle, PauseCircle } from "react-bootstrap-icons"
import img from "../assets/orange.jpg"
import profile from "..//assets/artists/AR.jpg"
import { useContext } from "react"
import { Context } from "../context/context"

const PlayerFS = props => {
    const Track = (props) => {

        return <div className="track py-3 border-bottom d-flex flex-row justify-content-start align-items-center w-100 h-auto p-2 px-3">
            <img src={`http://localhost:8080/images/${props.image}`} alt="" className="rounded" />
            <div className="d-flex flex-row justify-content-between align-items-center w-25 ps-5">
                <div>{props.name.split('.')[0]}</div>
                <div>Armin van Buuren</div>
            </div>

            <p></p>
            <div className="d-flex flex-row justify-content-center align-items-center w-25">
                {
                    audio.status && audio.url == `http://localhost:8080/tracks/${props.name}` &&
                    <PauseCircle onClick={()=>{
                        setAudio({...audio,status:false})
                    }}/>
                }
                {
                    !audio.status &&
                    <PlayCircle className="" onClick={() => {
                        setAudio({
                            name: props.name.split(".")[0],
                            status: true,
                            url: `http://localhost:8080/tracks/${props.name}`
                        })
                    }} />
                }
                {
                    audio.status && audio.url!=`http://localhost:8080/tracks/${props.name}` &&
                    <PlayCircle className="" onClick={() => {
                        setAudio({
                            name: props.name.split(".")[0],
                            status: true,
                            url: `http://localhost:8080/tracks/${props.name}`
                        })
                    }} />
                }
            </div>
        </div>
    }
    const { tracks, setAudio, audio } = useContext(Context)

    const Tracks = tracks.map(t => <Track name={t.name} image={t.image} />)
    return (
        <div className="d-flex w-100 h-100 position-fixed bg-black z-3 fullSCR flex-column justify-content-start position-static align-items-center z-1">
            <div className="d-flex flex-row justify-content-center align-items-center w-100 p-3 text-white   top-0">
                <ChevronDoubleDown style={{ fontSize: 25, cursor: "pointer", zIndex: 1 }} onClick={async () => {
                    document.querySelector(".fullSCR").style.opacity = 0
                    setTimeout(() => {
                        props.close()
                    }, 300);
                }} />
            </div>
            <div className="sec w-75 h-100">
                <figure>
                    <img src={img} alt="" />
                    <figcaption className="position-relative d-flex flex-column justify-content-start align-items-start h-25 w-100 px-5">
                        <img src={profile} width={200} alt="" className="rounded-5  shadow" />
                        <h4 className="ps-3 mt-3">Armin van Buuren</h4>
                        <h1 className="ps-3 ">Tarzan</h1>
                        <div className="playlist d-flex flex-column justify-content-start align-items-center w-100 h-100 bg-black p-0 bg-opacity-75 rounded-2 overflow-y-scroll mt-2">
                            {Tracks}
                        </div>
                    </figcaption>
                </figure>
            </div>
        </div>
    )
}

export default PlayerFS