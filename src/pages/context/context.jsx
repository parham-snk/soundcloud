import { useContext, createContext, useState, useEffect, useRef } from "react";

const Context = createContext()

const ContextProvider = (props) => {
    const audioRef = useRef(new Audio())   // ✅ فقط یک بار ساخته میشه
    const [audio, setAudio] = useState({
        name: null,
        status: false,
        url: null
    })
    audioRef.current.onended=()=>{
        setAudio({...audio,status:false})
    }
    const playAudio = () => {
        audioRef.current.play()
        setAudio((prev) => ({ ...prev, status: true }))
    }

    const pauseAudio = () => {
        audioRef.current.pause()
        setAudio((prev) => ({ ...prev, status: false }))
    }

    const muted=(value)=>{
        if(value){
            audioRef.current.volume=1
        }else{
            audioRef.current.volume=0
        }
    }
    useEffect(() => {
        if (audioRef.current.played) {
            audioRef.current.pause()
            if (audio.url) {
                audioRef.current.src = audio.url
            }
        }
    }, [audio.url])

    return (
        <Context.Provider value={{ audio, setAudio, playAudio, pauseAudio,muted }}>
            {props.children}
        </Context.Provider>
    )
}

export { Context, ContextProvider }
