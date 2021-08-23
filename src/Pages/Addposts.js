import React from 'react'
import Navigation from '../MainNavigation/Navigation'
import "./Pages Styles/Addposts.css"
import RightPost from './Components/RightPost'
function Addposts() {
    return (
        <div>
            <Navigation/>
            <div className="partition">
                    <div className="left">
                        <div class="frst">
                            <h1 className="head">Instructions</h1>
                            <ul className="frst-content">
                                <li>Enter your Name</li>
                                <li>Event Name or specify Event in some college or some organization</li>
                                <li>Enter your image url or Add image from local storage</li>
                                <li>Choose category of Event</li>
                                <li>Please provide your description of Event(eg:What special, How it is going to be, Who is going to speak)</li>
                                <li>Please enter correct date and time of the Event</li>
                                <li>Then Click submit</li>
                            </ul>
                        </div>
                        
                        <div className="second">
                            <h1 className="head">Disclaimar</h1>
                            <ul className="second-content">
                                <li>As a kind request.Dont spam the content</li>
                                <li>Dont enter wrong contents. Please enter Correct details</li>
                            </ul>
                        </div>
                        
                    </div>


                    <div className="right">
                        <RightPost/>
                    </div>
            </div>
            
            </div>
    )
}

export default Addposts