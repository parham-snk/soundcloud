
import { useEffect, useState } from "react"
import Section from "../components/section"
import TagEle from "../components/tag"
import { Image, FileMusic } from "react-bootstrap-icons"
import axios from "axios"
const AddTrack = props => {
    const [name, setName] = useState(null)
    const [image, setImage] = useState(null)
    const [track, setTrack] = useState(null)

    const [imgFile, setImgFile] = useState(null)
    const [audioFile, setAudioFile] = useState(null)
    const [loading, setLoading] = useState(false)
    const upload = () => {
        setLoading(true)

        const formData = new FormData()
        formData.set("name", name)
        formData.set("image", imgFile)
        formData.set("track", audioFile)
        axios.post("http://192.168.1.243:8080/upload", formData).then(res => console.log(formData))
    }
    return (
        <Section>
            <div className="fileInput flex-sm-column w-25 position-relative overflow-hidden d-flex justify-content-center align-items-center shadow rounded m-4">
                <input type="file" name="image" id="image" className="opacity-0 w-100 h-100 p-5 z-1 position-absolute" accept="image/*" onChange={e => {
                    let url = URL.createObjectURL(e.target.files[0])
                    setImgFile(e.target.files[0])
                    setImage(url)
                }} />
                {
                    !image &&
                    <Image className="z-0 p-0 m-0" />
                }

                {
                    image &&
                    <img src={image} alt="" className=" z-0 p-0 m-0 w-100 h-100" />
                }
            </div>

            {
                !track &&
                <div className="fileInput w-25 position-relative d-flex justify-content-center align-items-center shadow rounded m-4">
                    <input type="file" name="image" id="image" className="opacity-0 w-100 h-100 p-5 z-1" accept="audio/*" onChange={(e) => {
                        let url = URL.createObjectURL(e.target.files[0])
                        setAudioFile(e.target.files[0])
                        setTrack(url)
                    }} />
                    <FileMusic className="position-absolute z-0 p-0 m-0" />

                </div>
            }

            {
                track &&
                <div className="d-flex">
                    <audio src={track} controls className="" ></audio>
                    <button onClick={() => {
                        setTrack(null)
                    }}>remove audio</button>
                </div>
            }
            <input type="text" name="name" onChange={e => {
                setName(e.target.value)
            }} id="name" placeholder="name of track!" className="p-2 border shadow w-25 rounded my-2" />
            <button className="btn btn-primary" onClick={upload}>upload!</button>
        </Section>
    )
}

export default AddTrack