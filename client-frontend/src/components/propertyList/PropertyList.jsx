import React from "react"
import "./propertyList.css";

export const PropertyList = () => {
    return (
        <div className="pList">
            <div className="pListItem">
                <img className="pListImg" src="https://media-exp1.licdn.com/dms/image/C4E1BAQEyWbW0L-8YcQ/company-background_10000/0/1559251631660?e=2147483647&v=beta&t=b5eQ1GIcXEWI_xU873RS9gfqLlqGOyLDTAQeIT6iTcY" alt=""></img>
                <div className="pListTitles">
                    <h1 >Hotels</h1>
                    <h2>120 hotels</h2>
                </div>
            </div>
            <div className="pListItem">
                <img className="pListImg" src="https://images.trvl-media.com/hotels/19000000/18040000/18035400/18035357/3dce26d9_z.jpg" alt="" ></img>
                <div className="pListTitles">
                    <h1 >Resorts</h1>
                    <h2>120 Resorts</h2>
                </div>
            </div>
            <div className="pListItem">
                <img className="pListImg" src="http://images.summitmedia-digital.com/spotph/images/2022/03/31/summit-galleria-cebu-640-1648729474.jpg" alt=""></img>
                <div className="pListTitles">
                    <h1 >Villa</h1>
                    <h2>120 Villa</h2>
                </div>
            </div>
            <div className="pListItem">
                <img className="pListImg" src="http://images.summitmedia-digital.com/spotph/images/2022/03/31/summit-galleria-cebu-640-1648729474.jpg" alt=""></img>
                <div className="pListTitles">
                    <h1 >Villa</h1>
                    <h2>120 Villa</h2>
                </div>
            </div>
        </div>
    )
}
