const Section = props => {
    return (
        <div className="position-relative w-100 d-flex justify-content-center align-content-center ">
            <section className="rounded position-relative w-auto h-100 shadow py-3 px-2 d-flex flex-column justify-content-start align-items-center">
                {props.children}
            </section></div>
    )
}

export default Section