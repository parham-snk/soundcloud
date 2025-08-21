const Section = props => {
    return (
        <div className="position-relative d-flex justify-content-center align-content-center  container w-100">
            <section className="d-flex flex-column justify-content-start align-items-center w-75">
                {props.children}
            </section>
            
        </div>
    )
}

export default Section