const TagEle=props=>{
    return(
        <div className="d-flex flex-row justify-content-center align-items-center">
            <label htmlFor="tag">{props.name}</label>
            <input type="checkbox" id="tag" value={props.name} />
        </div>
    )
}

export default TagEle