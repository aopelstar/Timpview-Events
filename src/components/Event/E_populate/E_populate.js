import React, { Component } from 'react';
import './E_populate.css'

function E_populate(props){
    return(
        <div>
            <h1 className="about-h1">Congratulations!</h1>
            <div className = 'songs'>
            <div>Congratulations, {props.groom} and {props.bride} for scheduling your event on {props.date}
            .  We have your information now and you can be expecting a call from us at either {props.bPhone} or {props.gPhone} sometime in the near future.
            Please take a look below and confirm all of your information.
            </div>
            <div className="specifics">
            <div>
                Groom: {props.groom}
                </div>
                <div>
                Bride: {props.bride}
                </div>
                <div>
                Groom Phone: {props.gPhone}
                </div>
                <div>
                Bride Phone: {props.bPhone}
                </div>
                <div>
                Date: {props.date}
                </div>
                <div>
                Time: {props.time}
                </div>
                <div>
                Venue: {props.venue}
                </div>
                </div>
            </div>
        </div>
    )
}
export default E_populate;