import "./featured.css"
import React from "react"

export const Featured = () => {
    return (
        <div className="featured">
            <div className="featuredItem">
                <img className="featuredImg" src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmVhbCUyMGVzdGF0ZXxlbnwwfHwwfHw%3D&w=1000&q=80"></img>
                <div className="featuredTitles">
                    <h1>Erode</h1>
                    <h2>143 properties</h2>
                </div>
            </div>
            <div className="featuredItem">
                <img className="featuredImg" src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg"></img>
                <div className="featuredTitles">
                    <h1>Coimbatore</h1>
                    <h2>13 properties</h2>
                </div>
            </div>
            <div className="featuredItem">
                <img className="featuredImg" src="https://thumbs.dreamstime.com/b/room-property-interior-design-living-121556753.jpg"></img>
                <div className="featuredTitles">
                    <h1>Chennai</h1>
                    <h2>100 properties</h2>
                </div>
            </div>
        </div>
    )
}
