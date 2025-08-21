import { Link, NavLink } from "react-router-dom"
import Logo from "../../logo.svg"

import { Soundwave, Search, ChevronDown, PersonFillUp, Person, PersonFill, Heart, HeartFill, PlayFill, MusicNoteList, Broadcast, PersonAdd, PersonFillAdd, BellFill, Inbox, InboxFill } from 'react-bootstrap-icons'
import { useState } from "react"
const NavBar = props => {
    const [search, setSearch] = useState()
    const [showProfile, setShowProfile] = useState(false)
    const [showNotification, setshowNotification] = useState(false)
    const [showMessages, setShowMessages] = useState(false)

    const searchFunc = () => {
        alert(search)
    }
    return (
        <nav className="d-flex flex-row justify-content-start align-items-center w-100 position-fixed  z-1 shadow py-1  text-white">
            <ul className="d-flex flex-row container align-items-center h-auto px-5  my-0">
                <Link to={"/"} className="logo p-1">
                    <Soundwave style={{ fontSize: 30 }} />
                </Link>
                <ul className="d-flex flex-row align-items-center">
                    <li>
                        <NavLink to={"/"}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/login"}>Feed</NavLink>

                    </li>
                    <li>
                        <NavLink to={"/linrary"}>Library</NavLink>

                    </li>
                    <div className="searchBox position-relative d-flex mx-2 align-items-center justify-content-center">
                        <input type="text" onChange={e => {
                            setSearch(e.target.value)
                        }} className="p-1 px-2 m-1 rounded-1 mx-3" placeholder="search" />
                        <Search className="position-absolute end-0 me-4 text-opacity-75" onClick={searchFunc} />
                    </div>
                </ul>
                <li>
                    <Link>
                        For Artist!
                    </Link>
                </li>
                <li>
                    <Link>
                        Upload
                    </Link>
                </li>
                <div className="profile mx-2 d-flex flex-row justify-content-center align-items-center position-relative">
                    <div className="p" onClick={() => {
                        setShowMessages(false)
                        setshowNotification(false)
                        setShowProfile(!showProfile)
                    }}>
                        <img src={require("../assets/artists/AR.jpg")} className="rounded-5 m-2" alt="" />
                        <ChevronDown />
                    </div>
                    {
                        showProfile &&
                        <ul className="position-absolute d-flex flex-column  justify-content-start align-content-start start-0 top-0">
                            <li className="d-flex flex-row justify-content-start align-items-center p-1 start-0 w-100 overflow-hidden">
                                <Link className="w-100 p-2 d-flex flex-row justify-content-start align-items-center">
                                    <PersonFill className="" />
                                    <div className="mx-2">Profile</div>
                                </Link>

                            </li>
                            <li className="d-flex flex-row justify-content-start align-items-center p-1 start-0 w-100 overflow-hidden">
                                <Link className="w-100 p-2 d-flex flex-row justify-content-start align-items-center">
                                    <HeartFill style={{ fontSize: 20, marginLeft: 2 }} className="" />
                                    <div className="mx-2">Likes</div>
                                </Link>

                            </li>
                            <li className="d-flex flex-row justify-content-start align-items-center p-1 start-0 w-100 overflow-hidden">
                                <Link className="w-100 p-2 d-flex flex-row justify-content-start align-items-center">
                                    <MusicNoteList style={{ fontSize: 20, marginLeft: 2 }} className="" />
                                    <div className="mx-2">PLayList</div>
                                </Link>

                            </li>
                            <li className="d-flex flex-row justify-content-start align-items-center p-1 start-0 w-100 overflow-hidden">
                                <Link className="w-100 p-2 d-flex flex-row justify-content-start align-items-center">
                                    <Broadcast style={{ fontSize: 20, marginLeft: 2 }} className="" />
                                    <div className="mx-2">Station</div>
                                </Link>

                            </li>
                            <li className="d-flex flex-row justify-content-start align-items-center p-1 start-0 w-100 overflow-hidden">
                                <Link className="w-100 p-2 d-flex flex-row justify-content-start align-items-center">
                                    <PersonFillAdd style={{ fontSize: 20, marginLeft: 2 }} className="" />
                                    <div className="mx-2">Following</div>
                                </Link>

                            </li>
                            <li className="d-flex flex-row justify-content-start align-items-center p-1 start-0 w-100 overflow-hidden">
                                <Link className="w-100 p-2 d-flex flex-row justify-content-start align-items-center">
                                    <Soundwave style={{ fontSize: 20, marginLeft: 2 }} className="" />
                                    <div className="mx-2">Tracks</div>
                                </Link>

                            </li>
                        </ul>
                    }
                </div>
                <li className="ms-3 position-relative notification">
                    <div className="p">
                        <BellFill onClick={() => {
                            setShowMessages(false)
                            setShowProfile(false)
                            setshowNotification(!showNotification)
                        }} />
                    </div>
                    {
                        showNotification &&
                        <ul className="d-flex flex-column justify-content-start align-items-center px-2 h-100 rounded h-100">
                            <div className="p-2 py-1 d-flex flex-row justify-content-between align-items-center mt-2 w-100 ">
                                <h3>Notification</h3>
                                <Link>settings</Link>
                            </div>
                            <div className="d-flex flex-column w-100 h-75 overflow-y-scroll ul">
                                <figure className="w-100 d-flex flex-row justify-content-start my-1">
                                    <div className="w-25">
                                        <Link>
                                            <img src={require("../assets/artists/AR.jpg")} className="rounded-5" alt="" />
                                        </Link>
                                    </div>
                                    <figcaption className="d-flex flex-row justify-content-start align-items-center w-75 h-100">
                                        <div className="w-75 d-flex flex-row justify-content-start name align-items-start h-100">

                                            <div style={{ fontSize: 14 }} className="">
                                                <div className="text-white text-opacity-100" style={{ color: "grey" }}><Link style={{ fontSize: 13, color: "white", fontWeight: "bold" }}>armin van buuren :</Link></div>mentions you :"asdas"

                                            </div>
                                        </div>
                                        <div className="w-25">
                                            <Link>
                                                <img src={require("../assets/black.jpg")} className="rounded-1" alt="" />
                                            </Link>
                                        </div>
                                    </figcaption>
                                </figure>

                            </div>
                            <div className="d-flex flex-row justify-content-center align-items-center h-auto py-3">
                                <Link>
                                    <h6>view all notifications</h6>
                                </Link>
                            </div>
                        </ul>
                    }

                </li>
                <li className="ms-3 position-relative notification">
                    <div className="p">
                        <InboxFill onClick={() => {
                            setShowProfile(false)
                            setshowNotification(false)
                            setShowMessages(!showMessages)
                        }} />
                    </div>

                    {
                        showMessages &&
                        <ul className="d-flex flex-column justify-content-start align-items-center px-2 h-100 rounded h-100">
                            <div className="p-2 py-1 d-flex flex-row justify-content-between align-items-center mt-2 w-100 ">
                                <h3>messages</h3>
                            </div>
                            <div className="d-flex flex-column w-100 h-75 overflow-y-scroll ul">
                                <figure className="w-100 d-flex flex-row justify-content-start my-1">
                                    <div className="w-25">
                                        <Link>
                                            <img src={require("../assets/artists/AR.jpg")} className="rounded-5" alt="" />
                                        </Link>
                                    </div>
                                    <figcaption className="d-flex flex-row justify-content-start align-items-center w-75 h-100">
                                        <div className="w-75 d-flex flex-row justify-content-start name align-items-start h-100">

                                            <div style={{ fontSize: 14 }} className="">
                                                <div className="text-white text-opacity-100" style={{ color: "grey" }}><Link style={{ fontSize: 13, color: "white", fontWeight: "bold" }}>armin van buuren :</Link></div>mentions you :"asdas"

                                            </div>
                                        </div>
                                        <div className="w-25">
                                            <Link>
                                                <img src={require("../assets/black.jpg")} className="rounded-1" alt="" />
                                            </Link>
                                        </div>
                                    </figcaption>
                                </figure>

                            </div>
                            <div className="d-flex flex-row justify-content-center align-items-center h-auto py-3">
                                <Link>
                                    <h6>view all messages</h6>
                                </Link>
                            </div>
                        </ul>
                    }
                </li>
            </ul>
        </nav>
    )
}

export default NavBar