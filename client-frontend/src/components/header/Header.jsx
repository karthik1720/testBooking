import React, { useState } from "react"
import { DateRange } from "react-date-range";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBed,  faCalendarDays, faCar, faPerson, faPlane, faTaxi } from "@fortawesome/free-solid-svg-icons"
import { format } from "date-fns"
import "./header.css"
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css'
const Header = ({type}) => {

    const [openDate, setOpenDate] = useState(false);
    const [date, setDate] = useState([{
        startDate: new Date(),
        endDate: new Date(),
        key: 'selection'
    }]);
    const [openOptions, setOpenOptions] = useState(false);
    const [options, setOptions] = useState({
        adult:1,
        children:2,
        room:1
    });

    const handleOption = (name, operation)=>{
        setOptions(prev=>{return{
                ...prev, 
                [name]: operation === "i" ? options[name] + 1 : options[name] -1,

            }})
    }


    return (
        <div className="header">
            <div className={type==="list" ? "headerContainer listMode" : "headerContainer"}>
                <div className="headerList">
                    <div className="headerListItem active">
                        <FontAwesomeIcon icon={faBed} />
                        <span>Hotels</span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faPlane} />
                        <span>Flights</span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faCar} />
                        <span>Cars</span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faBed} />
                        <span>Trains</span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faTaxi} />
                        <span>Taxi</span>
                    </div>
                </div>
                {type !=="list" &&
                    <>
                    <h1 className="headerTitle">This is for heading</h1>
                <p className="headerDesc">This is for descripion</p>
                <button className="headerBtn">Sign in/ Register</button>
                <div className="headerSearch">
                    <div className="headerSearchItem">
                        <FontAwesomeIcon icon={faBed} className="headerIcon" />
                        <input type="text" placeholder="Where are you going?" className="headerSearchInput"></input>
                    </div>
                    <div className="headerSearchItem">
                        <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
                        <span onClick={()=>setOpenDate(!openDate)} className="headerSearchText">{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
                        {openDate && <DateRange
                            editableDateInputs={true}
                            onChange={item => setDate([item.selection])}
                            moveRangeOnFirstSelection={false}
                            ranges={date}
                            className="date" />}
                    </div>
                    <div className="headerSearchItem">
                        <FontAwesomeIcon icon={faPerson} className="headerIcon" />
                        <span onClick={()=>{setOpenOptions(!openOptions)}} className="headerSearchText">{`${options.adult} adult - ${options.children} children - ${options.room} room`}</span>
                        {openOptions && <div className="options">
                            <div className="optionItem">
                                <span className="optionText">Adult</span>
                                <div className="optionCounter">
                                <button disabled={options.adult<=1} className="optionCounterButton" onClick={()=>handleOption("adult","d")}>-</button>
                                <span className="optionCounterNumber">{options.adult}</span>
                                <button className="optionCounterButton" onClick={()=>handleOption("adult","i")}>+</button>
                                </div>
                            </div>
                            <div className="optionItem">
                                <span className="optionText">children</span>
                                <div className="optionCounter">
                                <button disabled={options.children<=0} className="optionCounterButton" onClick={()=>handleOption("children","d")}>-</button>
                                <span className="optionCounterNumber">{options.children}</span>
                                <button className="optionCounterButton" onClick={()=>handleOption("children","i")}>+</button>
                                </div>
                            </div>
                            <div className="optionItem">
                                <span className="optionText">Room</span>
                                <div className="optionCounter">
                                <button disabled={options.room<=1} className="optionCounterButton" onClick={()=>handleOption("room","d")}>-</button>
                                <span className="optionCounterNumber">{options.room}</span>
                                <button className="optionCounterButton" onClick={()=>handleOption("room","i")}>+</button>
                                </div>
                            </div>
                        </div>}
                    </div>
                    <div className="headerSearchItem">
                        <button className="headerBtn">Search</button>
                    </div>
                </div>
                </>}
            </div>
        </div>
    )
}
export default Header;