import { Facebook, Github, Google, Linkedin } from "react-bootstrap-icons"
import { Link } from "react-router-dom"

const Register = () => {
    return (
        <div className="c d-flex flex-row justify-content-center align-items-center h-100 w-100 position-relative form">
           <figure className="d-flex  h-auto flex-column flex-md-row  justify-content-center align-items-center border  rounded-2 w-75 bg-white shadow overflow-hidden rounded">
                <img src={require("./assets/login.jpg")} className="w-75" alt="" />
                <figcaption className="bg-white w-25 h-100 d-flex flex-column justify-content-center align-items-center pt-5">
                    <input type="text" placeholder="username" className="border-0 w-75 text-center px-2 py-1 my-2 shadow rounded mt-5" />
                    <input type="password" placeholder="password" className="border-0 w-75 text-center px-2 py-1 my-2 shadow rounded" />
                    <input type="password" placeholder="repassword" className="border-0 w-75 text-center px-2 py-1 my-2 shadow rounded" />
                    <button className="btn btn-primary w-75 mt-5 mt-5">login</button>
                    <Link to={"/login"} className="text-black mt-2">login!</Link>
                    <div className="d-flex flex-row justify-content-center align-items-center my-3 auth">
                        <Link to=""><Google /></Link>
                        <Link to=""><Facebook /></Link>
                        <Link to=""><Linkedin /></Link>
                        <Link to=""><Github /></Link>
                    </div>
                </figcaption>
            </figure>
        </div>
    )
}
export default Register