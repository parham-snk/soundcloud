import { useEffect } from "react"

const Section = props => {
    useEffect(() => {
        document.querySelector("section").classList.add("fadeIn")
        window.scrollTo(0, 0)
    })
    return (
        <div className="position-relative w-100 d-flex justify-content-center align-content-center ">
            <section className="rounded position-relative w-auto shadow py-3 px-2 d-flex flex-column justify-content-start align-items-center">
                {props.children}
            </section>
        </div>
    )
}

export default Section