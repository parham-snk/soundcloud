
import TrackCard from "./track-card"

const TrackSlider = ({ title, arr }) => {

    return (
        <div className="d-flex flex-column justify-content-center align-items-start w-100 position-relative">
            <h3 className="title">{title}</h3>
            <div className="d-flex flex-row justify-content-start align-items-center pt-3">
                <TrackCard/>

            </div>
        </div>
    )
}

export default TrackSlider